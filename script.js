var clicker = document.getElementById("clicker")
var counter = 0
clicker.onclick = function(e) {
  while (counter < 100) {
    alert(counter)
    counter++
  }
}
