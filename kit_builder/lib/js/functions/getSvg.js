// SERIALISE SVG ///////////////////

// var texture;
var texture, ctx, img, canvas;

function getSvg() {

  // Grab SVG and spit back out the serialised xml
  var svg = document.getElementById("texture").querySelector("svg");
  var svgData = (new XMLSerializer()).serializeToString(svg);

  // Setup img as placholder for serialised SVG
  // Setup canvas to capture img to map to model
  img = document.createElement("img");
  canvas = document.createElement("canvas");

  // Just resetting the size so serialised SVG in img fits on canvas
  var svgSize = svg.getBoundingClientRect();
  canvas.width = svgSize.width;
  canvas.height = svgSize.height;

  // Get our SVG
  ctx = canvas.getContext("2d");
  img = document.createElement("img");

  // Placeholder for serialised SVG
  img.setAttribute("src","data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent(svgData))));

}
