function greet(){
	window.alert("Hello world !");
}

function addItem(){
	let new_li = document.createElement("li");
	let new_text = document.createTextNode(document.getElementById("item").value);
	
	if(document.getElementById("delivery").checked == true ){
		new_li.style.color = "red";
	}
	
	if(document.getElementById("gift").checked == true ){
		new_li.style["text-decoration"] = "underline";
	}
	
	new_li.appendChild(new_text);
	document.getElementById("list").appendChild(new_li);
}

function removeItem(){
	let number = document.getElementById("nombre").value;
	let list = document.getElementById("list");
	list.removeChild(list.childNodes[number-1]);
}

function init(){
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
		  let filename = event.target.src.replace(/^.*[\\\/]/, '');
			  if(filename =="flower1.png"){
				  event.target.src = "flower2.png";
			  }
			  else{
					 event.target.src = "flower1.png";
			  }
	  }
	};

	document.getElementById("event").addEventListener("mouseover", changeSrc);
	
}