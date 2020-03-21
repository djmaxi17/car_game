// alert("good");

let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");

let road = new Image;
road.src = "images/road.png";


let car = new Image;
car.src = "images/car.png";



road.onload = () =>{
	requestAnimationFrame(gameLoop);
}

car.onload = () =>{
	requestAnimationFrame(gameLoop);
}

let yOffset = -512;

// eventTarget.addEventListener("keydown",event =>{
// 	if(event.keyCode == 39){
// 		if(moveX == 91)
// 	}
// 	// else if(event.keyCode == 39){

// 	// }
// });

function gameLoop(){
	if(yOffset > 0){
		yOffset = -512;
	}
	
	context.drawImage(road, 0, yOffset);
	context.drawImage(road, 0, yOffset + 512);
	context.drawImage(road, 0, yOffset + 1024);
	
	yOffset += 10;
	// moveX = (255 , 337 , 173 ,91) add 82 to switch;
	moveX = 173;
	context.drawImage(car,moveX,650,80,180);
	requestAnimationFrame(gameLoop);

}