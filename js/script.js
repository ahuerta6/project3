$(document).ready(function(){
 $('.slider').bxSlider();
});

// Initialize and add the map
function initMap() {
 // The location
 const chicago = { lat: 41.8781, lng: -87.6298 };
 // The map, centered
 const map = new google.maps.Map(document.getElementById('map'), {
   zoom: 11,
   center: chicago,
 });
 /* The marker, positioned
 const marker = new google.maps.Marker({
   position: chicago,
   map: map,
 });
*/

addMarker({
  coords:chicago,
  iconImage: 'https://image.freepik.com/free-photo/flag-chicago-city-illinois-us_2227-1121.jpg'
});
addMarker({
  coords:{lat:41.83, lng:-87.6298},
  iconImage: 'https://images.search.yahoo.com/images/view;_ylt=AwrhSpaINmZiTc8sRCiJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2M0NjU5NzBiMTRhZWMxNWFhNjY4M2JlMTgyZTI3NzMxBGdwb3MDMgRpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dillinois%2Binstitute%2Bof%2Btechnology%2Bmascot%26norw%3D1%26ei%3DUTF-8%26type%3DE211US714G0%26fr%3Dmcafee%26fr2%3Dsp-qrw-corr-top%26tab%3Dorganic%26ri%3D2&w=1144&h=1024&imgurl=designlooter.com%2Fimages%2Fhawk-svg-7.png&rurl=http%3A%2F%2Fdesignlooter.com%2Fhawk-svg.html&size=112.0KB&p=illinois+institute+of+technology+mascot&oid=c465970b14aec15aa6683be182e27731&fr2=sp-qrw-corr-top&fr=mcafee&tt=Hawk+svg%2C+Download+Hawk+svg+for+free+2019&b=0&ni=84&no=2&ts=&tab=organic&norw=1&sigr=BamFhHg.KUAi&sigb=EI5HTbrELJDY&sigi=i7ANFY47zZ_t&sigt=_.v4qPtJ53GF&.crumb=W2EqNvaOJis&fr=mcafee&fr2=sp-qrw-corr-top&norw=1&type=E211US714G0'
});

 function addMarker(props) {
  const marker = new google.maps.Marker({
    position: props.coords,
    map: map,
  });
  //check for icon
  if(props.iconImage){
    marker.setIcon(props.iconImage);
  }
 }
}
window.addEventListener('load', initMap)