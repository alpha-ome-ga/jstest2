window.onload = choosePic;

var common30x25 = new Array(
  {imgLink:"https://www.ledgerwallet.com/affiliate/image/250/100", affLink:"https://bit.ly/32IYH36"},
  {imgLink:"https://central.ck-cdn.com/fiverr/2021-04-08/General-300x250-A_ee088cbb.jpg", affLink:"https://bit.ly/3pUYSAX"},
  {imgLink:"https://central.ck-cdn.com/fiverr/2021-04-08/General-300x250-A-1_588aaf4a.jpg", affLink:"https://bit.ly/3pUYSAX"},
  {imgLink:"https://central.ck-cdn.com/fiverr/2021-03-30/1029General300x250A_bb1b507f.jpg", affLink:"https://bit.ly/3FWSkYj"},
  {imgLink:"https://central.ck-cdn.com/fiverr/2021-03-30/5734General300x250A_c8804f01.jpg", affLink:"https://bit.ly/3FWSkYj"},
  {imgLink:"https://central.ck-cdn.com/fiverr/2021-03-30/3842General300x250A1_b9b491e0.jpg", affLink:"https://bit.ly/3FWSkYj"},
  {imgLink:"https://bluehost-cdn.com/media/partner/images/cashomega/300x250/300x250BW.png", affLink:"https://bit.ly/3gW7ocf"}) 

function nmsChoose() {
    var randomNum = Math.floor(Math.random() * common30x25.length);
    document.getElementById("325ca1").src = common30x25[randomNum].imgLink;
    document.getElementById("325ca1l").href = common30x25[randomNum].affLink;
}
