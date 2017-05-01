

window.onload = function(e){ 

	const dogs = [{ name: 'Snickers', age: 2}, {name: 'Hugo', age: 8}]; 

	// 1. Regular 
	console.log('1. Hello.');

	// 2. Interpolated
	console.log('2. Hello, my name is %s.', 'Elena');

	// 3. Styted
	console.log('%c 3. I´m some great text.', 'background:#bada55; font-size: 30px;');

	// 4. Warning
	console.warn('4. Oh NOOO! There is a warning.');

	// 5. Error
	console.error('5. Oh NOOO! There is an error.');

	// 6. Info
	console.info('6. This is an info message.');

	// 7. Testing
	console.assert(1 === 2, '7 .That is WRONG.');

	// 8. Clearing
	//console.clear(); 

	// 9. Viewing DOM elements
	const p = document.querySelector('p')
	console.log(p);

	// 10. Grouping together
	Array.from(dogs).forEach(function (dog) {
		console.groupCollapsed(dog.name);
		console.log('10. This is ' + dog.name + '.');
   		console.log('10. ' + dog.name + ' is ' + dog.age + ' years old.');
   		console.groupEnd(dog.name);
	});

	// 11. Counting
	console.count('Steve'); 
	console.count('Wes'); 
	console.count('Steve'); 
	console.count('Joe'); 
	console.count('Steve'); 
	console.count('Steve'); 
	console.count('Steve'); 
	console.count('Steve'); 
	console.count('Mary'); 
	console.count('Wes'); 

	// 13. Timing
	console.time('Fetching data.');
	fetch('https://api.github.com/users/elenasanchezp')
		.then(data => data.json())
		.then(data => {
			console.timeEnd('Fetching data');
			console.log(data);
		})

	console.table(dogs);
}