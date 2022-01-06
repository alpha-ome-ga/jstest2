window.onload = choosePic;

var oranumDivs = new Array(
  {divlink:"//pt.potwmora.com/embed/livefeed/212?site=oranum&psid=bLU3i224&pstool=600_212&psprogram=revs&campaign_id=&subaffid={SUBAFFID}&ms_notrack=1",
  }
)

function choosePic() {
  var randomNum = Math.floor(Math.random() * oranumDivs.length);
  document.getElementById("oranum").src = oranumDivs[randomNum].divlink;
}
