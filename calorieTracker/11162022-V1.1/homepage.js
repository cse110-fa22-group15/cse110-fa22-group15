window.addEventListener('DOMContentLoaded', init);

function init() {

}

function getEntriesFromStorage() {
    var entries = JSON.parse(window.localStorage.get('entries'));
    if (entries == null) {
        return [];
    }
    return entries;
}

function addEntriesToDocument(entries) {
    var main_ref = document.getElementById('bf');
}