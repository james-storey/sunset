// global namespace

var Sunset = function () {
	var that = {};
	var width = window.innerWidth;
	var height = window.innerHeight;
	var car = Car();

	var camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
	camera.translateZ(10);
	camera.translateY(5);
	camera.translateX(10);
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

	var dL = new THREE.DirectionalLight({color: 0xffffff});
	var time = 0;

	var init = function () {
		dL.position = new THREE.Vector3( 1, 0.5, 1 );
		scene.add(dL);

		var cubeGeo = new THREE.CubeGeometry(5, 5, 5, 10, 10, 10);
		var mat = new THREE.MeshLambertMaterial({color: 0xffffff});
		var c = new THREE.Mesh(cubeGeo, mat);
		c.translateX(-20);
		c.translateY(2.5);
		scene.add(c);

		car.importCar(scene);
		scene.add(camera);


	};

	var update = function () {
		car.driveWheels();
		requestAnimationFrame (update);
		time += 0.01;
		dL.position = new THREE.Vector3( Math.cos(time), 1.5, Math.sin(time) );

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

