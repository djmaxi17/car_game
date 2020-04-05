export default class TrafficCar{
    constructor(game){
        this.game = game;
        this.context = this.game.context;
        this.car = new Image;
        this.car.src = "./images/car_sprite.png";
        this.carNo = Math.round(Math.random() *3);
        this._positionY = (Math.random()*500) * -1;
        this.speed = (Math.random()*7)+3;
        this.lane = Math.floor(Math.random() *4);
        this.lanePosX = [240,320,400,480];
        
    }
    get positionX(){
        return this.lanePosX[this.lane];
    }
    
    get positionY(){
        return this._positionY;
    }
    update(){
        
        this._positionY += this.game.playerCar.speed/8 + this.speed;
       // positionX = (257 , 340 , 173 ,93)
        this.context.drawImage(this.car,
                               this.carNo * 80,
                               0,
                               80,
                               180,
                               this.lanePosX[this.lane],
                               this._positionY,
                               70,
                               150);        
        if(this._positionY>=780){
            this.game.traffic.splice(this.game.traffic.indexOf(this),1);
        }
    }
}