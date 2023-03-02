var sajin = document.getElementsByClassName("fade");
// var sajin = document.querySelectorAll("div");
var index = 0;
var realSajin = Array.from(sajin);

function insertBlock() {
	sajin[0].style.display = "block";
}

window.onload = insertBlock;


function moveSlides(n) {
	
	index = index + n;
	var ssajin = realSajin.length;                         //4
	
	if (index > (ssajin-1)){
		index = 0;
	}
	
	if (index < 0) {
		index = (ssajin-1);
	}
	
	
	realSajin.forEach((element)=>{
		element.style.display = "none";
	}
	)
	
	// document.querySelector('a').style.color = "red";
	realSajin[index].style.display = "block";
}

