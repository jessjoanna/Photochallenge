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

	//Foto preview

	// if (window.File && window.FileReader && window.FileList && window.Blob) {
	// 	if(document.querySelector('.add')){
	// 		var imageInput = document.querySelector('input[name=picture]');
	//   	var errorElement = imageInput.parentNode.querySelector('.error-message');
	//   	imageInput.addEventListener('change', function(event){
	//     	errorElement.style.display = 'none';
	//     	var img = imageInput.parentNode.querySelector('img');

	//     	if(img) {
	//       	imageInput.parentNode.removeChild(img);
	//     	}

	//     	if(imageInput.files.length > 0) {
	//       	var file = imageInput.files[0];
	//       	var error = '';

	//       	if(file.type.search('image') != 0) {
	//         	errorElement.innerText = 'The selected file is not an image';
	//         	errorElement.style.display = 'block';
	//       	} else {
	//         	var reader = new FileReader();
	//         	reader.onload = function(event) {
	//           	var img = document.createElement('img');
	//           	img.onload = function() {
	//             	if(img.width != 612 || img.height != 612) {
	//               	errorElement.innerText = 'The image needs to be 612x612';
	//               	errorElement.style.display = 'block';
	//             	} else {
	//               	imageInput.parentNode.appendChild(img);
	//             	}
	//           	}
	//           img.setAttribute('src', reader.result);

	//         };
	//         reader.readAsDataURL(file);
	//       }
	//     }
	//   });
	// 	}

	// }

	register1.classList.add('hidden');
	register2.classList.remove('hidden');

	register2btn = document.querySelector('.register2btn');
	register2btn.addEventListener('click', show3);
}

function getParameterByName(name) {
   	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
   	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
       results = regex.exec(location.search);
   	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

init();
