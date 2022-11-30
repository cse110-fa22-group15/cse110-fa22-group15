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
      await page.focus('#calories1')
      await page.keyboard.type('50')
      await Promise.all([
        page.click('#popButton1'),
        page.waitForNavigation(),
      ]);

      let localStorage = await page.evaluate(() =>  Object.assign({}, window.localStorage))
      expect(localStorage.breakfastDiary).toBe("[{\"foodName\":\"milk\",\"mealType\":\"breakfast\",\"calories\":\"50\"}]")
    })
    
    it('Add burger to lunch and steak to dinner', async() => {
      await page.click('#add_food')
      await page.focus('#foodType')
      await page.keyboard.type('burger')
      await page.select('#mealType', 'lunch')
      await page.focus('#calories1')
      await page.keyboard.type('800')
      await Promise.all([
        page.click('#popButton1'),
        page.waitForNavigation(),
      ]);

      await page.click('#add_food')
      await page.focus('#foodType')
      await page.keyboard.type('steak')
      await page.select('#mealType', 'dinner')
      await page.focus('#calories1')
      await page.keyboard.type('1000')
      await Promise.all([
        page.click('#popButton1'),
        page.waitForNavigation(),
      ]);

      let localStorage = await page.evaluate(() =>  Object.assign({}, window.localStorage))
      expect(localStorage.lunchDiary).toBe("[{\"foodName\":\"burger\",\"mealType\":\"lunch\",\"calories\":\"800\"}]")
      expect(localStorage.dinnerDiary).toBe("[{\"foodName\":\"steak\",\"mealType\":\"dinner\",\"calories\":\"1000\"}]")
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
      expect(localStorage.breakfastDiary).toBe('[]')
      expect(localStorage.lunchDiary).toBe("[{\"foodName\":\"burger\",\"mealType\":\"lunch\",\"calories\":\"800\"}]")
      expect(localStorage.dinnerDiary).toBe('[]')
    })

    it('Check the number of entries on screen after deleting 2 foods', async() => {
      let entries = await page.$$('entry-card');
      expect(entries.length).toBe(1);
    })

    it('Clear all local storage after test', async () => {
      await page.evaluate(() => localStorage.clear())
      let localStorage = await page.evaluate(() =>  Object.assign({}, window.localStorage))
      expect(JSON.stringify(localStorage)).toBe("{}")
    });
});
