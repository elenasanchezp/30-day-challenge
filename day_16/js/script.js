

window.onload = function(e){ 

 	// Get elements
	const hero = document.querySelector('.hero'); 
	const text = hero.querySelector('.my-text');
	const walk = 100;

	function shadow(e){
		const width = hero.offsetWidth; 
		const height = hero.offsetHeight; 
	
		let  {offsetX: 	x, offsetY: y } = e; 

		if (this !== e.target){
			x = x + e.target.offsetLeft;
			y = y + e.target.offsetTop;  
		}

		const xWalk = Math.round((x / width * walk) - (walk / 2)); 
		const yWalk = Math.round((y / height * walk) - (walk / 2));

		console.log(xWalk, yWalk);
		text.style.textShadow = `${xWalk}px ${yWalk}px 0 #9D9D00 `;
	}

	// Hook up the event listeners 
	hero.addEventListener('mousemove', shadow);  
}

