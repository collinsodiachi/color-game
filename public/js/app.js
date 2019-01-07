/*No. 7: We gonna add 6 random colors to each of the square anything the 
the player has to choose a color but first lets start with the assigning colors to each one*/
//No. 8: Make an arrays of colors


var numSquare=6;
var colors = generateRandom(numSquare);
var square = document.querySelectorAll(".square");
var colorPicked= ranColor();
var colorDisplay= document.querySelector("#colorDisplay");
var messageDisplay= document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbtn = document.querySelector("#reset");
var btnMode=document.querySelectorAll(".mode");




init();


function init(){
////////////////////////Mode Buttons Listeners/////////////////////////////////
setupModeButtons();
//////////////////////////Squares Listeners//////////////////////////////////////
squareButtons();
/////////////////////////////////////////////////////////////////////////////////
reset();
}



///////////////////////////////////////////////////
function squareButtons(){
colorDisplay.textContent = colorPicked;
	for(var i = 0; i < colors.length; i++){
		square[i].addEventListener("click", function(){ 
		var clickedColor= this.style.backgroundColor;
		if(clickedColor===colorPicked){
		messageDisplay.textContent = "Correct!";
		changeColor(colorPicked);
		h1.style.backgroundColor=colorPicked;
		resetbtn.textContent="Play Again?";
		}else{
		this.style.backgroundColor="#233223";
		messageDisplay.textContent = "Try Again";
		}
		})
	}
}

//////////////////////////////////////////////////
//No 13: 
	
function setupModeButtons(){
	for(var i = 0; i<btnMode.length; i++){
		btnMode[i].addEventListener("click", function(){
		btnMode[0].classList.remove("selected");
		btnMode[1].classList.remove("selected");
	 	this.classList.add("selected");
		this.textContent==="Easy" ? numSquare = 3: numSquare = 6;
		reset();
		});
	}
}
	//////////////////////////////////////////////////////////////////////
	
	function reset(){
		colors = generateRandom(numSquare);
		colorPicked= ranColor();
		colorDisplay.textContent= colorPicked;
		messageDisplay.textContent = "";
		resetbtn.textContent="New Color";
		for(var i = 0; i<square.length; i++){
		 	if(colors[i]){
		 	square[i].style.display="block";
		 	square[i].style.backgroundColor=colors[i];
		}else{
		 	square[i].style.display="none";
			}
		}
		h1.style.backgroundColor="steelblue";
	}
//////////////////////////////////////////////////////////////////////////	
resetbtn.addEventListener("click", function(){
	reset();
});

//////////////////////////color function////////////////////////////////////////////
function changeColor(color){
	for(var i = 0; i<square.length; i++){
		square[i].style.backgroundColor=colorPicked;
	}
}
/////////////////////////////////////////function//////////////////////////////////
function ranColor(){
	var ran = Math.floor(Math.random()*colors.length);
	return colors[ran];
}
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////Function////////////////////////////////////
function generateRandom(num){
	//create an empty array
	var arr =[];
	//create random repeated colors
	for(var i=0; i<num; i++){
		arr.push(randomColor());
	}
	//return array of color
	return arr;
}
//////////////////////////////////////function/////////////////////////
function randomColor(){
	// random colors for red, green, blue
		var r = Math.floor(Math.random()*256); 
		var g = Math.floor(Math.random()*256); 
		var b = Math.floor(Math.random()*256); 
		
	return "rgb(" + r + ", " + g + ", " + b + ")";
}