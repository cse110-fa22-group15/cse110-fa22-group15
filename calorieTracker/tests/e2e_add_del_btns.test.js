describe('Test Add/Delete Button on Home Page.', () => {
  // Change this constant value before testing!
  const homeUrl = 'https://cse110-fa22-group15.github.io/cse110-fa22-group15/calorieTracker/calcumoleCode/Homepage.html'
  beforeAll(async () => {
    await page.goto(homeUrl)
  })

  it('Clear all local storage before test', async () => {
    await page.evaluate(() => localStorage.clear())
    const localStorage = await page.evaluate(() => Object.assign({}, window.localStorage))
    expect(JSON.stringify(localStorage)).toBe('{}')
  })

  it('Add milk to breakfast', async () => {
    await page.click('#add_food')
    await page.focus('#foodTyped1')
    await page.keyboard.type('milk')
    await page.select('#mealTyped1', 'breakfast')
    await page.focus('#calories1')
    await page.keyboard.type('50')
    await Promise.all([
      page.click('#popButton1'),
      page.waitForNavigation()
    ])

    const localStorage = await page.evaluate(() => Object.assign({}, window.localStorage))
    expect(localStorage.breakfastDiary).toBe('[{"foodName":"milk","mealType":"breakfast","calories":"50"}]')
  })

  it('Add burger to lunch and steak to dinner', async () => {
    await page.click('#add_food')
    await page.focus('#foodTyped1')
    await page.keyboard.type('burger')
    await page.select('#mealTyped1', 'lunch')
    await page.focus('#calories1')
    await page.keyboard.type('800')
    await Promise.all([
      page.click('#popButton1'),
      page.waitForNavigation()
    ])
    await page.waitForTimeout(500)
    await page.click('#add_food')
    await page.focus('#foodTyped1')
    await page.keyboard.type('steak')
    await page.select('#mealTyped1', 'dinner')
    await page.focus('#calories1')
    await page.keyboard.type('1000')
    await Promise.all([
      page.click('#popButton1'),
      page.waitForNavigation()
    ])

    const localStorage = await page.evaluate(() => Object.assign({}, window.localStorage))
    expect(localStorage.lunchDiary).toBe('[{"foodName":"burger","mealType":"lunch","calories":"800"}]')
    expect(localStorage.dinnerDiary).toBe('[{"foodName":"steak","mealType":"dinner","calories":"1000"}]')
  })

  it('Check the number of entries on screen after adding 3 foods', async () => {
    const entries = await page.$$('entry-card')
    expect(entries.length).toBe(3)
  })

  it('Delete the entries in breakfast and dinner', async () => {
    const entries = await page.$$('entry-card')
    const sdRoot1 = await entries[0].getProperty('shadowRoot')
    const checkBox1 = await sdRoot1.$('input[type="checkbox"]')
    await checkBox1.click()

    const sdRoot2 = await entries[2].getProperty('shadowRoot')
    const checkBox2 = await sdRoot2.$('input[type="checkbox"]')
    await checkBox2.click()
    await Promise.all([
      page.click('#deletefood'),
      page.waitForNavigation()
    ])

    const localStorage = await page.evaluate(() => Object.assign({}, window.localStorage))
    console.log(localStorage)
    expect(localStorage.breakfastDiary).toBe('[]')
    expect(localStorage.lunchDiary).toBe('[{"foodName":"burger","mealType":"lunch","calories":"800"}]')
    expect(localStorage.dinnerDiary).toBe('[]')
  })

  it('Check the number of entries on screen after deleting 2 foods', async () => {
    const entries = await page.$$('entry-card')
    expect(entries.length).toBe(1)
  })
})
