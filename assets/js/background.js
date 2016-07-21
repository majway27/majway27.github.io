/* global $ */
/* global Image */
/* console.log('loaded'); */
var imageCounter = -1;
var imageArray = new Array("assets/img/bock-danaT2.png", "assets/img/bock-danaT3.png", "assets/img/bock-danaT4.png","assets/img/bock-danaT5.png","assets/img/bock-danaT6.png","assets/img/bock-danaT7.png","assets/img/bock-danaT8.png","assets/img/bock-danaT9.png","assets/img/bock-danaT10.png");


function clicker() {
    /* alert('test') */
    imageCounter ++;
    
    if (imageCounter < 11) {
        var pointer =  "url(\'/" + imageArray[imageCounter].toString() + "\')";
        document.body.style.backgroundImage = pointer
    } else {
        document.body.style.backgroundImage = "none";
    }
}

$(document).ready(function() {
    document.body.addEventListener('click', clicker, true);
});

this.addEventListener("DOMContentLoaded", preloadImages, true);

function preloadImages(e) {

    for (var i = 0; i < imageArray.length; i++) {
        var tempImage = new Image();
         
        tempImage.src = imageArray[i];
    }
    console.log('loaded');
}