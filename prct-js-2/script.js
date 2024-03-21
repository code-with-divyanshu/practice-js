window.addEventListener("mousemove", (e) =>{
  let rect = document.querySelector("#rect");
  let rectWidth = rect.getBoundingClientRect().width;
  let screenWidth = window.innerWidth;
  
 let mouseMove = 
 gsap.utils.mapRange(
  0, 
  screenWidth, 
  20 + rectWidth/2, 
  screenWidth - (20 + rectWidth/2), 
  e.clientX);

 gsap.to(rect,{
  left: mouseMove + "px",
  ease: Power3,
 });
});