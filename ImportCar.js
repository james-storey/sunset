var importCar = function(){

 var loader = new THREE.JSONLoader();
 loader.load("./resources/Yugo_45a.js", function(geometry){
 	var material = new THREE.MeshLambertMaterial( {color: 0xabcdef} );
 	var carMesh = new THREE.Mesh(geometry, material);

 	scene.add(carMesh);
 });

};