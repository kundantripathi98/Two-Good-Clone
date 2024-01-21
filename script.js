const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});



// gsap.from(".logo", {
//   x: -50,
//   opacity: 0,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".second-page h3",
//     scroller: "body",
//     start: "top 10%",
//     markers: true
//   }
// })

function loadingPageAnimation(){
    gsap.to('.loading-page',{
        opacity: 0,
        y: "-=100%",
        duration: 1.2,
        delay: 1.33,
        ease: Power4
    });

//--------------------------------------------------------------Progress Bar-------------------------------------------------------------
    var i = 0;
    function move() {
      if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var Num = document.querySelector('.Num');
        var No = 1;
        var width = 1;
        var id = setInterval(frame, 9);
        function frame() {
          if (width >= 100 && No >= 100) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            No++;
            elem.style.width = width + "%";
            Num.innerHTML = No + "%";
          }
        }
      }
    }
    move();
}

function loadingAnimation(){
    gsap.from('.nLinks', {
        y: -50,
        opacity: 0,
        duration: 1.2,
        delay: 1,
        stagger: 0.1,
        ease: Expo.easeInOut
    })

    gsap.to(".boundingelem", {
        y: 0,
        opacity: 1,
        duration: 1.5,
        delay: 1.5,
        stagger: 0.5,
        ease: Expo.easeInOut
    })

    // gsap.from(".videodiv", {
    //     scale: .5,
    //     opacity: 0,
    //     duration: 0.5,
    //     delay: 1.8,
    //     ease: Power4
    // })
}

function videodivAnimation(){
    var videodiv = document.querySelector(".videodiv");
var playdiv = document.querySelector(".play");

videodiv.addEventListener('mouseenter', function(){
    gsap.to(playdiv, {
        opacity: 1,
        scale: 1,
    })
  });

  videodiv.addEventListener('mouseleave', function(){
    gsap.to(playdiv, {
        opacity: 0,
        scale: 0
    })
  });

  videodiv.addEventListener('mousemove', function(dets){
    gsap.to(playdiv, {
       left: dets.clientX,
       top: dets.clientY,
       duration: 0.5
    })
  });
}




loadingPageAnimation();
loadingAnimation();
videodivAnimation();
