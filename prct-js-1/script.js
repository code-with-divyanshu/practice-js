let rect = document.querySelector("#rectangle");

rect.addEventListener("mousemove", (e)=>{
  let rectangleLocation = rect.getBoundingClientRect();
  let insideRect = e.clientX - rectangleLocation.left;

  if(insideRect < rectangleLocation.width/2){
    let redColor = gsap.utils.mapRange(0, rectangleLocation.width/2, 255, 0, insideRect);
    gsap.to(rect, {
      backgroundColor : `rgb(${redColor}, 0, 0)`,
      ease : Power4,
    });
  }
  else {
    let blueColor = gsap.utils.mapRange(rectangleLocation.width/2, rectangleLocation.width, 0, 255, insideRect);
    gsap.to(rect, {
      backgroundColor : `rgb(0, 0, ${blueColor})`,
      ease : Power4,
    });
  }

});

rect.addEventListener("mouseleave", (e)=>{
  gsap.to(rect, {
      backgroundColor : "white",
    });
});