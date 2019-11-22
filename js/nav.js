"use strict";$(".hamburger").click(function(){$(this).toggleClass("is-active")});var scrollPosition=0,elNavbar=document.querySelector(".navbar");window.addEventListener("scroll",function(s){if(200<(scrollPosition=window.scrollY)&&!elNavbar.classList.contains("navbar-scrolled"))elNavbar.classList.add("navbar-scrolled");else{if(!(scrollPosition<=199&&elNavbar.classList.contains("navbar-scrolled")))return!1;elNavbar.classList.remove("navbar-scrolled")}});ollPosition <= 199 && elNavbar.classList.contains('navbar-scrolled')) {
    elNavbar.classList.remove('navbar-scrolled');
  } else {
    return false;
  }
});