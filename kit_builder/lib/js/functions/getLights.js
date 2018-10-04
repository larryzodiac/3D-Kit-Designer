function getPointLight(x, y, z, intensity) {
	var light = new THREE.PointLight(0xffffff, intensity);
	light.position.x = x;
	light.position.y = y;
	light.position.z = z;
	return light;
}
