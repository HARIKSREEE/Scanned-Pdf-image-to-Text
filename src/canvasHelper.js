var canvas = require("canvas");

const createCanvas = (w, h) => {
  const dataCanvas = canvas.createCanvas(w, h);
  const context = dataCanvas.getContext("2d");

  return {
    dataCanvas,
    context,
  };
};

module.exports = createCanvas;
