let container = document.querySelector(".container");

const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}


container.addEventListener("mousemove",
    throttleFunction((e) => {
        //your code
        let div = document.createElement("div");
        div.classList.add("img-div");
        div.style.left = e.clientX + "px";
        div.style.top = e.clientY + "px";

        let img = document.createElement("img");
        img.setAttribute("src", "cf.jpg");

        div.appendChild(img);

        document.body.appendChild(div);

        gsap.to(img, {
          y: "0",
          ease: Power2,
          duration: .8
        });

        gsap.to(img, {
          y: "100%",
          delay: .8,
        });

        setTimeout(()=>{
          div.remove();
        }, 2000);

    }, 500));








