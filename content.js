chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "clicked") {
            chrome.runtime.sendMessage({ "message": "random_bookmark" });
        }
    }
);
