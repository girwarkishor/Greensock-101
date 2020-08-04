const runStart = () => {
  console.log("onStart");
};

const runUpdate = () => {
  console.log("onUpdate");
};

const runComplete = () => {
  console.log("onComplete");
};

const timeline = gsap.timeline({
  duration: 1,
  paused: true,
  onStart: runStart,
  onUpdate: runUpdate,
  onComplete: runComplete,
});

timeline
  .from("body", {
    backgroundColor: "#fff",
    ease: "none",
  })
  .fromTo(
    ["h1", ".intro"],
    {
      opacity: 0,
      y: -20,
    },
    {
      opacity: 1,
      y: 20,
      ease: "power1.out",
      stagger: 0.2,
    }
  )
  .from(["img", "h2"], {
    opacity: 0,
    ease: "none",
  })
  .fromTo(
    "ul li",
    {
      opacity: 0,
      Y: -20,
    },
    {
      opacity: 1,
      y: 0,
      ease: "power1.out",
      stagger: 0.2,
    }
  );

const playButton = document.getElementById("btnPlay");
const pauseButton = document.getElementById("btnPause");
const resumeButton = document.getElementById("btnResume");
const reverseButton = document.getElementById("btnReverse");
const speedUpButton = document.getElementById("btnSpeedUp");
const slowDownButton = document.getElementById("btnSlowDown");
const seekButton = document.getElementById("btnSeek");
const progressButton = document.getElementById("btnProgress");
const restartButton = document.getElementById("btnRestart");

playButton.addEventListener("click", () => {
  timeline.play();
});
pauseButton.addEventListener("click", () => {
  timeline.pause();
});
resumeButton.addEventListener("click", () => {
  timeline.resume();
});
reverseButton.addEventListener("click", () => {
  timeline.reverse();
});
speedUpButton.addEventListener("click", () => {
  timeline.timeScale(2);
});
slowDownButton.addEventListener("click", () => {
  timeline.timeScale(0.5);
});

console.log(timeline.duration());
seekButton.addEventListener("click", () => {
  timeline.seek(1);
});
progressButton.addEventListener("click", () => {
  timeline.progress(0.5);
});
restartButton.addEventListener("click", () => {
  timeline.restart();
});
