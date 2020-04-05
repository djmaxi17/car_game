import Sound from "./sound.class.js";
export default class Score{

	constructor(game){

		this.game = game;

		this.scoreDiv = document.querySelector(".score-meter .score");
        this.animalDiv = document.querySelector(".animals-container .animals");
        this.highScoreDiv = document.querySelector(".highscore-meter .highscore");

        this.animalCount = 0;
        this.highscore = 0;
        this.score =0;
        this.context = this.game.context;
        this.lepouce = new Image;
        this.lepouce.src = "images/lol.png";
        this.hitSound = new Sound("./audio/mario.wav");
	}

	update(){
		this.updateScore();
        this.hitScoreUpdate();
	}
    
    updateScore(){
        if(this.game.playerCar.speed!=0){
            this.score = this.score+0.07;
            if(this.game.playerCar.speed>=50){
            this.score = this.score+0.2;
            }
            else if(this.game.playerCar.speed>=100){
                this.score = this.score +0.3;
            }
            else if(this.game.playerCar.speed>=180){
                this.score = this.score +0.5;
            }
        }
       
        this.scoreDiv.innerHTML =parseInt(this.score);
        this.animalDiv.innerHTML = parseInt(this.animalCount);

    }
    
    resetScore(){
        if(this.score > this.highscore){
            this.highscore = this.score;
            this.highScoreDiv.innerHTML = parseInt(this.highscore);
        }
        this.score =0;
        this.animalCount =0;
    }
    
    drawThumb(x,y){
        this.context.drawImage(this.lepouce,x,y,100,100);
    }
   // updateAnimalCount
    hitScoreUpdate(){
        for(let i=0;i<this.game.animals.length;i++){
            let animal = this.game.animals[i];
            if(animal.positionY>600 && animal.positionY <775){
                if(Math.abs(animal.positionX-this.game.playerCar.positionX)<50){
                    this.hitSound.play();
                    this.game.animals.splice(this.game.animals.indexOf(animal),1);
                    setInterval(this.drawThumb(this.game.playerCar.positionX, this.game.playerCar.positionY),7000);
                    this.score +=100;
                    this.animalCount++;
                    
                }
                
            }
        }
    }
}