import Road from "./road.class.js";
import PlayerCar from "./player.car.class.js";
import CarController from "./car.controller.class.js";
import TrafficCar from "./traffic.car.class.js";
import Metro from "./metro.class.js";
import { isCollide } from "./utilities.class.js";
import Sound from "./sound.class.js";
import Explosion from "./explosion.class.js";
import Animals from "./animals.class.js";
import Score from "./score.class.js";

export default class Game{
    constructor(context){
        this.context=context;
        this.road = new Road(this);
        this.playerCar = new PlayerCar(this);
        this.explosion = new Explosion(this);
        this.animals = new Animals(this);
        this.score = new Score(this);

        new CarController({
            road:this.road, playerCar:this.playerCar
        });
        
        this.traffic = [];
        setInterval(()=>this.populateTraffic(),3000); 
        this.metro = [];
        setInterval(()=>this.populateMetro(),10000);
        this.animals = [];
        setInterval(()=>this.populateAnimal(),5000);
        
        this._paused = false;
        
        this.crashSound = new Sound("./audio/crash.wav");


    }

    get pause(){
        return this._paused;
    }
    
    
    
    populateTraffic(){
        if(this._paused) return;
        let trafficCar = new TrafficCar(this);
        this.traffic.push(trafficCar);
    }
    
    populateMetro(){
        let metroMetro = new Metro(this);
        this.metro.push(metroMetro);
    }

    populateAnimal(){

        if (this._paused) return;
        let animalAnimals = new Animals(this);
        this.animals.push(animalAnimals);
    }
    
    tryAgain(e){
        if(e.keyCode!==32){
           return;
        }
        this.traffic =[];
        this.animals =[];
        this.playerCar.resetPosition();
        this.score.resetScore();
        this._paused=false;
        let screenLoss = document.querySelector(".try-again");
        screenLoss.style.display="none";
        document.onkeydown=null;
    }
    
    update(){
        if(this._paused) return;
        this.road.update();
        this.playerCar.update();
        this.score.update();
        this.metro.forEach(metroMetro=>{
            metroMetro.update();
        });
        this.traffic.forEach(trafficCar=>{
          trafficCar.update();                   
        });
        this.animals.forEach(animalAnimals=>{
            animalAnimals.update();
        });
        
        if(isCollide(this.playerCar,this.traffic)){
            this.explosion.update();
    
            this.crashSound.play(); 
            this._paused = true;
            let screenLoss = document.querySelector(".try-again");
            screenLoss.style.display="block";
            document.onkeydown=e=>this.tryAgain(e);
        }
    }
}