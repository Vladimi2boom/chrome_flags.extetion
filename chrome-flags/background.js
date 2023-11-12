chrome.action.onClicked.addListener((tab) => {
	chrome.tabs.update({url: "chrome://flags"});
 });
