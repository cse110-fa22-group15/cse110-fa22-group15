/* global page, describe, it, expect, beforeAll */
/* eslint-disable semi */
describe('Basic Pageflow Tests for Website', () => {
  // Change this constant value before testing!
  const loginUrl = 'https://cse110-fa22-group15.github.io/cse110-fa22-group15/calorieTracker/calcumoleCode/LoginPage.html'
  beforeAll(async () => {
    await page.goto(loginUrl)
  })

  it('Go to create user page if a new user', async () => {
    const yesBtn = await page.$('#yes')
    await yesBtn.click()
    await page.waitForNavigation()
    const currUrl = page.url()
    const currPage = currUrl.substring(currUrl.length - 12)
    expect(currPage).toBe('NewUser.html')
  })

  it('Go to goal weight page by clicking continue', async () => {
    await page.focus('#name')
    await page.keyboard.type('bruz')
    await page.focus('#age')
    await page.keyboard.type('134')
    const ctnBtn = await page.$('#continue')
    await ctnBtn.click()
    await page.waitForNavigation()
    const currUrl = page.url()
    const currPage = currUrl.substring(currUrl.length - 15)
    expect(currPage).toBe('GoalWeight.html')
  })

  it('Go to homepage after saving weight', async () => {
    await page.focus('#weight1')
    await page.keyboard.type('100')
    await page.focus('#weight2')
    await page.keyboard.type('200')
    const svBtn = await page.$('#save')
    await svBtn.click()
    await page.waitForNavigation()
    const currUrl = page.url()
    const currPage = currUrl.substring(currUrl.length - 13)
    expect(currPage).toBe('Homepage.html')
  })

  it('Directly go to homepage if not a new user', async () => {
    await page.goto(loginUrl)
    const noBtn = await page.$('.no')
    await noBtn.click()
    await page.waitForNavigation()
    const currUrl = page.url()
    const currPage = currUrl.substring(currUrl.length - 13)
    expect(currPage).toBe('Homepage.html')
  })
})
