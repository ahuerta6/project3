$(document).ready(function(){
 $('.slider').bxSlider();
});

// Initialize and add the map
function initMap() {
  // The location
 const chicago = { lat: 41.8781, lng: -87.6298 };

 const IIT = {lat:41.83, lng:-87.6298};
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
  iconImage: 'https://image.freepik.com/free-photo/flag-chicago-city-illinois-us_2227-1121.jpg',
  content: '<h1>This is the middle of Chicago</h1>',
});
addMarker({
  coords:IIT,
  iconImage: 'https://designlooter.com/images/hawk-svg-7.png',
  content: '<h1>IIT is located in the south of Chicago</h1>',
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

 //check for content
 if(props.content){
   var infoWindow = new google.maps.InfoWindow({
   content:props.content
 });

 marker.addListener('click', function(){
   infoWindow.open(map, marker);
 });
  }
 }
}
window.addEventListener('load', initMap)