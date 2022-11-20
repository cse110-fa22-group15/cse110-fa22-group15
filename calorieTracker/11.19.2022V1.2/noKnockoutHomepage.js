window.addEventListener('DOMContentLoaded', init);

function init() {
    initFormHandler();
}

function initFormHandler() {
   
    // Creating an entry card
    var entryCard = document.createElement('entry-card');
    var entry = {}
    entry['id'] = 'apple1'
    entry['foodName'] = 'Apple'
    entryCard.data = entry;

    var entryCard2 = document.createElement('entry-card');
    var entry2 = {}
    entry2['id'] = 'carrots'
    entry2['foodName'] = 'carrots'
    entryCard2.data = entry2;

    
    var breakfast_table = document.getElementById('breakfast_table');
    breakfast_table.append(entryCard);
    var lunch_table = document.getElementById('lunch');
    lunch_table.append(entryCard2)
    
}
  