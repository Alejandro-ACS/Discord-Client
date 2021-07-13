console.log("¡Extension works!");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {

  let msg = {
    txt: "true"
  }

  chrome.tabs.sendMessage(tab.id, msg);

}