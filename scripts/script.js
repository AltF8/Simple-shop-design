/*function Check(){
	var checkbox = document.querySelector('.checkbox > span');
	checkbox.style.display = checkbox.style.display == 'none' ? 'inline' : 'none';
}*/

var checkbox = document.querySelectorAll('.checkbox > span');

for (let i = 0; i < checkbox.length; i++){
	console.log(i);
	checkbox[i].addEventListener('click', function() {
		checkbox[i].style.display = checkbox[i].style.display == 'none' ? 'inline' : 'none';
	});

}
	

