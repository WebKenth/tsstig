// Saves options to chrome.storage.sync.
function save_options() {
  var urls = document.getElementById('urls').value;
  chrome.storage.sync.set({
    urls: urls
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    urls: 'test'
  }, function(items) {
    document.getElementById('urls').value = items.urls;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);