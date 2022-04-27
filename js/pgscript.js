function initpage() {
 var pg = document.getElementById('page');
 var t = document.getElementById('ti');
 pg.addEventListener('click', function(){
   alert("URL: " + t);
 });
}

window.addEventListener('load', initpage)