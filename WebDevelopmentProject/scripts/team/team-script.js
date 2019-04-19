window.onload = function () {
   autoSlider();
   var left = 0;
   var timer;

   function autoSlider() {
      timer = setTimeout (function () {
         var strip = document.getElementById("strip");
         left = left - 390;
         if (left < - 1400) {
            left = 0;
         }
         strip.style.left = left + "px";
         autoSlider();
      }, 2000);
   }
}
