const x = document.getElementById("values");
function sumFibs(num) {
  num = num-1;
  let fib = 1;
  let arr = [];
  let helper = 0;
  let helper1 = 1;
  for (let i = 0; i<num; i++) {
    helper = arr[i-1] + arr[i];
    if (i === 0) {
      arr.push(0);
      arr.push(1);
    } else if (i >= 1) {
      arr.push(helper);
      helper1 += helper;
      helper = 0;
    }
  }
  return arr;
}

x.addEventListener('click', function() {
  let y;
  y = document.getElementById("vals").value;
  y = parseInt(y);
  y>0 ? y = y : y = "that ain't no positive number, fool!!";
  let x = y;
  y = sumFibs(y)
  if (x>0) {
  y = y.join("----")
  document.getElementById("new").innerHTML = y;
  setTimeout(function() {document.getElementById("news").innerHTML = `This is the Fib Sequence up to ${x} places!`}, 1000);
  } else {
    document.getElementById("new").innerHTML = x;
  }
});

const y = document.getElementById("sparkle");
y.addEventListener('click', function() {
  if(y.style.color === "red") {
  y.style.color = "tan";
} else if(y.style.color === "tan"){
  y.style.color = "green";
} else if(y.style.color === "green") {
  y.style.color = "red";
}
});

