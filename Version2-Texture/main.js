function init() {
    
    ////////////////////////////////////
    
	var scene = new THREE.Scene();
    
    scene.background = new THREE.Color(000);
    
    // LIGHTS //////////////////////////

	// initialize objects
	var lightLeft = new THREE.SpotLight(0xffffff, 0.6, 3000);
	var lightRight = new THREE.SpotLight(0xffffff, 0.6, 3000);
    var lightFront = new THREE.SpotLight(0xffffff, 0.6, 3000);
    var lightBack = new THREE.SpotLight(0xffffff, 0.6, 3000);

	lightLeft.position.x = -50;
	lightLeft.position.y = 10;
	lightLeft.position.z = 0;

	lightRight.position.x = 50;
	lightRight.position.y = 10;
	lightRight.position.z = 0;
    
    lightFront.position.x = 0;
	lightFront.position.y = 10;
	lightFront.position.z = 50;
    
    lightBack.position.x = 0;
	lightBack.position.y = 10;
	lightBack.position.z = -50;

	// add other objects to the scene
	scene.add(lightLeft);
	scene.add(lightRight);
    scene.add(lightFront);
    scene.add(lightBack);
    
    // CAMERA //////////////////////////

	var camera = new THREE.PerspectiveCamera(
		45, // field of view
		window.innerWidth / window.innerHeight, // aspect ratio
		1, // near clipping plane
		1000 // far clipping plane
	);
	camera.position.z = 20;
	camera.position.x = 0;
	camera.position.y = 0;
	camera.lookAt(new THREE.Vector3(0, 0, 0));
    
    // EXTERNAL GEOMETRY ///////////////

    // Instantiate a loader
	var loader = new THREE.JSONLoader();
	var textureLoader = new THREE.TextureLoader();
    
    // MATERIAL ////////////////////////
    
    // Load a resource
    // Resource URL
    // onLoad callback
    loader.load('/Iterations/Version2-Texture/assets/models/cyclingJersey/jerseyNoBackPocket.json', handle_load);
    
    // Callback for for .load()
    function handle_load(geometry, material){
        
        // Create the material when texture loaded
        // A material for non-shiny surfaces
        var material = new THREE.MeshLambertMaterial({
            // 'map:' see imageBitmapLoader
            map: textureLoader.load('/Iterations/Version2-Texture/assets/textures/myGraphic.svg')
//            map: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-319 161 640 480" style="enable background:new -319 161 640 480;" xml:space="preserve"><style type="text/css">.st0{fill:#FF0000;stroke:#000000;stroke-miterlimit:10;}.st1{fill:#3F2AD8;stroke:#000000;stroke-miterlimit:10;}</style><rect id="XMLID_1_" x="-319" y="161" class="st0" width="640" height="480"/><rect x="-322" y="600" class="st1" width="643" height="41"/><rect x="-322" y="454" class="st1" width="643" height="41"/></svg>'
        });
        
//        var marterial = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-319 161 640 480" style="enable background:new -319 161 640 480;" xml:space="preserve"><style type="text/css">.st0{fill:#FF0000;stroke:#000000;stroke-miterlimit:10;}.st1{fill:#3F2AD8;stroke:#000000;stroke-miterlimit:10;}</style><rect id="XMLID_1_" x="-319" y="161" class="st0" width="640" height="480"/><rect x="-322" y="600" class="st1" width="643" height="41"/><rect x="-322" y="454" class="st1" width="643" height="41"/></svg>'
        
        mesh = new THREE.Mesh(geometry, material);
        mesh.material.side = THREE.DoubleSide;
        
        mesh.position.y = -6;
        mesh.scale.x = 1.5;
        mesh.scale.y = 1.5;
        mesh.scale.z = 1.5;
        
        scene.add(mesh);
    }
    
    // RENDERER ////////////////////////
    
    var renderer = new THREE.WebGLRenderer( { alpha: true } );
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMap.enabled = true;
    
    ////////////////////////////////////

	var controls = new THREE.OrbitControls( camera, renderer.domElement );

	document.getElementById('webgl').appendChild(renderer.domElement);

	update(renderer, scene, camera, controls);

	return scene;
    
} //End init()

////////////////////////////////////

function update(renderer, scene, camera, controls) {
	controls.update();
	renderer.render(scene, camera);
	requestAnimationFrame(function() {
		update(renderer, scene, camera, controls);
	});
}

////////////////////////////////////

var scene = init();

////////////////////////////////////