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
    await page.goto("http://localhost:5500")
    await page.screenshot({ path: "page.png" })
  })
})
