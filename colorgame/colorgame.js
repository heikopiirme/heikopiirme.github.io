
var numSquares = 6;
var colors = generateRandomColors(numSquares);


var squares = document.querySelectorAll(".square");
var pickedColor = pickAColor();
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var headingBg = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");



easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	message.textContent = "";
	resetButton.textContent = "Uued värvid";
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickAColor();
	headingBg.style.backgroundColor = "steelblue";
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	};
});

hardBtn.addEventListener("click", function() {
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	message.textContent = "";
	resetButton.textContent = "Uued värvid";
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickAColor();
	headingBg.style.backgroundColor = "steelblue";
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	};
});

resetButton.addEventListener("click", function() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickAColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "Uued värvid";
	message.textContent = "";
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	};
	headingBg.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			message.textContent = "Õige!";
			changeColors(clickedColor);
			headingBg.style.backgroundColor = clickedColor;
			resetButton.textContent = "Mängi uuesti";
		} else {
			this.style.backgroundColor = "#232323";
			message.textContent = "Proovi uuesti!";
		}
	});
}

function changeColors(color){
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickAColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];
	for(var i = 0; i < num; i++) {
		arr.push(randomColor());
	};
	return arr;
};

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}