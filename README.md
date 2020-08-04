# Links

[GreenSock 101](https://ihatetomatoes.net/store/)

# Installation

Simply clone this repo and follow the videos

I will be using [Live Server VSCode extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to live reload any changes. Feel free to install it too.

# Useful link

[Greensock cheatsheet](https://greensock.com/cheatsheet/)

# Notes

## Like css selector

```
gsap.to("header", { duration: 3, y: 20 });
gsap.to("ul li", { duration: 3, y: 20 });
gsap.to("ul li:first-child", { duration: 3, y: 20 });

```

## To and From Tweens

```
gsap.to("h2", {
  duration: 3,
  backgroundColor: "#da1f7e",
  delay: 2,
});
```

```
gsap.to("ul", {
  duration: 0.7,
  x: 40,
  ease: "bounce.out",
});

```

Stagger : one by one

```
gsap.to("ul li", {
  duration: 0.7,
  x: 40,
  ease: "power2.out",
  stagger: 0.1,
});

```

From -40 to original position

```
gsap.from("ul li", {
  duration: 0.7,
  x: -40,
  ease: "power2.out",
  stagger: 0.1,
});

```

Repeating Infinite

```
gsap.from("ul li", {
  duration: 0.7,
  x: -40,
  ease: "power2.out",
  stagger: 0.1,
  repeat: -1,
});

```

Number of term repeat

```
gsap.from("ul li", {
  duration: 0.7,
  x: -40,
  ease: "power2.out",
  stagger: 0.1,
  repeat: 2,
});

```

Repeat Delay - repeat after 1s

```
gsap.from("ul li", {
  duration: 0.7,
  x: -40,
  ease: "power2.out",
  stagger: 0.1,
  repeat: 2,
  repeatDelay: 1
});
```

Yoyo - going forward and reverse

```
gsap.from("ul li:last-child", {
  duration: 0.7,
  y: 40,
  ease: "power2.out",
  repeat: -1,
  repeatDelay: 1,
  yoyo: true,
});
```

yoyoEase - For yoyo ease effect

```
gsap.from("ul li:last-child", {
  duration: 0.7,
  y: 40,
  ease: "power2.out",
  repeat: -1,
  repeatDelay: 1,
  yoyo: true,
  yoyoEase: "none",
});
```

## From and Set Tweens

gsap.fromTo('<selector>',{<from>},{<to>})

```
gsap.fromTo("header", { x: -40 }, { x: 40, repeat: 2 });
```

gsap.fromTo('<selector>',{<from>},{<to> + <special properties>}) - All the special properties must written in to var

```
gsap.fromTo(
  "header",
  { x: -40 },
  { x: 40, repeat: 2, duration: 1, ease: "power2.inOut", yoyo: true }
);
```

gsap.set() - It doesn't do any animation it just set the position of item (you can use it onload where we can set the page element to particular position)

```
gsap.set("ul", { y: 100 });
```

## Timelines

Without timelines (general)

```
gsap.from("body", {
  backgroundColor: "#fff",
  duration: 1.7,
  ease: "none",
});

gsap.fromTo(
  ["h1", ".intro"],
  {
    opacity: 0,
    y: -20,
  },
  {
    opacity: 1,
    y: 20,
    duration: 0.6,
    ease: "power1.out",
    delay: 1.5,
    stagger: 0.2,
  }
);

gsap.from(["img", "h2"], {
  opacity: 0,
  duration: 0.7,
  ease: "none",
  delay: 2.8,
});

gsap.fromTo(
  "ul li",
  {
    opacity: 0,
    Y: -20,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power1.out",
    stagger: 0.2,
    delay: 4,
  }
);
```

Timeline using add method

```
const timeline = gsap.timeline();

const tween = gsap.from("body", {
  backgroundColor: "#fff",
  duration: 1.7,
  ease: "none",
});

timeline.add(tween);
```

Timeline executes the function one after another no need of any delay

```
const timeline = gsap.timeline();

timeline
  .from("body", {
    backgroundColor: "#fff",
    duration: 1.7,
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
      duration: 0.6,
      ease: "power1.out",
      stagger: 0.2,
    }
  )
  .from(["img", "h2"], {
    opacity: 0,
    duration: 0.7,
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
      duration: 0.6,
      ease: "power1.out",
      stagger: 0.2,
    }
  );
```

Position parameter (controls placement) : -=1 for overlapping the animation also you can use +=2 for delay

0.7 // exactly 0.7 seconds into the timeline (absolute)
"-=0.7" // overlap with previous by 0.7 sec
"myLabel" // insert at "myLabel" position
"myLabel+=0.2" // 0.2 seconds after "myLabel"
"<" // align with start of most recently-added child
"<0.2" // 0.2 seconds after ^^

```
const timeline = gsap.timeline();

timeline
  .from("body", {
    backgroundColor: "#fff",
    duration: 1.7,
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
      duration: 0.6,
      ease: "power1.out",
      stagger: 0.2,
    },
    "-=1"
  )
  .from(["img", "h2"], {
    opacity: 0,
    duration: 0.7,
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
      duration: 0.6,
      ease: "power1.out",
      stagger: 0.2,
    }
  );
```

Absolute position : It start at exact 2s at timeline

```
const timeline = gsap.timeline();

timeline
  .from("body", {
    backgroundColor: "#fff",
    duration: 1.7,
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
      duration: 0.6,
      ease: "power1.out",
      stagger: 0.2,
    },
    2
  )
  .from(["img", "h2"], {
    opacity: 0,
    duration: 0.7,
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
      duration: 0.6,
      ease: "power1.out",
      stagger: 0.2,
    }
  );
```

Insert 'myLab' position: The function set with myLab executed at the same time

```
const timeline = gsap.timeline();

timeline
  .from("body", {
    backgroundColor: "#fff",
    duration: 1.7,
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
      duration: 0.6,
      ease: "power1.out",
      stagger: 0.2,
    },
    "myLabel"
  )
  .from(["img", "h2"], {
    opacity: 0,
    duration: 0.7,
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
      duration: 0.6,
      ease: "power1.out",
      stagger: 0.2,
    },
    "myLabel"
  );
```

We can define generic duration at timeline() function

```
const timeline = gsap.timeline({ duration: 1 });

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
```

Control timeline : We can handle using any event listener

```
const timeline = gsap.timeline({ duration: 1, paused: true });
```

Timeline Cheatsheet

```
// Create a timeline
let tl = gsap.timeline({
  delay: 0.5,
  paused: true, // default is false
  repeat: 2, // number of repeats (-1 for infinite)
  repeatDelay: 1, // seconds between repeats
  repeatRefresh: true, // invalidates on each repeat
  yoyo: true, // if true > A-B-B-A, if false > A-B-A-B
  defaults: { // children inherit these defaults
    duration: 1,
    ease: "none"
  },
  smoothChildTiming: true,
  autoRemoveChildren: true,
  onComplete: myFunc,
  // other callbacks:
  // onStart, onUpdate, onRepeat, onReverseComplete
  // Each callback has a params property as well
  // i.e. onUpdateParams (Array)
});
```

## Controls and Callbacks

### Controls

```
// retain animation reference to control later
let anim = gsap.to(...); // or gsap.timeline(...);
// most methods can be used as getters or setters
anim.play() // plays forward
  .pause()
  .resume() // respects direction
  .reverse()
  .restart()
  .timeScale(2) // 2 = double speed, 0.5 = half speed
  .seek(1.5) // jump to a time (in seconds) or label
  .progress(0.5) // jump to halfway
  .totalProgress(0.8) // includes repeats
  // when used as setter, returns animation (chaining)

  // other useful methods (tween and timeline)
  .kill() // immediately destroy
  .isActive() // true if currently animating
  .then() // Promise
  .invalidate() // clear recorded start/end values
  .eventCallback() // get/set an event callback

  // timeline-specific methods
  // add label, tween, timeline, or callback
  .add(thing, position)
  // calls function at given point
  .call(func, params, position)
  // get an Array of the timeline's children
  .getChildren()
  // empties the timeline
  .clear()
  // animate playhead to a position linearly
  .tweenTo(timeOrLabel, {vars})
  // ^^ with both start and end positions
  .tweenFromTo(from, to, {vars})
```

Example

```
const timeline = gsap.timeline({
  duration: 1,
  paused: true
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
```

### gsap callback functions

```
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
```

## GSAP Types

### Greensock Snippets

Install gsap in Visual Studio Code so that gsap snippets should be available in VS code

```
npm i gsap
```

### gsap snippets for VSCode

Install GreenSock Snippets from VS Code Extension
