function initpage() {
 var t = document.getElementById('ti');
 pg.addEventListener('click', function(){
   t.innerHTML = t.value
   alert("You're on the " + t.value + " page.");
 });
}
window.addEventListener('load', initpage);