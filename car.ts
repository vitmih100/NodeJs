export class Car{
  id: number;
  name: string;
  model: Model;
  speed: number;
  getInfo(): string {
    return "id:" + this.id + " name:" + this.name;
  }

  setSpeed(carSpeed: number):void{
      this.speed = carSpeed;
  }

  getSpeed(): number{
    return this.speed;
  }

  power(): number{
      if(this.model == Model.Audi){
          return 250;
      }
      if(this.model == Model.MiniCooper){

      }else{
          return 100;
      }
      
  }
  constructor(id: number, name: string, model: Model){
      this.id = id;
      this.name = name;
      this.model = model;
  }
}

export enum Model{Audi,Volga,Opel,MiniCooper};

