// var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);

var colours = ['primary', 'secondary', 'tertiary', 'accent'];

for (var i = 0; i < 4; i++) {
  var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
  console.log(randomColor);
  $('#' + colours[i] + 'OnSvg').attr('fill', randomColor);
  $('#' + colours[i] + 'SelectorSvg').attr('fill', randomColor);
}
