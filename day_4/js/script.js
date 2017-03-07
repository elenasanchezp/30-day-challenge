
	function toggleOpen() {
		this.classList.toggle("open"); 
	}

	function toggleActive(e) {
		//console.log(e.propertyName); 
		
		if(e.propertyName === 'flex-grow' || e.propertyName === 'flex'){
			this.classList.toggle("open-active"); 	
		}		
	}


	window.onload = function(e){ 

		const panels = document.querySelectorAll('.panel');

		//console.log(panels);
		panels.forEach(panel => panel.addEventListener('click', toggleOpen));
		panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
	}