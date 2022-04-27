function initpage() {
 var pg = document.getElementById('page');
 var t = document.getElementById('ti').value;
 pg.addEventListener('click', function(){
   alert("You're on the " + t + " page.");
 });
}
window.addEventListener('load', initpage);