// const { chromium } = require("playwright-chromium")

// const test = (async () => {
//   //   const browser = await chromium.launch()
//   const browser = await chromium.launch({ headless: false, slowMo: 2000 })
//   const page = await browser.newPage()
//   await page.goto("https://google.com/")
//   await page.screenshot({ path: "example.png" })
//   await browser.close()
// })()

const { chromium } = require("playwright-chromium")
const { expect } = require("chai")

let browser, page // Declare reusable variables

describe("E2E tests", async function () {
  // this.timeout(5000)

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

  it("initial load", async () => {
    await page.goto(
      "http://127.0.0.1:5500/4.%20Architecture%20and%20Testing/05.%20JS-Applications-Architecture-and-Testing-Lab-Resources/01.%20Accordion/index.html"
    )
    // await page.screenshot({ path: "page.png" })

    await page.waitForSelector(".accordion")
    const content = await page.textContent("#main")

    expect(content).to.contains("Scalable Vector Graphics")
    expect(content).to.contains("Open standard")
    expect(content).to.contains("Unix")
    expect(content).to.contains("ALGOL")
  })

  it("More button works", async () => {
    await page.goto("http://localhost:5500")
    await page.waitForSelector(".accordion")

    await page.click("text=More")
    await page.waitForResponse(/articles\/details/i)
    await page.waitForSelector(".accordion p")
    const visible = await page.isVisible(".accordion p")
    expect(visible).to.be.true
  })
})
