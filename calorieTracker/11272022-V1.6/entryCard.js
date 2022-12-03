/* eslint-disable camelcase */

class EntryCard extends HTMLElement {
    // Called once when document.createElement('recipe-card') is called, or
    // the element is written into the DOM directly as <recipe-card>
    constructor() {
      super(); 
      this.attachShadow({mode:'open'});
      
      var articleElem = document.createElement("article");
      
      var styleElem = document.createElement("style");
     
      styleElem.textContent = `* {
        font-family: sans-serif;
        margin: 0;
        padding: 0;
      }
      article {
        align-items: center;
        border: 1px solid black;
        background-color: rgb(188, 115, 20);
        border-radius: 8px;
        height: 30px;
        font-size: 18px;
        padding: 10px;
        width: 200px;
      }`;
     
      this.shadowRoot.append(styleElem);
      this.shadowRoot.append(articleElem);
    }
  
   
    set data(data) {
      // If nothing was passed in, return
      if (!data) return;
  
      // Select the <article> we added to the Shadow DOM in the constructor
      var article_select = this.shadowRoot.querySelector('article');
      
      //           Set the contents of the <article> with the <article> template given in
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
  