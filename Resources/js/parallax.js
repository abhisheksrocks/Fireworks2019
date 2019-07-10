function parallax() {

  //JavaScript for Parallax effect
  //Created by Abhishek - https://www.facebook.com/abhisheksrocks

  window.addEventListener("scroll", function(event) {
    var top = this.pageYOffset;
    var layers = document.getElementsByClassName("par");
    var layer, speed, yPos;
    for (var i = 0; i < layers.length; i++) {
      layer = layers[i];
      speed = layer.getAttribute("movespeed");
      var yPos = -((top * speed) / 100);
      layer.setAttribute(
        "style",
        "transform: translate3d(0px, " + yPos + "px, 0px)"
      );
    }
  });
}
parallax();
