chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { "message": "clicked" });
    });
});

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "random_bookmark") {
            chrome.bookmarks.getChildren("2", function (nodes) {
                chrome.tabs.create({ "url": nodes[Math.floor(Math.random() * nodes.length)].url });
            });
        }
    }
);
