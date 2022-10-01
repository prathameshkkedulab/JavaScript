// var date = new Date();
// document.body.innerHTML = "<h1>Today is :" + date + "</h1>";


function add(){
  let x = Number(document.getElementById('a').value);
  let y = Number(document.getElementById('b').value);

  document.getElementById('sum').value = x+y;
}

document.getElementById('run').addEventListener('click',add);
