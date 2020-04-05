export default class CarController{
    constructor(options){
        this.road = options.road;
        this.playerCar= options.playerCar;
        this.init();
    }
    
    
    init(){
         document.addEventListener("keydown", (e)=>{
             if(this.road.game.pause==false){
            switch(e.keyCode){
                case 37:
                    // left
                    this.playerCar.moveLeft();
                    break;
                case 38: 
                    this.playerCar.speed += 15;
                    break;
                case 39: //right
                    this.playerCar.moveRight();
                    break;
                case 40://down
                    this.playerCar.speed -= 20;
                    break;
                default:
                    break;
            }
             }
         });
    }
}