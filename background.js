chrome.browserAction.onClicked.addListener(function () {
    chrome.bookmarks.getChildren("2", function (nodes) {
        chrome.tabs.create({ "url": nodes[Math.floor(Math.random() * nodes.length)].url });
    });
});
