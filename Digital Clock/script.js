const displayTime = document.getElementById('date');

function setClock(){
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hours = updateTime(hours);
  minutes = updateTime(minutes);
  seconds = updateTime(seconds);

  displayTime.innerHTML = hours + ':' + minutes + ':' + seconds;

  const t = setTimeout(function(){
    setClock();
  }, 1000);


}

function updateTime(i){
  if (i < 10){
    return "0" + i;
  } else {
    return i;
  }
}

setClock();

