gsap.fromTo(
  "header",
  { x: -40 },
  { x: 40, repeat: 2, duration: 1, ease: "power2.inOut", yoyo: true }
);

gsap.set("ul", { y: 100 });
