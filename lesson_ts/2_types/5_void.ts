function logID(id:string|number): void {
  console.log(id);
}

const a = logID(1)

function multiply(a:number, b?:number):number|undefined {
  if (b) {
    return a * b
  }
}

type voidFunc = ()=>void

const voidF1: voidFunc = ()=>{
  return true
}

//  Вернет void, не смотря на то что мы указали, возвращаем тру.
const b = voidF1()