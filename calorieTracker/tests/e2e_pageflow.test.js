
/* global page, describe, beforeAll, it, expect */
/* eslint no-undef: "error" */

describe('Basic Pageflow Tests for Website', () => {
  // Change this constant value before testing!
  const loginUrl = 'http://127.0.0.1:5501/calorieTracker/calcumoleCode/LoginPage.html'
  beforeAll(async () => {
    await page.goto(loginUrl)
  })

  it('Go to create user page if a new user', async () => {
    const yesBtn = await page.$('.yes')
    await Promise.all([
      await yesBtn.click(),
      await page.waitForNavigation()
    ])
    const currUrl = page.url()
    const currPage = currUrl.substring(currUrl.length - 12)
    expect(currPage).toBe('NewUser.html')
  })

  it('Go to goal weight page by clicking continue', async () => {
    const ctnBtn = await page.$("[value='Continue']")
    await Promise.all([
      await ctnBtn.click(),
      await page.waitForNavigation()
    ])
    const currUrl = page.url()
    const currPage = currUrl.substring(currUrl.length - 15)
    expect(currPage).toBe('GoalWeight.html')
  })

  it('Directly go to homepage if not a new user', async () => {
    await page.goto(loginUrl)
    const noBtn = await page.$('.no')
    await Promise.all([
      await noBtn.click(),
      await page.waitForNavigation()
    ])
    const currUrl = await page.url()
    const currPage = currUrl.substring(currUrl.length - 13)
    expect(currPage).toBe('Homepage.html')
  })
})
