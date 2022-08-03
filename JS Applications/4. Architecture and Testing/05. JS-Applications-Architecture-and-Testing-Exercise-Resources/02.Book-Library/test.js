const { chromium } = require("playwright-chromium")
const { expect } = require("chai")

const mockData = {
  "d953e5fb-a585-4d6b-92d3-ee90697398a0": {
    author: "J.K.Rowling",
    title: "Harry Potter and the Philosopher's Stone",
  },
  "d953e5fb-a585-4d6b-92d3-ee90697398a1": {
    author: "Svetlin Nakov",
    title: "C# Fundamentals",
  },
}

function json(data) {
  return {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }
}

describe("tests", async function () {
  // we don't use arrow func since this (context) has to be set on the place of execution (not creation)
  this.timeout(6000)
  //   this.timeout(6000)

  let page, browser

  before(async () => {
    browser = await chromium.launch()
    // browser = await chromium.launch({ headless: false, slowMo: 500 })
  })
  after(async () => {
    await browser.close()
  })

  beforeEach(async () => {
    page = await browser.newPage()
  })
  afterEach(async () => {
    await page.close()
  })

  //FIRST TEST
  it("loads and displays all books", async () => {
    // await new Promise((res) => setTimeout(res, 2000)) // simulate waiting in que with a promise
    // await page.screenshot({ path: "page.png" })
    await page.route("**/jsonstore/collections/books*", (route) => {
      route.fulfill(json(mockData))
    })

    await page.goto(
      "http://127.0.0.1:5500/JS%20Applications/4.%20Architecture%20and%20Testing/05.%20JS-Applications-Architecture-and-Testing-Exercise-Resources/02.Book-Library"
    )

    await page.click("text=Load All Books")
    await page.waitForSelector("text=Harry Potter")

    const rows = await page.$$eval("tr", (rows) =>
      rows.map((row) => row.textContent.trim())
    )

    expect(rows[1]).to.contains("Harry Potter")
    expect(rows[1]).to.contains("Rowling")
    expect(rows[2]).to.contains("C# Fundamentals")
    expect(rows[2]).to.contains("Nakov")
  })

  //SECOND TEST
  it("can create book", async () => {
    await page.goto(
      "http://127.0.0.1:5500/JS%20Applications/4.%20Architecture%20and%20Testing/05.%20JS-Applications-Architecture-and-Testing-Exercise-Resources/02.Book-Library"
    )
    await page.fill('form#createForm >> input[name="title"]', "Title")
    await page.fill('form#createForm >> input[name="author"]', "Author")

    const [request] = await Promise.all([
      page.waitForRequest((req) => req.method() == "POST"),
      page.click("form#createForm >> text=Submit"),
    ])
    const data = JSON.parse(request.postData())
    expect(data.title).to.equal("Title")
    expect(data.author).to.equal("Author")

    // await page.waitForTimeout(60000)
  })

  //THIRD TEST
  //   it.only("can edit book", async () => {
  //     await page.goto(
  //       "http://127.0.0.1:5500/JS%20Applications/4.%20Architecture%20and%20Testing/05.%20JS-Applications-Architecture-and-Testing-Exercise-Resources/02.Book-Library"
  //     )
  //     await page.value('form#editForm >> input[name="title"]', "Title")
  //     await page.value('form#editForm >> input[name="author"]', "Author")

  //     const [request] = await Promise.all([
  //       page.waitForRequest((req) => req.method() == "POST"),
  //       page.click("form#editForm >> text=Submit"),
  //     ])
  //     const data = JSON.parse(request.postData())
  //     // expect(data.title).to.equal("Title")
  //     // expect(data.author).to.equal("Author")

  //     // await page.waitForTimeout(60000)
  //   })
  it(`loads correct form`, async () => {
    // await page.route("**/jsonstore/collections/books*", (request) =>
    //   request.fulfill(json(mockData))
    // )
    await page.goto(
      "http://127.0.0.1:5500/JS%20Applications/4.%20Architecture%20and%20Testing/05.%20JS-Applications-Architecture-and-Testing-Exercise-Resources/02.Book-Library"
    )
    await page.click("#loadBooks")
    await page.click(".editBtn:nth-child(1)")

    const editFormDisplay = await page.$eval(
      "#editForm",
      (el) => el.style.display
    )
    const createFormDisplay = await page.$eval(
      "#createForm",
      (el) => el.style.display
    )

    expect(editFormDisplay).to.eq("block")
    expect(createFormDisplay).to.eq("none")
  })
  it(`loads correct information`, async () => {
    // await page.route("**/jsonstore/collections/books*", (request) => {
    //   request.fulfill(json(mockData))
    // })
    await page.goto(
      "http://127.0.0.1:5500/JS%20Applications/4.%20Architecture%20and%20Testing/05.%20JS-Applications-Architecture-and-Testing-Exercise-Resources/02.Book-Library"
    )
    await page.route("**/jsonstore/collections/books/*", (request) => {
      request.fulfill(json({ title: "title", author: "author" }))
    })
    await page.click("#loadBooks")
    await page.click(".editBtn:nth-child(1)")

    const [response] = await Promise.all([
      page.waitForResponse((r) =>
        r.request().url().includes("/jsonstore/collections/books/")
      ),
      page.click('text="Save"'),
    ])
    const data = JSON.parse(await response.body())

    expect(data.title).to.eq("title")
    expect(data.author).to.eq("author")
  })
  it(`sends correct request`, async () => {
    // await page.route("**/jsonstore/collections/books*", (request) => {
    //   request.fulfill(json(mockData))
    // })
    await page.goto(
      "http://127.0.0.1:5500/JS%20Applications/4.%20Architecture%20and%20Testing/05.%20JS-Applications-Architecture-and-Testing-Exercise-Resources/02.Book-Library"
    )
    await page.route("**/jsonstore/collections/books/*", (request) =>
      request.fulfill(
        json({
          title: "title",
          author: "author",
        })
      )
    )

    await page.click("#loadBooks")
    await page.click(".editBtn:nth-child(1)")

    const [response] = await Promise.all([
      page.waitForResponse(
        (r) =>
          r.request().url().includes("/jsonstore/collections/books/") &&
          r.request().method() === "PUT"
      ),
      page.click('text="Save"'),
    ])
    const data = JSON.parse(await response.body())
    expect(data).to.deep.eq({
      title: "title",
      author: "author",
    })
  })
})
