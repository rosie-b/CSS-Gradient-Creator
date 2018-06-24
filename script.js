var css = document.querySelector("h3")
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById("gradient")
var button = document.getElementsByTagName("button")

// functions
body.onload = function() {
  // when body content is loaded, rund the function to randomly select gradient colours
  setRandom()
}

function setGradient() {
  // set gradient css
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"

  // show text of the gradient
  css.textContent = body.style.background + ";"
}

function setRandom() {
  // set random hex colour for inupts 1 and 2
  color1.value = "#" + (Math.random()*0xFFFFFF<<0).toString(16)
  color2.value = "#" + (Math.random()*0xFFFFFF<<0).toString(16)

  // set these colours as the new gradient
  setGradient()
}

// event listeners
color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
