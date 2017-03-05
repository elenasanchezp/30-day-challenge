
	function handleUpdate(){
		const suffix = this.dataset.sizing || '';
		document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
	}

	window.onload = function(e){ 

		const inputs = document.querySelectorAll('.controls input');

		console.log(inputs);
		inputs.forEach(input => input.addEventListener('change', handleUpdate));
		inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
	}
