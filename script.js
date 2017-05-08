window.onload = function() { init(); };

function init() {
    //Add some content
    for(var i = 0; i < 150; i++) {
        document.getElementById("page").innerHTML += "<b>Lol " + (i+1) + "<b/><br />";
    }
    
    //Calculate how big the scrollbar should be
    ratio = Math.floor((window.innerHeight / document.body.scrollHeight) * 100);
    document.getElementById("scroller").style.height = ratio + "%";
    
    //Register the events
    document.addEventListener("mousewheel", myscroll, false);
    document.addEventListener("DOMMouseScroll", myscroll, false);
}

function myscroll(e) {
    //Browser compatibility, detect the direction of the scroll.
    var dir = e.wheelDelta || -1 * e.detail;
    //Go to the new position
    window.scrollBy(0, dir * -1);
    //Calculate where the scrollbar should be now using a percentage
    pos = window.scrollY;
    max = document.body.scrollHeight;
    mytop = (pos / max) * 100;
    //Put it there
    document.getElementById("scroller").style.transition = "top .3s";
    document.getElementById("scroller").style.top = mytop + "%";
}