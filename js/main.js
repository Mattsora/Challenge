var myVar = setInterval(myTimer, 1000);
var x = document.getElementById("header");
x.style.background = "url(img/Harbor.jpg)";
x.style.backgroundSize = "100% 100%";
x.style.backgroundRepeat = "no-repeat";

function myTimer() {
	if (myVar < 6) {
		x.style.transition = "all 1s";
		x.style.backgroundImage = "url('img/Harbor.jpg')";
	}
	if (myVar > 6){
		x.style.transition = "all 1s";
		x.style.backgroundImage = "url('img/Pexels photo 1.jpg')";
	}
	if (myVar > 11){
		x.style.transition = "all 1s";
		x.style.backgroundImage = "url('img/Pexels photo 2.jpg')";
	}
	if (myVar > 16){
		x.style.transition = "all 1s";
		x.style.backgroundImage = "url('img/woman-helmet-work-electrician.jpg')";
	}
	myVar+=1;
  	if (myVar == 21){
  		myVar = 0;
  	}
}


