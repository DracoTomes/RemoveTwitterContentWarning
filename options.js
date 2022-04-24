function save_options() {
    var remove_messages_value = document.getElementById('removeMessages').checked;
    browser.storage.sync.set({
      remove_messages: remove_messages_value,
    }, function (){
        var saved = document.getElementById('saved')
        saved.textContent = "Saved"
    });
}

function restore_options() {
    var gettingItem = browser.storage.sync.get('remove_messages');
    gettingItem.then((res) => {
        document.getElementById('removeMessages').checked = res.remove_messages;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);