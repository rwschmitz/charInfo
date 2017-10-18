/* This javscript file allows users to jump around the page with a smooth scrolling animation.  Also, this script does not add hashes (#) to the url when clicked. */

$(function() {
    $('#goHome').click(function() {
       $('html, body').animate({
          scrollTop: $('#home').offset().top
       }, 500);
    });
 });
