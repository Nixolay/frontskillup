// Выполнить послдедовательно действия

const endValue = (1,2,3,console.log("end:",4),5+3)
console.log("endValue:",endValue)

function qrt(a){
  return a*=2,console.log("a is:",a),a
}
console.log("log qrt:",qrt(6));

const end = (score,obj)=>{
  score > obj.score
    ?(obj.end = true, obj.win = true)
    :(obj.end = true, obj.win = false)
}

let obj = {
  score: 15,
  win: false,
  end: false,
}

console.log(obj);
end(10,obj)
console.log(obj);
end(16,obj)
console.log(obj);

