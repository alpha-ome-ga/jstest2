window.onload = choosePic;

var myImgsA = new Array(
  {imgLink:"https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
  affLink:"https://www.gmail.com"}, 
  {imgLink:"https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
  affLink:"https://www.google.com"},
  {imgLink:"https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
  affLink:"https://www.youtube.com"})

var myImgsB = new Array(
  {imgLink:"https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
  affLink:"https://www.gmail.com"}, 
  {imgLink:"https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
  affLink:"https://www.google.com"},
  {imgLink:"https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
  affLink:"https://www.youtube.com"})  

function choosePic() {
     var randomNum = Math.floor(Math.random() * myImgsA.length);
     document.getElementById("myPicture1").src = myImgsA[randomNum].imgLink;
     document.getElementById("myLink1").href = myImgsA[randomNum].affLink;
     var randomNum = Math.floor(Math.random() * myImgsB.length);
     document.getElementById("myPicture2").src = myImgsB[randomNum].imgLink;
     document.getElementById("myLink2").href = myImgsB[randomNum].affLink;
}