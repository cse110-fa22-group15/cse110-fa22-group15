// RecipeCard.js

class EntryCard extends HTMLElement {
  // Called once when document.createElement('recipe-card') is called, or
  // the element is written into the DOM directly as <recipe-card>
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })

    const articleElem = document.createElement('article')

    const styleElem = document.createElement('style')

    styleElem.textContent = `* {
      font-family: sans-serif;
      margin: 0;
      padding: 0;
      text-overflow: ellipsis;
    }
    article {
      align-items: center;
      border: 1px solid black;
      background-color: rgb(188, 115, 20);
      border-radius: 8px;
      height: 30px;
      font-size: 18px;
      padding: 10px;
      width: 250px;
    }`

    this.shadowRoot.append(styleElem)
    this.shadowRoot.append(articleElem)
  }

  set data (data) {
    // If nothing was passed in, return
    if (!data) return

    // Select the <article> we added to the Shadow DOM in the constructor
    const article_select = this.shadowRoot.querySelector('article')

    //           Set the contents of the <article> with the <article> template given in
    //           cardTemplate.html and the data passed in (You should only have one <article>,
    //           do not nest an <article> inside another <article>). You should use Template
    //           literals (template strings) and element.innerHTML for this.
<<<<<<< HEAD
    const foodName = JSON.stringify(data.foodName)
    const mealType = JSON.stringify(data.mealType)
    const calories = parseInt(data.calories)
    // alert(foodname);
=======
    var foodName = JSON.stringify(data['foodName'])
    var mealType = JSON.stringify(data['mealType'])
    var calories = parseInt(data['calories'])
>>>>>>> 7165b3d2e60090f0a551a93ef07c6bf1beda4531
    article_select.innerHTML = `
      <input type="checkbox" id="${data.id}">
      <label for="${data.id}">${data.foodName}</label>
      <label for="${data.id}"> — ${data.calories} cal</label>
      <button type="submit" id="edit-button" onclick = click_Pop_Edit(${foodName},${mealType},${calories})><img src="./editButton.png" width="27" height="28" alt="edit"/></button>`
  }
}

customElements.define('entry-card', EntryCard)
