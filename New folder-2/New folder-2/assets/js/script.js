{
var lightMode = localStorage.getItem("lightmode");

const customToggle = document.querySelectorAll(".toggle input");

let switchStatus = false;

customToggle.forEach(curr => {
    curr.addEventListener("change", function () {
        if (this.checked) {
            switchStatus = this.checked;
            document.querySelector("body").classList.add("light");
            document.querySelector("body").classList.remove("dark");
            localStorage.setItem("lightMode", 0);
        } else {
            switchStatus = this.checked;
            document.querySelector("body").classList.add("dark");
            document.querySelector("body").classList.remove("light");
            localStorage.setItem("lightMode", 1);
        }
    });
})
}

{
    function callParallax(e, $buttonMagnetic) {
        parallaxIt(e, $buttonMagnetic.find(".button"), 60);
        parallaxIt(e, $buttonMagnetic.find(".button .text"), 80);
      }
      function parallaxIt(e, target, movement) {
        var $this = jQuery(target).parent();
        var boundingRect = $this[0].getBoundingClientRect();
        var relX = e.pageX - boundingRect.left;
        var relY = e.pageY - boundingRect.top;
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        gsap.to(target, 0.3, {
          x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
          y:
            ((relY - boundingRect.height / 2 - scrollTop) / boundingRect.width) *
            movement,
          ease: Power2.easeOut,
        });
      }
      jQuery(".button-magnetic").mouseenter(function (e) {
        var $this = jQuery(this);
        if ($this.hasClass("btn-black")) {
          gsap.to(this, 0.3, { transformOrigin: "0 0", scale: 1 });
          gsap.to($this.find(".button"), 0.3, { scale: 1.1 });
          gsap.to($this.find(".button .text"), 0.3, { color: "#000" });
          gsap.to($this.find(".button"), 0.3, { background: "#040404" });
        } else if ($this.hasClass("btn-purple")) {
          gsap.to(this, 0.3, { transformOrigin: "0 0", scale: 1 });
          gsap.to($this.find(".button"), 0.3, { scale: 1.1 });
          gsap.to($this.find(".button .text"), 0.3, { color: "#040404" });
          gsap.to($this.find(".button"), 0.3, { background: "rgba(255,255,255,0)" });
        } else if ($this.hasClass("img-anim")) {
          gsap.to(this, 0.3, { transformOrigin: "0 0", scale: 1 });
          gsap.to($this.find(".button"), 0.3, { scale: 1.1 });
          gsap.to($this.find(".button .text"), 0.3, { color: "#040404" });
          gsap.to($this.find(".button"), 0.3, { background: "rgba(255,255,255,0)" });
        }
      });
      jQuery(".button-magnetic").mouseleave(function (e) {
        var $this = jQuery(this);
        if ($this.hasClass("btn-black")) {
          gsap.to(this, 0.3, { scale: 1 });
          gsap.to($this.find(".button, .button .text"), 0.3, {
            scale: 1,
            x: 0,
            y: 0,
          });
          gsap.to($this.find(".button .text"), 0.3, { color: "#040404" });
          gsap.to($this.find(".button"), 0.3, { background: "#000" });
        } else if ($this.hasClass("btn-purple")) {
          gsap.to(this, 0.3, { scale: 1 });
          gsap.to($this.find(".button, .button .text"), 0.3, {
            scale: 1,
            x: 0,
            y: 0,
          });
          gsap.to($this.find(".button .text"), 0.3, { color: "#fff" });
          gsap.to($this.find(".button"), 0.3, { background: "#6E5AFD" });
        } else if ($this.hasClass("img-anim")) {
          gsap.to(this, 0.3, { scale: 1 });
          gsap.to($this.find(".button, .button .text"), 0.3, {
            scale: 1,
            x: 0,
            y: 0,
          });
          gsap.to($this.find(".button .text"), 0.3, { color: "#fff" });
          gsap.to($this.find(".button"), 0.3, { background: "#6E5AFD" });
        }
      });
      jQuery(".button-magnetic").mousemove(function (e) {
        callParallax(e, jQuery(this));
      });
      
}

// {
//   // For Disable Inspect
//   document.addEventListener('contextmenu', (e) => e.preventDefault());

// function ctrlShiftKey(e, keyCode) {
//   return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
// }

// document.onkeydown = (e) => {
//   // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
//   if (
//     event.keyCode === 123 ||
//     ctrlShiftKey(e, 'I') ||
//     ctrlShiftKey(e, 'J') ||
//     ctrlShiftKey(e, 'C') ||
//     (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
//   )
//     return false;
// };
// }


{
  (function($){
    $.fn.extend({
        mAccord: function(options) {
            var defaults = {
            };
            var options = $.extend(defaults, options);

            return this.each(function() {
              var o = options,
                  // container = $(this).find(".accordion-container"),
                  trigger = $(this).find(".accordion h3"),
                  content = $(this).find(".accordion-content"),
                 
                  obj = $(trigger).prev();
                  $(".accordion-container .accordion:nth-child(1) h3").addClass("active");
                  $(".accordion-container .accordion:nth-child(1) h3").next().slideDown(300);
              trigger.click(function (e) {
                e.stopPropagation();
                var target = $(this).next();

                $(this).addClass('active'),
                trigger.not(this).removeClass('active'),
                target.stop().delay().slideDown(300);

                if (target.is(':visible')) { 
                  $(this).removeClass('active'),
                  target.stop().slideUp();
                } else if (content.not(target).is(':visible')){
                  $(content.not(target)).stop().slideUp(300);
                }
              });
              
					});
        }
    });
})(jQuery);

(function($) { 
  $('.accordion-container').mAccord();
})(jQuery);
}

{
  {
    $(".nav-toggle").click(function () {
      $(".nav-toggle").toggleClass("nav-toggle-active");
      $(".head_nav_clmn").toggleClass("active");
      $("body").toggleClass("body-fix");
    });
    $(".nav-ovrlay").click(function () {
      $(".nav-toggle").removeClass("nav-toggle-active");
      $(".head_nav_clmn").removeClass("active");
      $("body").removeClass("body-fix");
    });
  }

  {
    function myFunction(x) {
      if (x.matches) {
        $(document).ready(function () {
          $(".head_nav_clmn ul li.has-child").click(function () {
            $(this).toggleClass("active").siblings().removeClass("active");
          });
        });
      }
    }

    var x = window.matchMedia("(max-width: 1025px)");
    myFunction(x);
    x.addListener(myFunction);
  }
}