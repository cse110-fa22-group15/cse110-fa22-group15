/* global page, localStorage, it , expect, beforeAll */
/* eslint no-undef: "error" */

describe('Basic Pageflow Tests for Website', () => {
  // Change this constant value before testing!
  const loginUrl = 'https://cse110-fa22-group15.github.io/cse110-fa22-group15/calorieTracker/calcumoleCode/LoginPage.html';
  beforeAll(async () => {
    await page.goto(loginUrl)
  });

  it('Go to create user page if a new user', async () => {
    const yesBtn = await page.$('.yes')
    await yesBtn.click()
    await page.waitForNavigation()
    let currUrl = page.url()
    let currPage = currUrl.substring(currUrl.length - 12)
    expect(currPage).toBe('NewUser.html')
  });

  it('Go to goal weight page by clicking continue', async () => {
    const ctnBtn = await page.$("[value='Continue']")
    await ctnBtn.click()
    await page.waitForNavigation()
    let currUrl = page.url()
    let currPage = currUrl.substring(currUrl.length - 15)
    expect(currPage).toBe('GoalWeight.html')
  });

  it('Go to homepage after saving weight', async () => {
    const svBtn = await page.$("[value='Save']")
    await svBtn.click()
    await page.waitForNavigation()
    let currUrl = page.url()
    let currPage = currUrl.substring(currUrl.length - 13)
    expect(currPage).toBe('Homepage.html')
  });

  it('Directly go to homepage if not a new user', async () => {
    await page.goto(loginUrl)
    const noBtn = await page.$(".no")
    await noBtn.click()
    await page.waitForNavigation()
    let currUrl = page.url()
    let currPage = currUrl.substring(currUrl.length - 13)
    expect(currPage).toBe('Homepage.html')
  });
});
