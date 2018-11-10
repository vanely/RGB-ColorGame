var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
]

var numSquares = 6;
var colors = generateRandomColors(numSquares);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisp = document.querySelector("#color_disp");
var message = document.getElementById("message");
var reset = document.getElementById("reset");
var mode = document.getElementsByClassName("mode");

var pickedColor = pickColor();
init();

function init()
{
  setupModes();
  setupSquares();
}

function setupModes()
{
  for(var i = 0; i < mode.length; i++)
  {
    mode[i].addEventListener("click", function()
    {
      mode[0].classList.remove("selected");
      mode[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reload();
    });
  }
}

function setupSquares()
{
  for(var i = 0; i < squares.length; i++)
  {
    squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function()
    {
      var clickedColor = this.style.background;
      if(clickedColor === pickedColor)
      {
        reset.textContent = "Play again?";
        h1.style.background = pickedColor;
        changeColors(clickedColor);
        message.textContent = "Correct!";
      }
      else
      {
        this.style.background = "#232323";
        message.textContent = "Sorry, try again!";
      }
    });
  }
}

function reload()
{
  reset.textContent = "new colors";
  message.textContent =  "";
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisp.textContent = pickedColor;
  h1.style.background = "steelblue";

  for(var i = 0; i < squares.length; i++)
  {
    if(colors[i])
    {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    }
    else
    {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
}

reset.addEventListener("click", function()
{
  reload();
});
colorDisp.textContent = pickedColor;

function changeColors(color)
{
  for(var i = 0; i < squares.length; i++)
  {
    squares[i].style.background = color;
  }
}

function pickColor()
{
  var random  = Math.floor(Math.random() * colors.length);
  return colors[random]
}
function generateRandomColors(num)
{
  var arr = [];
  for(var i = 0; i < num; i++)
  {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor()
{
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb("+r+", "+g+", "+b+")";
}
