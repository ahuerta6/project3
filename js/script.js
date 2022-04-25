$(document).ready(function(){
 $('.slider').bxSlider();
});

// Initialize and add the map
function initMap() {
 // The location of Uluru
 const chicago = { lat: 41.8781, lng: -87.6298 };
 // The map, centered at Uluru
 const map = new google.maps.Map(document.getElementById("map"), {
   zoom: 11,
   center: chicago,
 });
 // The marker, positioned at Uluru
 const marker = new google.maps.Marker({
   position: chicago,
   map: map,
   icon: 'https://render.fineartamerica.com/images/rendered/default/print/8/6.5/break/images-medium-5/chicago-flag-mike-maher.jpg'
 });
}
window.addEventListener('load', initMap)