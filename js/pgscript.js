function initpage() {
 var pg = document.getElementById('page');
 var t = document.getElementById('ti');
 var r = document.getElementById('result');
 pg.addEventListener('click', function(){
   t.innerHTML = r.value
   alert("You're on the " + r.value + " page.");
 });
}
window.addEventListener('load', initpage);