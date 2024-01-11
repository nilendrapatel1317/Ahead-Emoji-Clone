function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
locomotive();

  
// -----------------------------------------------------------------------------------------------


gsap.from('.s2-t-box',{
    scrollTrigger:{
        trigger:".s2-t-box",
        scroller:"#main",
        start:"top 80%",
        // end:"top 40%",
        // scrub:true,
        // markers:true
    },
    scale:0,
    duration:1.5
})
gsap.from('.s2-b-top h1',{
    scrollTrigger:{
        trigger:".s2-b-top h1",
        scroller:"#main",
        start:"top 80%",
        // end:"top 40%",
        // scrub:true,
        // markers:true
    },
    scale:0,
    duration:1.5
})
gsap.from('.s2-img',{
    scrollTrigger:{
        trigger:".s2-img",
        scroller:"#main",
        start:"top 80%",
        // end:"top 40%",
        // scrub:true,
        // markers:true
    },
    x:300,
    scale:0,
    duration:1.5
})
gsap.from('.s2-b-bottom',{
    scrollTrigger:{
        trigger:".s2-b-bottom",
        scroller:"#main",
        start:"top 85%",
        // end:"top 40%",
        // scrub:true,
        // markers:true
    },
    x:1500,
    // scale:0,
    duration:1.5
})



// =================================================================

gsap.from('.s3-l-top',{
    scrollTrigger:{
        trigger:".s3-l-top",
        scroller:"#main",
        start:"top 80%",
        // end:"top 40%",
        // scrub:true,
        // markers:true
    },
    scale:0,
    duration:1.5
})
gsap.from('.s3-bag-img',{
    scrollTrigger:{
        trigger:".s3-bag-img",
        scroller:"#main",
        start:"top 85%",
        // end:"top 40%",
        // scrub:true,
        // markers:true
    },
    scale:0,
    y:100,
})
gsap.from('.s3-double-circle, .s3-single-circle , .s3-hari-patti-2',{
    scrollTrigger:{
        trigger:".s3-double-circle, .s3-single-circle , .s3-hari-patti-2",
        scroller:"#main",
        start:"top 85%",
        // end:"top 40%",
        // scrub:true,
        // markers:true
    },
    opacity:0,
    x:50,
    y:50,
    duration:1.5
})
gsap.from('.s3-right',{
    scrollTrigger:{
        trigger:".s3-right",
        scroller:"#main",
        start:"top 80%",
        // end:"top 40%",
        // scrub:true,
        // markers:true
    },
    scale:0,
    duration:1.5
})


gsap.to('.s3-overlay-cir',{
    scrollTrigger:{
        trigger:".s3-right",
        scroller:"#main",
        start:"top 80%",
        // end:"top top",
        // scrub:true,
        // markers:true
    },
    top:'62%',
    left:"2%",
    duration:2,
    delay:1.5
})

gsap.from('.s3-overlay-cir',{
    scrollTrigger:{
        trigger:".s3-right",
        scroller:"#main",
        start:"top 80%",
        // end:"top top",
        // scrub:true,
        // markers:true
    },
    top:'100%',
    left:"70%",
    duration:1.5,
})


// =================================================================

gsap.from('.s4-top h1, .s4-top p',{
    scrollTrigger:{
        trigger:".s4-top h1, .s4-top p",
        scroller:"#main",
        start:"top 80%",
        // end:"top 40%",
        // scrub:true,
        // markers:true
    },
    scale:0,
    duration:1.5
})
gsap.from('.s4-img',{
    scrollTrigger:{
        trigger:".s4-img",
        scroller:"#main",
        start:"top 80%",
        // end:"top 40%",
        // scrub:true,
        // markers:true
    },
    x:300,
    scale:0,
    duration:1.5
})


// =================================================================

gsap.from('.s5-t-box',{
    scrollTrigger:{
        trigger:".s5-t-box",
        scroller:"#main",
        start:"top 70%",
        // end:"top 40%",
        // scrub:true,
        // markers:true
    },
    scale:0,
    duration:1.5
})



// =================================================================

gsap.from('.s6-top',{
    scrollTrigger:{
        trigger:".s6-top",
        scroller:"#main",
        start:"top 80%",
        // end:"top 40%",
        // scrub:true,
        // markers:true
    },
    scale:.7,
    duration:1.5
})
gsap.from('.s6-m-box-text p',{
    scrollTrigger:{
        trigger:".s6-m-box-text p",
        scroller:"#main",
        start:"top 80%",
        // end:"top 40%",
        // scrub:true,
        // markers:true
    },
    scale:0,
    duration:1.5
})
gsap.from('.s6-sm-1',{
    scrollTrigger:{
        trigger:".s6-sm-1",
        scroller:"#main",
        start:"top 80%",
        // end:"top 40%",
        // scrub:true,
        // markers:true
    },
    scale:0,
    duration:1.5
})

gsap.from('.s6-sm-2 , .s6-sm-3 , .s6-sm-4',{
    scrollTrigger:{
        trigger:".s6-sm-2 , .s6-sm-3 , .s6-sm-4",
        scroller:"#main",
        start:"top 80%",
        // end:"top 40%",
        // scrub:true,
        // markers:true
    },
    x:100,
    scale:0,
    duration:1.5
})


// =================================================================

gsap.from('#section7 button',{
    scrollTrigger:{
        trigger:"#section7 button",
        scroller:"#main",
        start:"top 120%",
        // end:"top 40%",
        // scrub:true,
        // markers:true
    },
    scale:0,
    y:50,
    duration:1.5
})


// =================================================================


gsap.from('.s8-l-top h1',{
    scrollTrigger:{
        trigger:".s8-l-top h1",
        scroller:"#main",
        start:"top 80%",
        // end:"top 40%",
        // scrub:true,
        // markers:true
    },
    scale:0,
    duration:1.5
})
gsap.from('.s8-r-top h1',{
    scrollTrigger:{
        trigger:".s8-r-top h1",
        scroller:"#main",
        start:"top 80%",
        // end:"top 40%",
        // scrub:true,
        // markers:true
    },
    scale:0,
    duration:1.5
})



// =================================================================

gsap.from('.s9-top h1',{
    scrollTrigger:{
        trigger:".s9-top h1",
        scroller:"#main",
        start:"top 80%",
        // end:"top 40%",
        // scrub:true,
        // markers:true
    },
    scale:0,
    duration:1.5
})
gsap.from('.s9-t-box',{
    scrollTrigger:{
        trigger:".s9-t-box",
        scroller:"#main",
        start:"top 60%",
        // end:"top 40%",
        // scrub:true,
        // markers:true
    },
    opacity:0,
    duration:2
})

