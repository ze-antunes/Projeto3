const imgBarbeiroPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 200, y: -50}
    ] 
}

const tween = new TimelineLite();

/* ---------------------- */

tween.add(
    TweenLite.to('.imgBarbeiro', 1, {
        bezier: imgBarbeiroPath,
        ease: Power1.easeInOut
    })
)

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
                                        triggerElement: '.barbeiro',
                                        duration: 5000,
                                        triggerHook: 0,
                                    })
    .setTween(tween)
    .addIndicators()
    .addTo(controller);