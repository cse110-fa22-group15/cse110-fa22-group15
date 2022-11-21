window.addEventListener('DOMContentLoaded', init);

function init() {
    initFormHandler();
}

function initFormHandler() {
   
    // Manually creating two entry cards
    var entryCard = document.createElement('entry-card');
    var entry = {};
    entry['id'] = 'apple1';
    entry['foodName'] = 'Apple';
    entryCard.data = entry;

    var entryCard2 = document.createElement('entry-card');
    var entry2 = {};
    entry2['id'] = 'carrots';
    entry2['foodName'] = 'carrots';
    entryCard2.data = entry2;

    
    var breakfast_table = document.getElementById('breakfast_table');
    breakfast_table.append(entryCard);
    var lunch_table = document.getElementById('lunch_table');
    breakfast_table.append(entryCard2);

    var deleteButton = document.getElementById('deletefood');

    deleteButton.addEventListener('click', (event) => {
        // bt is the table of entry cards
        var bt = document.getElementById('breakfast_table');
        // Gets a list of all the entries
        var bt_entries = bt.getElementsByTagName('entry-card')

        // Loops through all the entries and sees if they are checked
        for (var i = 0; i < bt_entries.length; i++) {
            if(bt_entries[i].shadowRoot.querySelectorAll('input')[0].checked == true) {
                console.log('hello');
            }
        }
        

        //console.log(bt.getElementsByTagName('entry-card')[0].shadowRoot.getElementById('apple1').checked);
    })

    // bt is equal to the table
    var bt = document.getElementById('breakfast_table');
    //console.log(bt);
    // List of breakfast entry cards
    var bt_entries = bt.getElementsByTagName('entry-card')
    //console.log()

    
    //console.log(bt.getElementsByTagName('entry-card')[0]);
    //console.log(bt.getElementsByTagName('entry-card')[0].shadowRoot.querySelectorAll('input')[0].checked);
}
  