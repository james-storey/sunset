var Car = function(){

	var that = {};
	that.loaded = false;
    var carMesh;
    var tireMeshes = [];

	var importCar = function(scene){
	 var loader = new THREE.JSONLoader();


	 loader.load("./resources/Yugo_45aBody.js", function(geometry){
	 	var material = new THREE.MeshLambertMaterial( {color: 0xabcdef} );
	 	carMesh = new THREE.Mesh(geometry, material);
	 	that.loaded = true;
	 	console.log("car loaded");
	 	scene.add(carMesh);
	 });

	 loader.load("./resources/Yugo_45aTire.js", function(geometry){
	 	var material = new THREE.MeshLambertMaterial( {color: 0xabcdef} );
	 	for(i = 0; i < 4; i ++){
	 		tireMeshes.push(new THREE.Mesh(geometry, material));
	 	}
	 	tireMeshes[0].position = new THREE.Vector3( 1.75, -0.2, 3.2 ); 
	 	tireMeshes[1].position = new THREE.Vector3( -1.75, -0.2, 3.2 ); 
	 	tireMeshes[2].position = new THREE.Vector3( -1.75, -0.2, -3.2); 
	 	tireMeshes[3].position = new THREE.Vector3( 1.75, -0.2, -3.2 ); 
	 	for(i = 0; i < 4; i ++){
	 		scene.add(tireMeshes[i]);
	 	}
	 });

	};

	var driveWheels = function(){
		if(that.loaded === true){
			console.log("drive");
			for (i = 0; i < tireMeshes.length; i++){
				tireMeshes[i].rotateX(.5);
			}
		}

	}
	that.tireMeshes = tireMeshes;
	that.carMesh = carMesh;
	that.driveWheels = driveWheels;
	that.importCar = importCar;
	return that;

};