window.onload = choosePic;

var oranumDivs = new Array(
  {divLink:"//pt.potwmora.com/embed/livefeed/212?site=oranum&psid=bLU3i224&pstool=600_212&psprogram=revs&campaign_id=&subaffid={SUBAFFID}&ms_notrack=1",
divLink:"//pt.potwmora.com/embed/livefeed/036?site=oranum&psid=bLU3i224&pstool=600_036&psprogram=revs&campaign_id=&subaffid={SUBAFFID}&ms_notrack=1",
divLink:"//pt.potwmora.com/embed/livefeed/050?site=oranum&psid=bLU3i224&pstool=600_050&psprogram=revs&campaign_id=&subaffid={SUBAFFID}&ms_notrack=1",
divLink:"//pt.potwmora.com/embed/livefeed/047?site=oranum&psid=bLU3i224&pstool=600_047&psprogram=revs&campaign_id=&subaffid={SUBAFFID}&ms_notrack=1",
divLink:"//pt.potwmora.com/embed/livefeed/053?site=oranum&psid=bLU3i224&pstool=600_053&psprogram=revs&campaign_id=&subaffid={SUBAFFID}&ms_notrack=1",
divLink:"//pt.potwmora.com/embed/livefeed/046?site=oranum&psid=bLU3i224&pstool=600_046&psprogram=revs&campaign_id=&subaffid={SUBAFFID}&ms_notrack=1",
divLink:"//pt.potwmora.com/embed/livefeed/052?site=oranum&psid=bLU3i224&pstool=600_052&psprogram=revs&campaign_id=&subaffid={SUBAFFID}&ms_notrack=1",
divLink:"//pt.potwmora.com/embed/livefeed/049?site=oranum&psid=bLU3i224&pstool=600_049&psprogram=revs&campaign_id=&subaffid={SUBAFFID}&ms_notrack=1",
divLink:"//pt.potwmora.com/embed/livefeed/055?site=oranum&psid=bLU3i224&pstool=600_055&psprogram=revs&campaign_id=&subaffid={SUBAFFID}&ms_notrack=1",
divLink:"//pt.potwmora.com/embed/livefeed/069?site=oranum&psid=bLU3i224&pstool=600_069&psprogram=revs&campaign_id=&subaffid={SUBAFFID}&ms_notrack=1",
divLink:"//pt.potwmora.com/embed/livefeed/352?site=oranum&psid=bLU3i224&pstool=600_352&psprogram=revs&campaign_id=&subaffid={SUBAFFID}&ms_notrack=1",
divLink:"//pt.potwmora.com/embed/livefeed/070?site=oranum&psid=bLU3i224&pstool=600_070&psprogram=revs&campaign_id=&subaffid={SUBAFFID}&ms_notrack=1",
divLink:"//pt.potwmora.com/embed/livefeed/149?site=oranum&psid=bLU3i224&pstool=600_149&psprogram=revs&campaign_id=&subaffid={SUBAFFID}&ms_notrack=1",
divLink:"//pt.potwmora.com/embed/livefeed/147?site=oranum&psid=bLU3i224&pstool=600_147&psprogram=revs&campaign_id=&subaffid={SUBAFFID}&ms_notrack=1",
divLink:"//pt.potwmora.com/embed/livefeed/145?site=oranum&psid=bLU3i224&pstool=600_145&psprogram=revs&campaign_id=&subaffid={SUBAFFID}&ms_notrack=1",
divLink:"//pt.potwmora.com/embed/livefeed/155?site=oranum&psid=bLU3i224&pstool=600_155&psprogram=revs&campaign_id=&subaffid={SUBAFFID}&ms_notrack=1",
divLink:"//pt.potwmora.com/embed/livefeed/141?site=oranum&psid=bLU3i224&pstool=600_141&psprogram=revs&campaign_id=&subaffid={SUBAFFID}&ms_notrack=1",
divLink:"//pt.potwmora.com/embed/livefeed/151?site=oranum&psid=bLU3i224&pstool=600_151&psprogram=revs&campaign_id=&subaffid={SUBAFFID}&ms_notrack=1",
divLink:"//pt.potwmora.com/embed/livefeed/143?site=oranum&psid=bLU3i224&pstool=600_143&psprogram=revs&campaign_id=&subaffid={SUBAFFID}&ms_notrack=1",
divLink:"//pt.potwmora.com/embed/livefeed/153?site=oranum&psid=bLU3i224&pstool=600_153&psprogram=revs&campaign_id=&subaffid={SUBAFFID}&ms_notrack=1"
  }
)

function choosePic() {
  var randomNum = Math.floor(Math.random() * oranumDivs.length);
  document.getElementById("oranum_livefeed_container").src = oranumDivs[randomNum].divLink;
}
