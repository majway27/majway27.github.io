/* global $ */
/* console.log('loaded'); */
var imageCounter = 1;

function clicker() {
    /* alert('test') */
    imageCounter ++;
    if (imageCounter < 11) {
        document.body.style.backgroundImage = "url('assets/img/bock-danaT" + imageCounter + ".png')";
    } else {
        document.body.style.backgroundImage = "none";
    }
    console.log(imageCounter);
}

$(document).ready(function() {
    document.body.addEventListener('click', clicker, true);
});