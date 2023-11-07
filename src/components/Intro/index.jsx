import React, { useEffect } from "react";
import "./style.css"
function Intro() {
    function updatePath() {
    
    const textMain = document.querySelector("#anim-p") 
    const path = document.querySelector("#border-path") 
    if (textMain && path) {
      path.setAttribute(
        "d",
        `M0,0 V${textMain.offsetHeight} H${textMain.offsetWidth} v${
          textMain.offsetHeight / 2
        }`
      )
      const pathLength = path.getTotalLength()

      path.style.strokeDasharray = pathLength.toString()
      path.style.strokeDashoffset = pathLength.toString()
    }
  }

  //Increment
  function incrementCounter(
    selector,
    current,
    target,
    duration,
    letter = ""
  ) {
    let counter = document.getElementById(selector)
    let stepTime = Math.abs(Math.floor(duration / target))
    if (current < target && counter) {
      current++
      counter.innerText = current.toString() + letter
      setTimeout(
        () => incrementCounter(selector, current, target, duration, letter),
        stepTime
      )
    }
  }
  
  useEffect(()=>{
    incrementCounter("art-counter", 0, 85, 1000)
    incrementCounter("youtube-counter", 0, 328, 1000, "k")
    incrementCounter("reviews-counter", 0, 250, 1000)
    updatePath();
  },[])
  useEffect(() => {
    window.addEventListener('resize', updatePath);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updatePath);
    };
  }, []);
  return (
    <>
      <div className="relative mx-12 flex flex-col items-center justify-center gap-12 xl:flex-row xl:gap-36">
        <div className="w-full xl:w-1/2">
          <h1 className="text-xl">
            Enter Huas Doodle-Dazzled{" "}
            <span id="scribble" className="font-bold">
              Digital Universe!
            </span>
          </h1>

          <div className="relative">
            <svg className="absolute h-full w-full overflow-visible">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "#DC3A2B", stopOpacity: 1 }}
                  ></stop>
                  <stop
                    offset="100%"
                    style={{ stopColor: "#E18510", stopOpacity: 1 }}
                  ></stop>
                </linearGradient>
              </defs>
              <path
                id="border-path"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="4"
              ></path>
            </svg>
            <p id="anim-p" className="p-6 text-main">
              You've stumbled upon{" "}
              <span className="font-bold text-primary">Hua</span> little
              corner of the internet, where creativity runs rampant and normal
              is just a setting on a washing machine.
              <br />
              <br />
              Stick around, explore the digital masterpieces, and enjoy the
              occasional artistic shenanigans. It more fun than you'd think!
              <br />
              <br />
              Delight in the unpredictable artistic shenanigans that burst forth
              from the canvas of this digital universe. Here, every visit is an
              adventure, every glance an exploration. Dive in, the pixels are
              warm!
            </p>
          </div>
          <div className="flex justify-center pt-12 text-center text-main text-content xl:gap-16">
            <div className="w-32">
              <h2>Art Posts</h2>
              <p id="art-counter" className="text-xl font-bold">
                85
              </p>
            </div>
            <div className="w-32">
              <h2>Youtube</h2>
              <p id="youtube-counter" className="text-xl font-bold">
                1.2m
              </p>
            </div>
            <div className="w-32">
              <h2>Reviews</h2>
              <p id="reviews-counter" className="text-bold text-xl font-bold">
                250+
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            className="h-full"
            src="/main-portrait.jpg"
            alt="Hua's portrait"
          />
          <div id="paint" className="absolute bottom-0 right-0 translate-y-1/4">
            <img src="/paint.png" alt="paint" />
          </div>
        </div>
      </div>
      <div className="mt-12 h-6 w-full bg-black"></div>
    </>
  );
}

export default Intro;
