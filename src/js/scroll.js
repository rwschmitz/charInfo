/* This javscript file allows users to jump around the page with a smooth scrolling animation.  Also, this script does not add hashes (#) to the url when clicked. */

$(function() {
    $('#goHome').click(function() {
       $('html, body').animate({
          scrollTop: $('#home').offset().top
       }, 500);
    });
 });

 $(function() {
    $('#goHomeBrand').click(function() {
       $('html, body').animate({
          scrollTop: $('#home').offset().top
       }, 500);
    });
 });
 
 $(function() {
    $('#goAbout').click(function() {
       $('html, body').animate({
          scrollTop: $('#about').offset().top
       }, 500);
    });
 });
 
 $(function() {
    $('#goProjects').click(function() {
       $('html, body').animate({
          scrollTop: $('#projects').offset().top
       }, 500);
    });
 });
 
 $(function() {
    $('#goContact').click(function() {
       $('html, body').animate({
          scrollTop: $('#contact').offset().top
       }, 500);
    });
 });

 $(function() {
    $('#goContact2').click(function() {
       $('html, body').animate({
          scrollTop: $('#contact').offset().top
       }, 500);
    });
 });
