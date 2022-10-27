interface ILogger {
  log(..args):void;
  error(...args):void;
}

class Logger implements ILogger {
  log(...args:any[]):void{
    console.log(...args);
  }
  async error(...args: any[]): Promise<void>{
    console.log(...args);
  }
}

interface IPayable {
  pay(id:number):void;
  price?:number;
}

interface IDeletable{
  delete():void;
}

class User implements IPayable, IDeletable{
  delete():void{
    // 
  }
  pay(id: number|string):void{
    // можем указывать несколько типов, главное
    // что бы был тот тип который указан в интерфейсе.
  }
  // price не обязательный параметр
}