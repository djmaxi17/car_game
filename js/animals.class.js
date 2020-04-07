export default class Animals{
	constructor(game){
		this.game = game;
		this.context = this.game.context;
		this.animal = new Image;
		this.animal.src = "./images/animalzoom.png";
		this.animalNo = 0; //Math.round(Math.random() * 3);
        this.animalY = (Math.round(Math.random()*3));
		this._positionY = (Math.random() * 800) * -1;
		this.speed = 0.5;
		this.lane = Math.floor(Math.random() * 4);
		this.lanePosX = [245,325,405,485];	
        this.img;


	}
    get positionY(){
        return this._positionY;
    }
    get positionX(){
        return this.lanePosX[this.lane];
    }
    
    update(){
        
		this.draw();
        
	}

	draw(){
        setInterval(this.drawAnimal(),1);
	}
    
    drawAnimal(){
        this._positionY += this.game.playerCar.speed/8 + this.speed;
        if(this.animalNo==0){
            this.animalNo=1;
        }
        else if(this.animalNo==1){
            this.animalNo=0;
        }
		this.context.drawImage(this.animal,this.animalNo*200,this.animalY*200,200,200,this.lanePosX[this.lane],this._positionY,60,60); 
        
        if(this._positionY>=780){
                    this.game.animals.splice(this.game.animals.indexOf(this),1);
        }
    }
    
    clear(){
        this.context.clearRect(this.lanePosX[this.lane],this._positionY,60,60);
    }
        

}