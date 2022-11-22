window.addEventListener('DOMContentLoaded', init);

function init() {
    let foodDiary = getFoodFromStorage();
    addFoodsToDocument(foodDiary);
    initFormHandler();
}

function getFoodFromStorage() {
    var diary = JSON.parse(localStorage.getItem('foodDiary'));
    if (diary == null) {
        return [];
    }
    return diary;
}

function addFoodsToDocument(foodDiary) {
    var breakfast_table = document.getElementById('breakfast_table');
    for (var i = 0; i < foodDiary.length; i++) {
        var ec = document.createElement('entry-card');
        ec.data = foodDiary[i];
        breakfast_table.append(rc);
    }
}

function saveFoodToDiary(foodDiary) {
    localStorage.foodDiary = JSON.stringify(foodDiary);
}


function initFormHandler() {
   
    
    // Manually creating two entry cards
    let entryCard = document.createElement('entry-card');
    let entry = {};
    entry['id'] = 'apple1';
    entry['foodName'] = 'Apple';
    entryCard.data = entry;

    let entryCard2 = document.createElement('entry-card');
    let entry2 = {};
    entry2['id'] = 'carrots';
    entry2['foodName'] = 'carrots';
    entryCard2.data = entry2;

    let foods = getFoodFromStorage();
    addFoodsToDocument(foods);
    let diary = [];
    diary.push(entryCard);
    localStorage.setItem('diary', JSON.stringify([entry, entry2]));
    console.log(JSON.parse(localStorage.getItem('diary')));

    // Gets a reference to the breakfast table
    var breakfast_table = document.getElementById('breakfast_table');

    breakfast_table.append(entryCard);
    breakfast_table.append(entryCard2);

    //breakfast_table.append(entryCard);
    //var lunch_table = document.getElementById('lunch_table');
    //breakfast_table.append(entryCard2);
    //console.log(JSON.parse(localStorage.getItem('diary')));
    var deleteButton = document.getElementById('deletefood');

    deleteButton.addEventListener('click', (event) => {
        // bt is the table of entry cards
        var bt = document.getElementById('breakfast_table');
        // Gets a list of all the entries
        var bt_entries = bt.getElementsByTagName('entry-card')

        // Loops through all the entries and sees if they are checked
        for (var i = 0; i < bt_entries.length; i++) {
            if(bt_entries[i].shadowRoot.querySelectorAll('input')[0].checked == true) {
                
            }
        }

       
    })

    var submitButton = document.getElementById('popButton1');
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
       // var date = JSON.stringify(document.getElementById("datepicker")); 
        var foodType = JSON.stringify(document.getElementById("foodType").value);
       // var mealTime = JSON.stringify(document.getElementById("mealType"));
       // var calories = JSON.stringify(document.getElementById("calories"));
        //console.log(date);
        var foodEntry = {};
        foodEntry['id'] = 'apple1';
        foodEntry['foodName'] = document.getElementById("foodType").value;
        var foodEntryCard = document.createElement('entry-card');
        foodEntryCard.data = foodEntry;
        
        var foodStorage = getFoodFromStorage();

        var breakfast_table1 = document.getElementById('breakfast_table');
        breakfast_table1.append(recipeCard);
    // B9. TODO - Get the recipes array from localStorage, add this new recipe to it, and
    //            then save the recipes array back to localStorage
        var temp_arr = getFoodFromStorage();
        temp_arr.push(foodEntry);
        localStorage.setItem('diary', JSON.stringify(temp_arr));
    })
    

}
