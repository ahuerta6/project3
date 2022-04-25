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
addMarker({coords:{lat:41.83, lng:-87.6298}});

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