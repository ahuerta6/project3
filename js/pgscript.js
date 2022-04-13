function initpage() {
 var pg = document.getElementById('');
 var t = document.getElementById(ti);
 pg.addEventListener('click', function(){
   alert("Your on the " + t.value);
 })
}
window.addEventListener('load', initpage);