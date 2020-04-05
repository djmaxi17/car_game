export default class PlayerCar{
    constructor(game){
        this.game = game;
        this.context=this.game.context;
        
        this._positionX = 240;
        this._positionY = 640;
        this._speed=0;
        this.maxSpeed=200;
        
        this.car = new Image;
        this.car.src = "images/car.png";
        
    }
    
    get positionX(){
        return this._positionX;
    }
    
    get positionY(){
        return this._positionY;
    }
    
    moveLeft(){
        this._positionX -=80;
        if(this._positionX<=240){
            this._positionX=240;
        }
    }
    
    moveRight(){
        this._positionX +=80;
        if(this._positionX>=480){
            this._positionX=480;
        }
    }
    
    resetPosition(){
        this._positionX = 240;
        this._positionY=640;
        this._speed=0;
        document.querySelector(".speedo-meter .speed").innerHTML= this._speed;
        document.querySelector(".score-meter .score").innerHTML= this._speed;
    }
    
    set speed(speed){
        if(speed>=this.maxSpeed){
            this._speed=this.maxSpeed;
            
        }else if(speed<=0){
            this._speed = 0;
        }
        else{
            this._speed=speed;
        }
        document.querySelector(".speedo-meter .speed").innerHTML= this._speed;
        document.querySelector(".score-meter .score").innerHTML= this._speed;
    }
    
    get speed(){
        return this._speed;
    }
    
    update(){
        this.context.drawImage(this.car,this._positionX,this._positionY,70,150);
    }
}