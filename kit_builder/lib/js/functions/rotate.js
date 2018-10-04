
// function rotateLeft(){
//   mesh.rotateY(-0.785398);
// }
//
// function rotateRight(){
//   mesh.rotateY(0.785398);
// }

// function toRadians (angle) {
//   return angle * (Math.PI / 180);
// }
//
// var delta = 0;
//
// $( "#rotateRight" ).click(function() {
//   new TWEEN.Tween( camera.position )
//   .to( {
//     x: camera.position.x,
//     y: camera.position.y,
//     z: camera.position.z}, 2000 )
//   // .easing( TWEEN.Easing.Linear.None)
//   .easing(TWEEN.Easing.Linear.None)
//   .start();
// });

// CAMERA RESET

$('#resetCamera').click(function() {
  new TWEEN.Tween( camera.position )
  .to( {
    x: 0,
    y: 5,
    z: 15}, 2000 )
  // .easing( TWEEN.Easing.Linear.None)
  .easing(TWEEN.Easing.Linear.None)
  .start();
  console.log('hello');
  console.log(camera.position);
});
