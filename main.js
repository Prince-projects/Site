function changeText() {
  document.getElementById("test").innerHTML = "test2";
}
var countVar = 0;
var focused = document.hasFocus()
function timeOnPage() {
 document.getElementById("counter").innerHTML = countVar + "seconds";
 countVar++;
}

function checkFocus() {
if (focused) {
 document.getElementById("html").blur()
}
 
}

setInterval(timeOnPage, 1000)
setInterval(checkFocus, 1000)
