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

            }
        }

       
    })


}
