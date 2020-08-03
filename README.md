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
