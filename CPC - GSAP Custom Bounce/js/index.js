gsap.registerPlugin(CustomEase, CustomBounce, SplitText)
CustomBounce.create('myBounce', {
  strength: 0.6,
  squash: 1.5,
  squashID: 'myBounce-squash'
})
const splitTxt = new SplitText('#txt').chars
const tl = gsap.timeline({
  defaults: {
    duration: 1.5,
    stagger: {
      amount: 0.1,
      ease: 'sine.in'
    }
  }
}).from(splitTxt, {
  duration: 0.6,
  opacity: 0,
  ease: "power1.inOut"
}, 0).from(splitTxt, {
  y: -350,
  ease: "myBounce"
}, 0).to(splitTxt, {
  scaleX: 1.8,
  scaleY: 0.7,
  rotate: (i) => 15 - 30 * Math.random(),
  ease: "myBounce-squash",
  transformOrigin: "50% 100%"
}, 0)

window.onclick = () => tl.play(0)
