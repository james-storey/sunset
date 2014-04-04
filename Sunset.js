// global namespace

var Sunset = function () {
	var that = {};
	var width = window.innerWidth;
	var height = window.innerHeight;

	var camera = new THREE.PerspectiveCamera( 60, width / height, 1, 1000 );
	var scene = new THREE.Scene();
	var renderer = Detector.webgl ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer();
	renderer.setClearColor(0xeaeaea, 1);
	renderer.setSize(width, height);
	var dom = renderer.domElement;
	document.body.appendChild(dom);

	window.addEventListener('resize', onResize, false);
	
	that.width = width;
	that.height = height;
	that.camera = camera;
	that.scene = scene;
	that.renderer = renderer;
	
	return that;
}();

