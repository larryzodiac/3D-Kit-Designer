function init() {
    
    var mesh;
    
    ///////////////////////////////////////////////////
    
	var scene = new THREE.Scene();
    
    scene.background = new THREE.Color(0xffffff);
    
    var sceneWidth = 500;
    var sceneHeight = 500;

	var camera = new THREE.PerspectiveCamera(
		45,
		sceneWidth / sceneHeight,
		1,
		1000
	);
    
    ///////////////////////////////////////////////////
    
    document.getElementById("rotateLeft").addEventListener('click', rotateLeft);
    
    document.getElementById("rotateRight").addEventListener('click', rotateRight);
    
    ///////////////////////////////////////////////////
    
    function rotateLeft(){
        mesh.rotateY(-0.785398);
    }

    function rotateRight(){
        mesh.rotateY(0.785398);
    }
    
    ///////////////////////////////////////////////////
    
//    var light = new THREE.AmbientLight(0x404040);
//    scene.add(light);
    
    ///////////////////////////////////////////////////
    
    function handle_load(geometry, materials){
        var material = new THREE.MeshNormalMaterial();
        mesh = new THREE.Mesh(geometry, material);
        mesh.material.side = THREE.DoubleSide;
        mesh.rotateY(3.14159);
        mesh.position.y = -7;
        mesh.scale.x = 3;
        mesh.scale.y = 3;
        mesh.scale.z = 3;
        scene.add(mesh);
    }
    
    var loader = new THREE.JSONLoader();
    loader.load('/Iterations/Version1-Model/assets/models/cyclingJersey/jersey2.json', handle_load);

    ///////////////////////////////////////////////////
    
	camera.position.x = 0;
	camera.position.y = 0;
	camera.position.z = -20;

	camera.lookAt(new THREE.Vector3(0, 0, 0));
    
    ///////////////////////////////////////////////////
    
    ///////////////////////////////////////////////////

	var renderer = new THREE.WebGLRenderer();
//	renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setSize(sceneWidth,sceneHeight);
	document.getElementById('webgl').appendChild(renderer.domElement);
	
    render();
    
    ///////////////////////////////////////////////////
    
    function render(){
    
        renderer.render(
            scene,
            camera 
        );
    
        requestAnimationFrame(render);
        
    }
    
    ///////////////////////////////////////////////////

}

///////////////////////////////////////////////////

function convert_rad(degrees){
    var radians = degrees * (Math.PI/180);
    return radians;
}

///////////////////////////////////////////////////



///////////////////////////////////////////////////

init();

///////////////////////////////////////////////////