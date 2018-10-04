var camera, scene , renderer;
var jsonloader;

function init() {
	// ENV
	var scene = new THREE.Scene();

	// var axesHelper = new THREE.AxesHelper(100);
	// // scene.add(axesHelper);

	var enableFog = false;

	if (enableFog) {
		scene.fog = new THREE.FogExp2(0xffffff, 0.2);
	}

	// EXTERNAL GEOMETRY
	var textureLoader = new THREE.TextureLoader();
	jsonloader = new THREE.JSONLoader();
	jsonloader.load('assets/models/jersey.json', getJersey);
	var pointLightFront = getPointLight(0,100,50,1);
	var pointLightBack = getPointLight(0,100,-50,1);

	// PRIMITIVE GEOMETRY
	// var plane = getPlane(4);
	// scene.add(plane);

	scene.add(pointLightFront);
	scene.add(pointLightBack);

	// CAMERA
	camera = new THREE.PerspectiveCamera(
		45,
		window.innerWidth/window.innerHeight,
		1,
		1000
	);

	camera.position.x = 0;
	camera.position.y = 5;
	camera.position.z = 15;

	camera.lookAt(new THREE.Vector3(0, 0, 0));

	// RENDERING
	renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setClearColor('rgb(255,255,255)');
	document.getElementById('webgl').appendChild(renderer.domElement);
	window.addEventListener( 'resize', windowResize, false );

	var controls = new THREE.OrbitControls(camera, renderer.domElement);

	controls.enableZoom = false;
	// controls.enableRotate = false;
	controls.enablePan = false;
	controls.enableDamping = true;
	controls.minPolarAngle = 1.3;
	controls.maxPolarAngle = 1.7;
	controls.dampingFactor = 0.05;
	controls.rotateSpeed = 0.07;

	update(renderer, scene, camera, controls);

	return scene;
}

getSvg();
var scene = init();
