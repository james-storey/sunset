var Car = function(){

	var that = {};

	var importCar = function(){
	 var loader = new THREE.JSONLoader();
	 var carMesh;
	 loader.load("./resources/Yugo_45a.js", function(geometry){
	 	var material = new THREE.MeshLambertMaterial( {color: 0xabcdef} );
	 	carMesh = new THREE.Mesh(geometry, material);
	 });
	};

	var driveWheels = function(){
		for(i = 0; i < carMesh.geometry.children.length; i++){
			console.log(carMesh.geometry.children[i].name);
		}

	}

	that.carMesh = carMesh;

	importCar();

	return that;

}();