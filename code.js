window.onload = ztsaChoose;

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
  
  var ztsa30x25 = new Array(
    {imgLink:"https://s3.amazonaws.com/bei/hso/Party/SaladParty_300x250.gif", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/Vintage/VINTAGE_300x250.gif", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/Party/SaladParty_300x250.gif", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/Vintage/VINTAGE_300x250.gif", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://i.ibb.co/YQ2hPjt/Relat-Rewire-Method-300-250-01-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/9T1t5Ht/Relat-Rewire-Method-300-250-02-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/pvmnfV1/Relat-Rewire-Method-300-250-03-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/dfCm2r7/Relat-Rewire-Method-300-250-04-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/Mh9Qwsv/Relat-Rewire-Method-300-250-05-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/0K02DNm/Relat-Rewire-Method-300-250-06-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/fG0mSD8/Relat-Rewire-Method-300-250-07-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/yq8k9Kg/Relat-Rewire-Method-300-250-08-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/tCWg0Rb/Relat-Rewire-Method-300-250-09-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/Yf9nR0V/RRM-301-250-02-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/c6f6xrs/RRM-301-250-05-2-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/8r3fLDy/RRM-301-250-07-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/vZCpYcr/RRM-301-250-09-min.jpg", affLink:"https://bit.ly/3vHtntT"})
    
    var ztsasolos = new Array(
    {imgLink:"https://s3.amazonaws.com/bei/hso/Study/74_2.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/Study/74_3.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/Study/74_5.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/Study/STUDY_2.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/Study/STUDY_4.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/Study/STUDY_5.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/Study/STUDY_7.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/Vintage/BI_7.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/Vintage/VINTAGE_1_white.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/Vintage/VINTAGE_3.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/Vintage/VINTAGE_336x280.gif", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/Vintage/VINTAGE_6_pink.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/Vintage/VINTAGE_7.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/Vintage/VINTAGE_7_3.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/Vintage/vintage_4_white.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/ExBack/ML_32.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/ExBack/REASON_1.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/ExBack/LM_1.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/ExBack/DUMP_1.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/ExBack/BUMU_1.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/ExBack/DOOR_10.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/ExBack/ML_1.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/ExBack/ML_2.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/ExBack/DOOR_1.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/ExBack/WMW_1.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/ExBack/stop_4.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/Text/text_1.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/Text/text_2.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/Text/text_4.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/Text/textmessage_rough.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/Text/text_1.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/Text/text_2.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/Text/text_4.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/Text/textmessage_rough.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/Text/text_1.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/Text/text_2.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/Text/text_4.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/Text/textmessage_rough.png", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/pullAway/PullAway1.jpg", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/pullAway/PullAway2.jpg", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/pullAway/PullAway3.jpg", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/pullAway/PullAway4.jpg", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/pullAway/PullAway5.jpg", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/pullAway/PullAway6.jpg", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/pullAway/PullAway7.jpg", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://i.ibb.co/HGPQyt4/Relat-Rewire-Method-336-280-01-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/KhnJQZW/Relat-Rewire-Method-336-280-02-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/M528ZJX/Relat-Rewire-Method-336-280-03-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/hCZkbNc/Relat-Rewire-Method-336-280-04-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/SNRMsGQ/Relat-Rewire-Method-336-280-05-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/K91BSqr/Relat-Rewire-Method-336-280-06-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/mX3Ng6J/Relat-Rewire-Method-336-280-07-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/gFdHQRj/Relat-Rewire-Method-336-280-08-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/Cb95CKR/Relat-Rewire-Method-336-280-09-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/ynpKmwg/RRM-337-280-02-2-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/cyD06TQ/RRM-337-280-07-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/f0z7pHD/RRM-337-280-08-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/qdc7sYc/RRM-337-280-09-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/pullAway/PullAway1.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/pullAway/PullAway2.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/pullAway/PullAway3.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/pullAway/PullAway4.jpg", affLink:"https://bit.ly/3vHtntT"})
    
    var ztsafooter = new Array(
    {imgLink:"https://s3.amazonaws.com/bei/hso/Party/SaladParty_728x90.gif", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/Vintage/VINTAGE_468x60.gif", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/Vintage/VINTAGE_468x60_2.gif", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://s3.amazonaws.com/bei/hso/Text/Text_468x60.gif", affLink:"https://bit.ly/2SbV0gX"},
    {imgLink:"https://i.ibb.co/3dXtB29/Relat-Rewire-Method-728-01-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/1Jrxdyf/Relat-Rewire-Method-728-02-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/x5XrBM6/Relat-Rewire-Method-728-03-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/RT8yXMh/Relat-Rewire-Method-728-04-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/fkVmJSb/Relat-Rewire-Method-728-05-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/PC6zhxR/Relat-Rewire-Method-728-06-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/dt2zP0F/Relat-Rewire-Method-728-07-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/JCxtN2R/Relat-Rewire-Method-728-09-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/Fn8hdhW/RRM-729-02-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/DfLD5hg/RRM-729-03-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/x5kJD2x/RRM-729-05-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/FWPX8mk/RRM-729-06-min.jpg", affLink:"https://bit.ly/3vHtntT"},
    {imgLink:"https://i.ibb.co/MpmsDpb/RRM-729-07-min.jpg", affLink:"https://bit.ly/3vHtntT"})
    

function ztsaChoose() {
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
  var randomNum = Math.floor(Math.random() * ztsa30x25.length);
  document.getElementById("325ztsaa1").src = ztsa30x25[randomNum].imgLink;
  document.getElementById("325ztsaa1l").href = ztsa30x25[randomNum].affLink;
  var randomNum = Math.floor(Math.random() * ztsa30x25.length);
  document.getElementById("325ztsaa2").src = ztsa30x25[randomNum].imgLink;
  document.getElementById("325ztsaa2l").href = ztsa30x25[randomNum].affLink;
  var randomNum = Math.floor(Math.random() * ztsa30x25.length);
  document.getElementById("325ztsab1").src = ztsa30x25[randomNum].imgLink;
  document.getElementById("325ztsab1l").href = ztsa30x25[randomNum].affLink;
  var randomNum = Math.floor(Math.random() * ztsa30x25.length);
  document.getElementById("325ztsab2").src = ztsa30x25[randomNum].imgLink;
  document.getElementById("325ztsab2l").href = ztsa30x25[randomNum].affLink;
  var randomNum = Math.floor(Math.random() * ztsa30x25.length);
  document.getElementById("325ztsac1").src = ztsa30x25[randomNum].imgLink;
  document.getElementById("325ztsac1l").href = ztsa30x25[randomNum].affLink;
  var randomNum = Math.floor(Math.random() * ztsa30x25.length);
  document.getElementById("325ztsac2").src = ztsa30x25[randomNum].imgLink;
  document.getElementById("325ztsac2l").href = ztsa30x25[randomNum].affLink;
  var randomNum = Math.floor(Math.random() * ztsasolos.length);
  document.getElementById("sztsaa").src = ztsasolos[randomNum].imgLink;
  document.getElementById("sztsaal").href = ztsasolos[randomNum].affLink;
  var randomNum = Math.floor(Math.random() * ztsasolos.length);
  document.getElementById("sztsab").src = ztsasolos[randomNum].imgLink;
  document.getElementById("sztsabl").href = ztsasolos[randomNum].affLink;
  var randomNum = Math.floor(Math.random() * ztsasolos.length);
  document.getElementById("sztsac").src = ztsasolos[randomNum].imgLink;
  document.getElementById("sztsacl").href = ztsasolos[randomNum].affLink;
  var randomNum = Math.floor(Math.random() * ztsafooter.length);
  document.getElementById("fztsaa").src = ztsafooter[randomNum].imgLink;
  document.getElementById("fztsaal").href = ztsafooter[randomNum].affLink;   
}
