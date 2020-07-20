let statusURL = "";
function addLike(url) {  
		if( statusURL != window.location.href ) {
			setTimeout( e => {
			     	let isName = document.querySelector("#text > a").textContent == "Paulo Momento"; 
				let isLiked = document.querySelector("#top-level-buttons > ytd-toggle-button-renderer.style-scope.ytd-menu-renderer.force-icon-button.style-default-active"); 
				if( isName && !isLiked){ 
					document.querySelector("#top-level-buttons > ytd-toggle-button-renderer:nth-child(1)").click(); 
				} 

			},5000)
			statusURL = url;
		}; 
	 };

(document.body || document.documentElement).addEventListener('transitionend',
  	function(/*TransitionEvent*/ event) {
        	addLike(window.location.href);
	}, true);
