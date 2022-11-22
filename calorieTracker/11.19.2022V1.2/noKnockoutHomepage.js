window.addEventListener('DOMContentLoaded', init);

function init() {
    let foodDiary = getFoodFromStorage();
    addFoodsToDocument(foodDiary);
    initFormHandler();
}

function getFoodFromStorage() {
    var diary = JSON.parse(window.localStorage.getItem('diary'));
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
        breakfast_table.append(ec);
    }
}

function saveFoodToDiary(foodDiary) {
    localStorage.diary = JSON.stringify(foodDiary);
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


    // Gets a reference to the breakfast table
    var breakfast_table = document.getElementById('breakfast_table');

    var x = JSON.parse(localStorage.getItem('diary'))

    var deleteButton = document.getElementById('deletefood');

    deleteButton.addEventListener('click', (event) => {
        // bt is the table of entry cards
        var bt = document.getElementById('breakfast_table');
        // Gets a list of all the entries
        var bt_entries = bt.getElementsByTagName('entry-card');

        // Loops through all the entries and sees if they are checked
        /*
        for (var i = 0; i < bt_entries.length; i++) {
            if(bt_entries[i].shadowRoot.querySelectorAll('input')[0].checked == true) {
                
            }
        }*/
        var toDelete = []
        var diary = getFoodFromStorage();
        // Loops through and finds which indices need to be deleted
        for (var i = 0; i < bt_entries.length; i++) {
            if (bt_entries[i].shadowRoot.querySelectorAll('input')[0].checked == true) {
                toDelete.push(i);
            }
        }
        // Goes and deletes the indices
        for (var i = toDelete.length - 1; i >= 0; i--) {
            diary.splice(toDelete[i], 1);
        }
        saveFoodToDiary(diary);
        location.reload();
       
    })

    var submitButton = document.getElementById('popButton1');
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        var foodType = JSON.stringify(document.getElementById("foodType").value);
        var mealType = JSON.stringify(document.getElementById("mealType").value)
        
        
        var foodEntry = {};
        foodEntry['id'] = 'apple1';
        foodEntry['foodName'] = foodType;
        var foodEntryCard = document.createElement('entry-card');
        foodEntryCard.data = foodEntry;
        
        var alreadyAdded = getFoodFromStorage();
        alreadyAdded.push(foodEntry);
        
        localStorage.diary = JSON.stringify(alreadyAdded);
        
    })
    

}

function openTab(tabName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(tabName).style.display = "block";
  elmnt.style.backgroundColor = color;

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
// Progress bar
var i = 0;
// There supposed to be a number represents calorie intake passed in for function move()
// like: function move(value) {
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);

    function frame() {
      // The width now is set as 90 since there's no calorie intake data pass in
      //eg: you should change it as if (width >= value) { 
      // where value is 90, calculated by: (calorie intake/ calorie goal) * 100
      // it will also handle over-intaked calories
      if (width >= 80) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

var check = false;
var mode = 0;

function reset_Check(){
  if(mode == 0){
    document.getElementById("food").submit();
  }
  else if(mode == 1){
    document.getElementById("goal").submit();
  }
  else if(mode == 2){
    document.getElementById("new_User").submit();
  }
  check = false;
}
function check_Pop_User(){
  mode = 2;
  click_Pop();
}
function check_Pop_Goal(){
  mode = 1;
  click_Pop();
}
function check_Pop_Food(){
  mode = 0;
  click_Pop();
}


// When the user clicks on div, open the pop_Up
function click_Pop() {
  check += 1;
  if(mode == 0){
    var pop_Up = document.getElementById("food");
  }
  else if(mode == 1){
    var pop_Up = document.getElementById("goal");
  }
  else if(mode == 2){
    var pop_Up = document.getElementById("new_User");
  }

  pop_Up.classList.toggle("show");
}
