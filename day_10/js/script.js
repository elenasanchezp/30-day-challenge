



window.onload = function(e){ 

	const checkboxes = document.querySelectorAll('.inbox .item');
	let lastChecked; 

	function handleCheck (e){

		let inBetween = false; 

		dataId = this.getAttribute('data-id');

		if($('.item[data-id=' + dataId + ']')[0].classList.contains('checked')) {
			$('.item[data-id=' + dataId + ']')[0].classList.remove('checked'); 
			return; 
		}
	
		$(this).addClass('checked');

		// check if they had the shift key down and the checkbox are checked. 
		if(e.shiftKey && this.classList.contains('checked')) {
			checkboxes.forEach(checkbox => {

				if (checkbox === this || checkbox === lastChecked){
					inBetween = !inBetween; 
				}

				if(inBetween){
					checkbox.checked = true; 
					dataId = checkbox.getAttribute('data-id');
					$('.item[data-id=' + dataId + ']').addClass('checked');
				}
			}); 
		}

		lastChecked = this; 
		dataId = lastChecked.getAttribute('data-id');
		$('.item[data-id=' + dataId + ']').addClass('checked');
	}

	checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
}