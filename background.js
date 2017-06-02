chrome.storage.sync.get(['urls'], function(items) {
	var urls = items.urls;
	urls = urls.split(',');
	console.log(urls);
	var links = [];
	debugger;
	for(var i = 0; i < urls.length; i++)
	{
		links.push({
			hostPrefix : urls[i]
		});
	}
console.log(links);
	chrome.webNavigation.onCompleted.addListener(
	function(details) {
		console.log(details);
	    chrome.tabs.executeScript(details.tabId, {
	        file: "main.js"
	    });
	},
	{
		url : links
	});
});