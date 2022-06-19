function gather(node, nodes) {
    if (node.children) {
        node.children.forEach(n => { gather(n, nodes) });
    } else {
        nodes.push(n);
    }
    return nodes;
}

chrome.action.onClicked.addListener(function () {
    chrome.bookmarks.getTree(function (node) {
        var nodes = [];
        console.log(gather(node, nodes));
        //chrome.tabs.create({ "url": nodes[Math.floor(Math.random() * nodes.length)].url });
    });
});
