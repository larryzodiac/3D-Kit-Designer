// CREATED GEOMETRY FROM IMPORTED EXTERNAL GEOMETRY

function getJersey(geometry, material) {

	ctx.drawImage(img, 0, 0);
  var texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;

	var material = new THREE.MeshPhongMaterial({
		// color: 'rgb(120, 120, 120)'
		map: texture
	});
	var mesh = new THREE.Mesh(
		geometry,
		material
	);

	mesh.material.side = THREE.DoubleSide;

  mesh.position.y = -4;

	// return mesh;
	scene.add(mesh);
}

// function getPlane(size) {
// 	var geometry = new THREE.PlaneGeometry(size, size);
// 	var material = new THREE.MeshBasicMaterial({
// 		transparent: true,
// 		map: textureLoader.load('assets/textures/arrows.png')
// 	});
// 	var mesh = new THREE.Mesh(
// 		geometry,
// 		material
// 	);
//
// 	mesh.rotation.x = -Math.PI/2;
// 	mesh.position.y = -5;
//
// 	return mesh;
// 	// scene.add(mesh);
// }
