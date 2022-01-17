let lastTitle = '';
let channel = '' //Name of the channel 

function addLike(url) {  
		let title = document.querySelector("#container > h1").textContent
		if( lastTitle != title ) {
		     	let isName = document.querySelector("#text > a").textContent == channel; 
			let isLiked = document.querySelector("#top-level-buttons-computed  #button.style-scope.yt-icon-button").getAttribute('aria-pressed') == 'true'; 
			if( isName && !isLiked){ 
				document.querySelector("#top-level-buttons-computed  #button.style-scope.yt-icon-button").click();
			} 

			/*
			    This is used to ensure that setTimeout is only used once, note that the 'transition' 
			    event is fired multiple times as the page loads
			*/
			lastTitle = title; 
		}; 
	 };

document.body.addEventListener('transitionend', addLike, true);
