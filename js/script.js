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

addMarker(chicago);

 function addMarker(coords) {
  const marker = new google.maps.Marker({
    position: coords,
    map: map,
  });
 }
}
window.addEventListener('load', initMap)