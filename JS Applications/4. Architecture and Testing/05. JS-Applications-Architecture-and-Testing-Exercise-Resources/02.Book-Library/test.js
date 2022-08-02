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
    expect(1).to.equal(1)
  })
})
