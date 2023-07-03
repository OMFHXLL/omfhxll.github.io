// Map size

function setInfoFormSize() {
  var infoForm = document.getElementById('info-form');
  var infoMap = document.getElementById('info-content-map');
  var infoFormWidth = infoForm.offsetWidth;
  infoMap.style.width = infoFormWidth +'px';
}

setInfoFormSize();
window.addEventListener('resize', setInfoFormSize);