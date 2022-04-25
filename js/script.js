$(document).ready(function(){
 $('.slider').bxSlider();
});

// Initialize and add the map
function initMap() {
 // The location 
 const chicago = { lat: 41.8781, lng: -87.6298 };
 // The map, centered 
 const map = new google.maps.Map(document.getElementById("map"), {
   zoom: 11,
   center: chicago,
 });
 // The marker, positioned 
 const marker = new google.maps.Marker({
   position: chicago,
   map: map,
 });
 //new marker
 const image =
    "https://render.fineartamerica.com/images/rendered/default/print/8/6.5/break/images-medium-5/chicago-flag-mike-maher.jpg";
  const beachMarker = new google.maps.Marker({
    position: { lat: -41.83, lng: -87.62 },
    map,
    icon: image,
  });
}
window.addEventListener('load', initMap)