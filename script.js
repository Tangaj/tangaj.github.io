var clicker = document.getElementById("clicker")
var i = 0
clicker.onclick = function(e) {
  while (i < 1000) {
    alert(i)
    i++
  }
}
