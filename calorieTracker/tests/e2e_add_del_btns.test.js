describe('Test Add/Delete Button on Home Page.', () => {
  // Change this constant value before testing!
  const homeUrl = 'http://127.0.0.1:5501/calorieTracker/11272022-V1.61/Homepage.html'
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
    await page.focus('#foodType')
    await page.keyboard.type('milk')
    await page.select('#mealType', 'breakfast')
    await page.focus('#calories')
    await page.keyboard.type('50')
    await Promise.all([
      page.click('#popButton1'),
      page.waitForNavigation()
    ])

    const localStorage = await page.evaluate(() => Object.assign({}, window.localStorage))
    expect(localStorage.breakfastDiary).toBe('[{"id":"apple1","foodName":"\\"milkEnter food\\"","mealType":"\\"breakfast\\""}]')
  })

  it('Add burger to lunch and steak to dinner', async () => {
    await page.click('#add_food')
    await page.focus('#foodType')
    await page.keyboard.type('burger')
    await page.select('#mealType', 'lunch')
    await page.focus('#calories')
    await page.keyboard.type('800')
    await Promise.all([
      page.click('#popButton1'),
      page.waitForNavigation()
    ])

    await page.click('#add_food')
    await page.focus('#foodType')
    await page.keyboard.type('steak')
    await page.select('#mealType', 'dinner')
    await page.focus('#calories')
    await page.keyboard.type('1000')
    await Promise.all([
      page.click('#popButton1'),
      page.waitForNavigation()
    ])

    const localStorage = await page.evaluate(() => Object.assign({}, window.localStorage))
    expect(localStorage.lunchDiary).toBe('[{"id":"apple1","foodName":"\\"burgerEnter food\\"","mealType":"\\"lunch\\""}]')
    expect(localStorage.dinnerDiary).toBe('[{"id":"apple1","foodName":"\\"steakEnter food\\"","mealType":"\\"dinner\\""}]')
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
    expect(localStorage.lunchDiary).toBe('[{"id":"apple1","foodName":"\\"burgerEnter food\\"","mealType":"\\"lunch\\""}]')
    expect(localStorage.dinnerDiary).toBe('[]')
  })

  it('Check the number of entries on screen after deleting 2 foods', async () => {
    const entries = await page.$$('entry-card')
    expect(entries.length).toBe(1)
  })
})
