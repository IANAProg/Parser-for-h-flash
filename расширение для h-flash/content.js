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
		var fcE = document.querySelector("[itemprop~=contentUrl][content]").content;
		const site = "https://h-flash.com"
		alert(site + fcE)
	}else{
		alert('Go to the game page, I cant find game')
	}
}