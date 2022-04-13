function initpage() {
 var pg = document.getElementById('page');
 var t = document.getElementById('ti');
 pg.addEventListener('click', function(){
   alert("You're on the " + t.value + " page.");
 })
}
window.addEventListener('load', initpage);