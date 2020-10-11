// var slideIndex = 1;
// showSlides(slideIndex);
//
// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
//
// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

// document.addEventListener('DOMContentLoaded',function(){


  var slides = document.getElementsByClassName("slideshow-container");

  var indexes = [];

  for(var i=0; i < slides.length ; i++){
    indexes.push(1);
  }
  showSlides(indexes)



  // Next/previous controls
  function plusSlides(n,ID) {
    indexes[ID-1] += n;
    showSlides(indexes);
  }


  // Thumbnail image controls
  function currentSlide(n,ID) {
    indexes[ID-1] = n
    showSlides(indexes);
  }



  function showSlides(n) {
    var x;

    for (var i=1;i<=n.length;i++){


      var xslides = document.getElementsByClassName("mySlides_"+i.toString());

      var dots = document.getElementsByClassName("dot_"+i.toString());

      if (n[i-1] > xslides.length) {indexes[i-1] = 1}

      if (n[i-1] < 1) {indexes[i-1] = xslides.length}


      for (x = 0; x < xslides.length; x++) {
          xslides[x].style.display = "none";
      }

      for (x = 0; x < dots.length; x++) {
          dots[x].className = dots[x].className.replace(" active", "");
      }
      xslides[indexes[i-1]-1].style.display = "block";
      dots[indexes[i-1]-1].className += " active";


    }

  }

// })
