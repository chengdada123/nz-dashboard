function callAllJsFiles(e){var t=document.createElement("script");t.setAttribute("type","text/javascript"),t.setAttribute("src",e),document.getElementsByTagName("head")[0].appendChild(t)}callAllJsFiles("/static/theme-daynight/js/navtop.js?v202102012266"),callAllJsFiles("/static/theme-daynight/js/mode.js?v202102012266"),callAllJsFiles("/static/theme-daynight/js/tooltip.js?v202102012266"),$(".corner").hover((function(){$(this).attr("aria-expanded","true"===$(this).attr("aria-expanded")?"false":"true")}));const hour=new Date(Date.now()).getHours();(hour>17||hour<4)&&(document.querySelector("input[name=service-theme]").checked=!0,document.getElementsByTagName("BODY")[0].setAttribute("data-theme","dark")),$(document).ready((function(){$(".service-mobile-toggle ul li:first-of-type").click((function(){$(".service-mobile-toggle").toggleClass("smt-active")}))})),$(document).on("click",(function(e){0==$(e.target).closest(".service-mobile-toggle").length&&$(".service-mobile-toggle").hasClass("smt-active")&&$(".service-mobile-toggle").toggleClass("smt-active")}));