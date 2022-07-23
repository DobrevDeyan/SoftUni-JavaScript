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
const { before } = require("mocha")

let browser, page

describe("E2E tests", function () {
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
})
