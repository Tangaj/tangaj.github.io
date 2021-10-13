var clicker = document.getElementById("clicker")
var i = 0
clicker.onclick = function(e) {
  while (i < 100) {
    alert(i)
    i++
  }
}
