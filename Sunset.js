// global namespace

var Sunset = function () {
	var that = {};
	var width = window.innerWidth;
	var height = window.innerHeight;

	var camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
	camera.translateZ(200);
	camera.translateY(100);
	camera.lookAt(new THREE.Vector3());

	var scene = new THREE.Scene();
	var renderer = Detector.webgl ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer();
	renderer.setClearColor(0xeaeaea, 1);
	renderer.setSize(width, height);
	var dom = renderer.domElement;
	document.body.appendChild(dom);

	window.addEventListener('resize', onResize, false);

	var onResize = function () {
		width = window.innerWidth;
		height = window.innerHeight;
		camera.aspect = width / height;
		camera.updateProjectionMatrix();

		renderer.setSize(width, height);
	}

	var init = function () {
		var dL = new THREE.DirectionalLight({color: 0xffffff});
		dL.position = new THREE.Vector3( 1, 1.5, 1 );
		scene.add(dL);

		//var planeGeo = new THREE.CubeGeometry(100, 100, 300, 10, 10, 10);
		//var mat = new THREE.MeshLambertMaterial({color: 0xffffff});
		//scene.add(new THREE.Mesh(planeGeo, mat));
		importCar();
		scene.add(camera);
	};

	var update = function () {
		requestAnimationFrame (update);

		renderer.render(scene, camera);
	};
	
	that.width = width;
	that.height = height;
	that.camera = camera;
	that.scene = scene;
	that.renderer = renderer;
	
	init();
	update();
	return that;
}();

