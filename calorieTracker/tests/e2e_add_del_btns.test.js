describe('Test Add/Delete Button on Home Page.', () => {
    // Change this constant value before testing!
    const homeUrl = 'https://cse110-fa22-group15.github.io/cse110-fa22-group15/calorieTracker/calcumoleCode/Homepage.html';
    beforeAll(async () => {
      await page.goto(homeUrl)
    });

    it('Clear all local storage before test', async () => {
      await page.evaluate(() => localStorage.clear())
      let localStorage = await page.evaluate(() =>  Object.assign({}, window.localStorage))
      expect(JSON.stringify(localStorage)).toBe("{}")
    });

    it('Add milk to breakfast', async() => {
      await page.click('#add_food')
      await page.focus('#foodType')
      await page.keyboard.type('milk')
      await page.select('#mealType', 'breakfast')
      await page.focus('#calories')
      await page.keyboard.type('50')
      await Promise.all([
        page.click('#popButton1'),
        page.waitForNavigation(),
      ]);

      let localStorage = await page.evaluate(() =>  Object.assign({}, window.localStorage))
      expect(localStorage.breakfastDiary).toBe("[{\"id\":\"apple1\",\"foodName\":\"\\\"milkEnter food\\\"\",\"mealType\":\"\\\"breakfast\\\"\"}]")
    })
    
    it('Add burger to lunch and steak to dinner', async() => {
      await page.click('#add_food')
      await page.focus('#foodType')
      await page.keyboard.type('burger')
      await page.select('#mealType', 'lunch')
      await page.focus('#calories')
      await page.keyboard.type('800')
      await Promise.all([
        page.click('#popButton1'),
        page.waitForNavigation(),
      ]);

      await page.click('#add_food')
      await page.focus('#foodType')
      await page.keyboard.type('steak')
      await page.select('#mealType', 'dinner')
      await page.focus('#calories')
      await page.keyboard.type('1000')
      await Promise.all([
        page.click('#popButton1'),
        page.waitForNavigation(),
      ]);

      let localStorage = await page.evaluate(() =>  Object.assign({}, window.localStorage))
      expect(localStorage.lunchDiary).toBe("[{\"id\":\"apple1\",\"foodName\":\"\\\"burgerEnter food\\\"\",\"mealType\":\"\\\"lunch\\\"\"}]")
      expect(localStorage.dinnerDiary).toBe("[{\"id\":\"apple1\",\"foodName\":\"\\\"steakEnter food\\\"\",\"mealType\":\"\\\"dinner\\\"\"}]")
    })

    it('Check the number of entries on screen after adding 3 foods', async() => {
      let entries = await page.$$('entry-card');
      expect(entries.length).toBe(3);
    })

    it('Delete the entries in breakfast and dinner', async() => {
      let entries = await page.$$('entry-card');
      let sdRoot1 = await entries[0].getProperty('shadowRoot')
      let checkBox1 = await sdRoot1.$('input[type="checkbox"]')
      await checkBox1.click()

      let sdRoot2 = await entries[2].getProperty('shadowRoot')
      let checkBox2 = await sdRoot2.$('input[type="checkbox"]')
      await checkBox2.click()
      await Promise.all([
        page.click('#deletefood'),
        page.waitForNavigation(),
      ]);

      let localStorage = await page.evaluate(() =>  Object.assign({}, window.localStorage))
      console.log(localStorage)
      expect(localStorage.breakfastDiary).toBe('[]')
      expect(localStorage.lunchDiary).toBe("[{\"id\":\"apple1\",\"foodName\":\"\\\"burgerEnter food\\\"\",\"mealType\":\"\\\"lunch\\\"\"}]")
      expect(localStorage.dinnerDiary).toBe('[]')
    })

    it('Check the number of entries on screen after deleting 2 foods', async() => {
      let entries = await page.$$('entry-card');
      expect(entries.length).toBe(1);
    })
});
