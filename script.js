function greet(){
	window.alert("Bonjour tout le monde !");
}

function init(){
	document.getElementById("first").src = "flower1.png";
	let images = document.getElementById("container").getElementsByTagName("img");
	images[0].src = "flower1.png";
	images[1].src = "flower2.png";
	images[2].src = "flower1.png";
	images[3].src = "flower2.png";
	images[4].src = "flower1.png";
	document.getElementById("text").innerHTML = "<div><p>Your are great!</p></div>";

	let image = document.createElement("img");
	image.src = "flower2.png";
	document.getElementById("new_element").appendChild(image);
	
	let spans = document.getElementById("rainbow").getElementsByTagName("span");
	let colors = ["red", "orange", "yellow", "green", "purple", "pink"];

	for (var i = spans.length - 1; i >= 0; i--) {
		spans[i].style.color = colors[i];
	}
	
	var changeSrc = function(event) {
	  if (event.target.src) {
		event.target.src = "flower2.png";
	  }
	};

	document.getElementById("event").addEventListener("mouseover", changeSrc);
}