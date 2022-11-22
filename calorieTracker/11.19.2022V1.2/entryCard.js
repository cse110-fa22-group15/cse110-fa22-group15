// RecipeCard.js

class EntryCard extends HTMLElement {
    // Called once when document.createElement('recipe-card') is called, or
    // the element is written into the DOM directly as <recipe-card>
    constructor() {
      super(); // Inheret everything from HTMLElement
  
      // EXPOSE - START (All expose numbers start with A)
      // A1. TODO - Attach the shadow DOM to this Web Component (leave the mode open)
      this.attachShadow({mode:'open'});
      // A2. TODO - Create an <article> element - This will hold our markup once our data is set
      var articleElem = document.createElement("article");
      // A3. TODO - Create a style element - This will hold all of the styles for the Web Component
      var styleElem = document.createElement("style");
      // A4. TODO - Insert all of the styles from cardTemplate.html into the <style> element you just made
      styleElem.textContent = `* {
        font-family: sans-serif;
        margin: 0;
        padding: 0;
      }
      article {
        align-items: center;
        border: 1px solid black;
        background-color: #DFDCE5FF;
        border-radius: 8px;
        height: 30px;
        font-size: 18px;
        padding: 10px;
        width: 200px;
      }`;
      // A5. TODO - Append the <style> and <article> elements to the Shadow DOM
      this.shadowRoot.append(styleElem);
      this.shadowRoot.append(articleElem);
    }
  
    /**
     * Called when the .data property is set on this element.
     *
     * For Example:
     * let recipeCard = document.createElement('recipe-card'); // Calls constructor()
     * recipeCard.data = { foo: 'bar' } // Calls set data({ foo: 'bar' })
     *
     * @param {Object} data - The data to pass into the <recipe-card>, must be of the
     *                        following format:
     *                        {
     *                          "foodName": "string",
     *            
     *                        }
     */
    set data(data) {
      // If nothing was passed in, return
      if (!data) return;
  
      // A6. TODO - Select the <article> we added to the Shadow DOM in the constructor
      var article_select = this.shadowRoot.querySelector('article');
      
      // A7. TODO - Set the contents of the <article> with the <article> template given in
      //           cardTemplate.html and the data passed in (You should only have one <article>,
      //           do not nest an <article> inside another <article>). You should use Template
      //           literals (tempalte strings) and element.innerHTML for this.
      article_select.innerHTML = `
      <input type="checkbox" id="${data['id']}">
        <label for="${data['id']}">${data['foodName']}</label>`
    }
    
  }
  
  // A8. TODO - Define the Class as a customElement so that you can create
  //           'recipe-card' elements
  customElements.define('entry-card', EntryCard)
  