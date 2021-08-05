
function changeText() {
  document.getElementById("test").innerHTML = "test2";
}
var countVar = 0;
function timeOnPage() {
 document.getElementById("counter").innerHTML = countVar + "seconds";
 countVar++;
}

setInterval(timeOnPage, 1000)
