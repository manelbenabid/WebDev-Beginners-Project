const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');
const third = document.getElementById('third');
const second = document.getElementById('second');
const first = document.getElementById('first');


let n = 0;
let n2 = 0;
let n3 = 0;


var clickStart;

function startCounter() {
  clickStart =  setInterval(function(){ 
    n += 1;
    first.innerHTML = n;
    if (n>9){
      n = 0;
      first.innerHTML = n;
      n2 += 1;
      second.innerHTML = n2;
      if (n2>9){
        n2 = 0;
        second.innerHTML = 0;
        n3 += 1;
        third.innerHTML = n3;
      }
    }
  }, 1000);
  
}


function pauseCounter(){
  clearTimeout(clickStart);
}

function resetCounter(){
  n =0;
  first.innerHTML = n;
  n2 =0;
  second.innerHTML = n2;
  n3 = 0;
  third.innerHTML = n3;
} 