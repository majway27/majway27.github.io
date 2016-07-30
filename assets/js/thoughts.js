/* global $ */

$(document).ready(function() {
  $("h2").on("click", function() {
    $(this).siblings("#showme").toggleClass("hidden");  
  });
});

