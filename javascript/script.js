var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
]

//takes number of coolrs in array to generate
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisp = document.querySelector("#color_disp");
var message = document.getElementById("message");
var reset = document.getElementById("reset");
var mode = document.getElementsByClassName("mode");
// var easy = document.querySelector("#easy");
// var hard = document.querySelector("#hard");
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
      // if(this.textContent === "Easy")
      // {
      //   numSquares = 3;
      // }
      // else
      // {
      //   numSquares = 6;
      // }
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reload();
    });
  }
}

function setupSquares()
{
  for(var i = 0; i < squares.length; i++)
  {
    // add initial colors to squares
    squares[i].style.background = colors[i];

    //add click listeners to squares
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

// function shortened_2()
// {
//   // easy.addEventListener("click", function()
//   // {
//   //   reset.textContent = "new colors";
//   //   message.textContent = "";
//   //   hard.classList.remove("selected");
//   //   easy.classList.add("selected");
//   //   h1.style.background = "steelblue";
//   //   numSquares = 3;
//   //   colors = generateRandomColors(numSquares);
//   //   pickedColor = pickColor();
//   //   colorDisp.textContent = pickedColor;
//   //   for(var i = 0; i < squares.length; i++)
//   //   {
//   //     if(colors[i])
//   //     {
//   //       squares[i].style.background = colors[i];
//   //     }
//   //     else
//   //     {
//   //       squares[i].style.display = "none";
//   //     }
//   //   }
//   // });
//   //
//   // hard.addEventListener("click", function()
//   // {
//   //   reset.textContent = "new colors";
//   //   message.textContent = "";
//   //   hard.classList.add("selected");
//   //   easy.classList.remove("selected");
//   //   h1.style.background = "steelblue";
//   //   numSquares = 6;
//   //   colors = generateRandomColors(numSquares);
//   //   pickedColor = pickColor();
//   //   colorDisp.textContent = pickedColor;
//   //   for(var i = 0; i < squares.length; i++)
//   //   {
//   //     squares[i].style.background = colors[i];
//   //     squares[i].style.display = "block";
//   //   }
//   // });
// }

reset.addEventListener("click", function()
{
  // function shortened_1()
  // {
  //   // //window.location.reload(true);
  //   // this.textContent = "new colors";
  //   // message.textContent =  "";
  //   // colors = generateRandomColors(numSquares);
  //   // pickedColor = pickColor();
  //   // colorDisp.textContent = pickedColor;
  //   // h1.style.background = "steelblue";
  //   //
  //   // for(var i = 0; i < squares.length; i++)
  //   // {
  //   //   squares[i].style.background = colors[i];
  //   // }
  // }
  reload();
});
colorDisp.textContent = pickedColor;

//changes colors of all squares to correct picked color
function changeColors(color)
{
  for(var i = 0; i < squares.length; i++)
  {
    squares[i].style.background = color;
  }
}
//picks random color
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
