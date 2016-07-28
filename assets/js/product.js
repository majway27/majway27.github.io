/* global $ */

$(document).ready(function() {
  
  var $boxs = $(".roster > .product");
  
  var $btns = $(".overlay-btn").on("click", function() {
  
    var active = 
      $btns.removeClass("active")
        .filter(this)
        .addClass("active")
        .data("filter");
  
      $boxs
        .hide()
        .filter( "." + active )
        .fadeIn(450);

  });
});

