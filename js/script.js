$(document).ready(function(){
 $('.slider').bxSlider();
});

// Initialize and add the map
function initMap() {
 // The location
 var options = {
 // The map, centered
   zoom: 11,
   center: {lat: 41.8781, lng: -87.6298},
 };

//New map
var map = new
 google.maps.Map(document.getElementById('map'), options);

 // adding maker
 var marker = new google.maps.Marker({
  position:{lat:41.8782, lang:-87.6292}
   map: map,
 });
}

window.addEventListener('load', initMap)