const { chromium } = require("playwright-chromium")
const { expect } = require("chai")

describe("tests", async function () {
  // we don't use arrow func since this (context) has to be set on the place of execution (not creation)
  this.timeout(5000)

  let page, browser

  before(async () => {
    browser = await chromium.launch()
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

  it("works", async () => {
    // await new Promise((res) => setTimeout(res, 2000)) // simulate waiting in que with a promise
    // expect(1).to.equal(1)

    await page.goto(
      "http://127.0.0.1:5500/JS%20Applications/4.%20Architecture%20and%20Testing/05.%20JS-Applications-Architecture-and-Testing-Exercise-Resources/02.Book-Library/index.html"
    )
    await page.screenshot({ path: "page.png" })
  })
})
