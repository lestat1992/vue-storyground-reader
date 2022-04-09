import bgSketch from "../svg/bgSketch.js";

import svgColorChange from "./svgColorChange.js";

function drawCanvasBg(dimension, bgStyle, layoutID) {
  let canvas = document.getElementById("st-canvas-bg");

  let context = canvas.getContext("2d");

  let svgString = svgColorChange(bgSketch, bgStyle.bgColor);

  let maxSizeTexture = 400;
  let NTexture = Math.ceil(dimension.height / maxSizeTexture);

  for (let index = 0; index < NTexture; index++) {
    // crea un meccanismo tipo space betweeen
    let x = 0;
    let y = index * maxSizeTexture;
    createTexture(svgString, x, y, maxSizeTexture, maxSizeTexture);
  }

  function createTexture(string, x, y, w, h) {
    var img1 = new Image();
    img1.onload = function () {
      let angles = [90, 180, 270, 360];
      let angle = angles[Math.floor(Math.random() * angles.length)];
      console.log("guarda qui fesso");
      console.log(angle);
      context.save();
      context.drawImage(img1, x, y, w, h);
      //context.rotate((angle * Math.PI) / 180);
      //context.restore();
    };
    img1.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(string);

    console.log(img1);
    context.fillStyle = "pink";
    context.fillRect(0, 0, 100, 100);

    context.restore();
  }
  /* */
}

export default drawCanvasBg;
