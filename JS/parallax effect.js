function castParallax() {

	var opThresh = 350;
	var opFactor = 750;

	window.addEventListener("scroll", function(event){

		var top = this.pageYOffset;

		var layers = document.getElementsByClassName("parallax");
		var layer, speed, yPos, xPos;
		for (var i = 0; i < layers.length; i++) {
			layer = layers[i];
			speed = layer.getAttribute('data-speed');
			var xPos = (top * speed / 100);
			var yPos = -(top * speed / 100);
			if(layer.classList.contains("Y")){
			layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
			}
			if(layer.classList.contains("X")){
				layer.setAttribute('style', 'transform: translate3d('+ xPos + 'px, 0px, 0px)');
				}

		}
	/* var layers = document.getElementsByClassName("parallaxX");
		var layer, speed, xPos;
		for (var i = 0; i < layers.length; i++) {
			layer = layers[i];
			speed = layer.getAttribute('data-speed');
			var xPos = -(top * speed / 100);
			layer.setAttribute('style', 'transform: translate3d('+ xPos + 'px, 0px, 0px)');

		} */
	});
}

document.body.onload = castParallax();