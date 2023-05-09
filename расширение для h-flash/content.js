// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
	if (document.body.getAttribute('itemtype')=='http://schema.org/ItemPage'){
		var fcE = document.head.querySelector('script').textContent.toString();
		var out = '';
		out = fcE.slice(fcE.indexOf("swfpath")+11,fcE.indexOf('"',fcE.indexOf("swfpath")+11))
		const site = "https://h-flash.com"
		alert(site + out,' ')
	}else{
		alert('Go to the game page, I cant find game')
	}
}