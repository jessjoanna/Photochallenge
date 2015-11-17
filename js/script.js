var register1, register2, register3, register4;
var register1btn, register2btn, register3btn;

function init() {

	if(getParameterByName('page') === 'register' ){
		register1 = document.querySelector('.register01');
		register2 = document.querySelector('.register02');
		register3 = document.querySelector('.register03');
		register4 = document.querySelector('.register04');

		register();
	}
}

function register(){
	console.log('register');

	register1btn = document.querySelector('.register1btn');
	register1btn.addEventListener('click', show2);
}

function show2(e){
	e.preventDefault();

	register1.classList.add('hidden');
	register2.classList.remove('hidden');

	register2btn = document.querySelector('.register2btn');
	register2btn.addEventListener('click', show3);
}

function show3(e){
	e.preventDefault();

	register2.classList.add('hidden');
	register3.classList.remove('hidden');

	register3btn = document.querySelector('.register3btn');
	register3btn.addEventListener('click', show4);
}

function show4(e){
	e.preventDefault();

	register3.classList.add('hidden');
	register4.classList.remove('hidden');
}

function getParameterByName(name) {
   	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
   	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
       results = regex.exec(location.search);
   	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

init();
