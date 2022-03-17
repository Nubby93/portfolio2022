const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");



//Animation for the hero content
// tl.fromTo(".nav-delay", { opacity: 0 }, { opacity: 1, duration: 0.25 });
tl.fromTo(".logo-delay", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.25, ease: "slow" });
tl.fromTo(".nav-delay", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.55, ease: "slow" });
tl.fromTo(".title-delay", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.75, ease: "slow" });
tl.fromTo(".socials-delay", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.95, ease: "slow" });
tl.fromTo(".contact-delay", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 1.15, ease: "slow" });


//On scroll animation

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  

	// //Dot cursors
	
	$(window).mousemove(function(e) { 	  
		$(".cursor").css({
			left: e.pageX,
			top: e.pageY
		})	  
	})
	