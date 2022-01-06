window.onload = choosePic;

var oranumDivs = new Array(
  {divlink:"https://central.ck-cdn.com/fiverr/2021-04-08/General-300x250-A_ee088cbb.jpg",
  }
)

function choosePic() {
  var randomNum = Math.floor(Math.random() * oranumDivs.length);
  document.getElementById("WOW123").src = oranumDivs[randomNum].divlink;
}
