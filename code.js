window.onload = ftzaChoose;

  var common30x25 = new Array(
  {imgLink:"https://www.ledgerwallet.com/affiliate/image/250/100", affLink:"https://bit.ly/32IYH36"},
  {imgLink:"https://central.ck-cdn.com/fiverr/2021-04-08/General-300x250-A_ee088cbb.jpg", affLink:"https://bit.ly/3pUYSAX"},
  {imgLink:"https://central.ck-cdn.com/fiverr/2021-04-08/General-300x250-A-1_588aaf4a.jpg", affLink:"https://bit.ly/3pUYSAX"},
  {imgLink:"https://central.ck-cdn.com/fiverr/2021-03-30/1029General300x250A_bb1b507f.jpg", affLink:"https://bit.ly/3FWSkYj"},
  {imgLink:"https://central.ck-cdn.com/fiverr/2021-03-30/5734General300x250A_c8804f01.jpg", affLink:"https://bit.ly/3FWSkYj"},
  {imgLink:"https://central.ck-cdn.com/fiverr/2021-03-30/3842General300x250A1_b9b491e0.jpg", affLink:"https://bit.ly/3FWSkYj"},
  {imgLink:"https://bluehost-cdn.com/media/partner/images/cashomega/300x250/300x250BW.png", affLink:"https://bit.ly/3gW7ocf"})
  
  
  var commonFooter = new Array(
  {imgLink:"https://www.ledgerwallet.com/affiliate/image/728/90", affLink:"https://bit.ly/32IYH36"},
  {imgLink:"https://central.ck-cdn.com/fiverr/2021-04-08/General-728x90-B_51d1d2fd.jpg", affLink:"https://bit.ly/3pUYSAX"},
  {imgLink:"https://central.ck-cdn.com/fiverr/2021-04-08/General-728x90-B-1_2a5804d8.jpg", affLink:"https://bit.ly/3pUYSAX"},
  {imgLink:"https://central.ck-cdn.com/fiverr/2021-03-30/1029General728x90B_eda81ffe.jpg", affLink:"https://bit.ly/3FWSkYj"},
  {imgLink:"https://central.ck-cdn.com/fiverr/2021-03-30/5734General728x90B_d8ddd580.jpg", affLink:"https://bit.ly/3FWSkYj"},
  {imgLink:"https://central.ck-cdn.com/fiverr/2021-03-30/3842General728x90B1_0aa3e592.jpg", affLink:"https://bit.ly/3FWSkYj"},
  {imgLink:"https://bluehost-cdn.com/media/partner/images/cashomega/728x90/728x90BW.png", affLink:"https://bit.ly/3gW7ocf"},
  {imgLink:"https://bluehost-cdn.com/media/partner/images/cashomega/760x80/760x80BW.png", affLink:"https://bit.ly/3gW7ocf"})
  
  var commonSolos = new Array(
  {imgLink:"https://central.ck-cdn.com/fiverr/2021-04-08/General_16X9_7894bae7.jpg", affLink:"https://bit.ly/3pUYSAX"},
  {imgLink:"https://central.ck-cdn.com/fiverr/2021-04-08/General_16X9-1_c606993b.jpg", affLink:"https://bit.ly/3pUYSAX"},
  {imgLink:"https://central.ck-cdn.com/fiverr/2021-03-30/5734General16X9_427703e6.jpg", affLink:"https://bit.ly/3FWSkYj"},
  {imgLink:"https://central.ck-cdn.com/fiverr/2021-03-30/3842General16X91_fae23d3a.jpg", affLink:"https://bit.ly/3FWSkYj"},
  {imgLink:"https://bluehost-cdn.com/media/partner/images/cashomega/430x288/430x288BW.png", affLink:"https://bit.ly/3gW7ocf"},
  {imgLink:"https://bluehost-cdn.com/media/partner/images/cashomega/430x288/430x288PW.png", affLink:"https://bit.ly/3gW7ocf"},
  {imgLink:"https://bluehost-cdn.com/media/partner/images/cashomega/488x160/488x160BW.png", affLink:"https://bit.ly/3gW7ocf"},
  {imgLink:"https://bluehost-cdn.com/media/partner/images/cashomega/620x203/620x203BW.png", affLink:"https://bit.ly/3gW7ocf"},
  {imgLink:"https://i.ibb.co/ThQdjqW/H-LEDDevice-EMAILGraphics-150dpi-01.jpg", affLink:"https://bit.ly/3FYqKK8"},
  {imgLink:"https://i.ibb.co/86BgJVC/H-LEDDevice-EMAILGraphics-150dpi-02.jpg", affLink:"https://bit.ly/3FYqKK8"},
  {imgLink:"https://i.ibb.co/dMWpTty/PLOLifestyle-4-Slider.jpg", affLink:"https://bit.ly/3FYqKK8"},
  {imgLink:"https://i.ibb.co/RQjwFsP/PLOLifestyle-5-Slider.jpg", affLink:"https://bit.ly/3FYqKK8"},
  {imgLink:"https://i.ibb.co/8bJJLkb/PLOLifestyle-8-Slider.jpg", affLink:"https://bit.ly/3FYqKK8"},
  {imgLink:"https://i.ibb.co/7VVTqjQ/PLOLifestyle-9-Slider.jpg", affLink:"https://bit.ly/3FYqKK8"})
  
  var ftza30x25 = new Array(
    {imgLink:"https://i.ibb.co/Lg2S89X/300x250-1.jpg", affLink:"https://bit.ly/3eSwdWX"},
    {imgLink:"https://i.ibb.co/GM8kXm2/300x250-2.jpg", affLink:"https://bit.ly/3eSwdWX"},
    {imgLink:"https://i.ibb.co/xMnRc4c/300x250.png", affLink:"https://bit.ly/3zsaVsG"},
    {imgLink:"https://i.ibb.co/gM0QPYY/300x2501.png", affLink:"https://bit.ly/3zsaVsG"},
    {imgLink:"https://i.ibb.co/5nJLV7x/300x2502.png", affLink:"https://bit.ly/3zsaVsG"})
    
    var ftzafooter = new Array(
    {imgLink:"https://i.ibb.co/4ppzdLV/728x90-1.jpg", affLink:"https://bit.ly/3eSwdWX"},
    {imgLink:"https://i.ibb.co/LSzmPYR/728x90-2.jpg", affLink:"https://bit.ly/3eSwdWX"},
    {imgLink:"https://i.ibb.co/Qbj8cX3/728x90.png", affLink:"https://bit.ly/3zsaVsG"},
    {imgLink:"https://i.ibb.co/N3yVSrS/728x901.png", affLink:"https://bit.ly/3zsaVsG"},
    {imgLink:"https://i.ibb.co/5MCVhtt/728x902.png", affLink:"https://bit.ly/3zsaVsG"})
    

function ftzaChoose() {
  var randomNum = Math.floor(Math.random() * common30x25.length);
  document.getElementById("325ca1").src = common30x25[randomNum].imgLink;
  document.getElementById("325ca1l").href = common30x25[randomNum].affLink;
  var randomNum = Math.floor(Math.random() * common30x25.length);
  document.getElementById("325ca2").src = common30x25[randomNum].imgLink;
  document.getElementById("325ca2l").href = common30x25[randomNum].affLink;
  var randomNum = Math.floor(Math.random() * common30x25.length);
  document.getElementById("325cb1").src = common30x25[randomNum].imgLink;
  document.getElementById("325cb1l").href = common30x25[randomNum].affLink;
  var randomNum = Math.floor(Math.random() * common30x25.length);
  document.getElementById("325cb2").src = common30x25[randomNum].imgLink;
  document.getElementById("325cb2l").href = common30x25[randomNum].affLink;
  var randomNum = Math.floor(Math.random() * common30x25.length);
  document.getElementById("325cc1").src = common30x25[randomNum].imgLink;
  document.getElementById("325cc1l").href = common30x25[randomNum].affLink;
  var randomNum = Math.floor(Math.random() * common30x25.length);
  document.getElementById("325cc2").src = common30x25[randomNum].imgLink;
  document.getElementById("325cc2l").href = common30x25[randomNum].affLink;
  var randomNum = Math.floor(Math.random() * commonFooter.length);
  document.getElementById("fca").src = commonFooter[randomNum].imgLink;
  document.getElementById("fcal").href = commonFooter[randomNum].affLink;
  var randomNum = Math.floor(Math.random() * commonSolos.length);
  document.getElementById("sca").src = commonSolos[randomNum].imgLink;
  document.getElementById("scal").href = commonSolos[randomNum].affLink;
  var randomNum = Math.floor(Math.random() * commonSolos.length);
  document.getElementById("scb").src = commonSolos[randomNum].imgLink;
  document.getElementById("scbl").href = commonSolos[randomNum].affLink;
  var randomNum = Math.floor(Math.random() * commonSolos.length);
  document.getElementById("scc").src = commonSolos[randomNum].imgLink;
  document.getElementById("sccl").href = commonSolos[randomNum].affLink;
  var randomNum = Math.floor(Math.random() * ftza30x25.length);
  document.getElementById("325ftzaa1").src = ftza30x25[randomNum].imgLink;
  document.getElementById("325ftzaa1l").href = ftza30x25[randomNum].affLink;
  var randomNum = Math.floor(Math.random() * ftza30x25.length);
  document.getElementById("325ftzaa2").src = ftza30x25[randomNum].imgLink;
  document.getElementById("325ftzaa2l").href = ftza30x25[randomNum].affLink;
  var randomNum = Math.floor(Math.random() * ftza30x25.length);
  document.getElementById("325ftzab1").src = ftza30x25[randomNum].imgLink;
  document.getElementById("325ftzab1l").href = ftza30x25[randomNum].affLink;
  var randomNum = Math.floor(Math.random() * ftza30x25.length);
  document.getElementById("325ftzab2").src = ftza30x25[randomNum].imgLink;
  document.getElementById("325ftzab2l").href = ftza30x25[randomNum].affLink;
  var randomNum = Math.floor(Math.random() * ftza30x25.length);
  document.getElementById("325ftzac1").src = ftza30x25[randomNum].imgLink;
  document.getElementById("325ftzac1l").href = ftza30x25[randomNum].affLink;
  var randomNum = Math.floor(Math.random() * ftza30x25.length);
  document.getElementById("325ftzac2").src = ftza30x25[randomNum].imgLink;
  document.getElementById("325ftzac2l").href = ftza30x25[randomNum].affLink;
  var randomNum = Math.floor(Math.random() * ftzafooter.length);
  document.getElementById("fftzaa").src = ftzafooter[randomNum].imgLink;
  document.getElementById("fftzaal").href = ftzafooter[randomNum].affLink;  
}
