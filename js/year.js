function myFunction() {
	let d = new Date();
	let n = d.getFullYear();
	document.getElementById('current-year').innerHTML = n;
}

myFunction();

let getEmail = document.querySelector('.my-email');

getEmail.addEventListener('mouseenter', () => {
	let email = 'octaviookumu@gmail.com';
	getEmail.innerHTML = email;
});

getEmail.addEventListener('mouseleave', () => {
	let email = 'hire me!!';
	getEmail.innerHTML = email;
});
