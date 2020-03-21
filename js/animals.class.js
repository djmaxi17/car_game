
export default class Animals{
	constructor(game){
		this.game = game;
		this.context = this.game.context;
		this.animal = new Image;
		this.animal.src = "./images/animaltest.png";
		this.animalNo = Math.round(Math.random() * 3);
		this._positionY = (Math.random() * 800) * -1;
		this.speed = 0.5;
		this.lane = Math.floor(Math.random() * 4);
		this.lanePosX = [245,325,405,485];	


	}
    get positionY(){
        return this._positionY;
    }
    get positionX(){
        return this.lanePosX[this.lane];
    }
	update(){
		this._positionY += this.game.playerCar.speed/8 + this.speed;

		this.context.drawImage(this.animal,this.animalNo*90,0,90,90,this.lanePosX[this.lane],this._positionY,60,60);
		if(this._positionY>=780){
            this.game.animals.splice(this.game.animals.indexOf(this),1);
        }
	}
}