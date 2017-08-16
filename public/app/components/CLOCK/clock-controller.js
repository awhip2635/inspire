
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = 'AM' || 'PM';
    if(h>=13){
ampm = 'PM'
    }else{
        ampm = 'AM'
    }
    if(h>=13){
        h = h-12
    }
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
        h + ":" + m + ampm;
    var t = setTimeout(startTime, 500);

}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}


