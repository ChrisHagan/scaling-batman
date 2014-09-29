var model = (function(){
    var material = new THREE.MeshLambertMaterial({
        color: 0xCC0000
    });
    var radius = 50;
    var segments = 16;
    var rings = 16;
    var sphere = function(){
        return new THREE.Mesh(
            new THREE.SphereGeometry(radius, segments, rings),
            material
        );
    };
    var light = function(){
        var pointLight = new THREE.PointLight(0xFFFFFF);
        pointLight.position.x = 10;
        pointLight.position.y = 50;
        pointLight.position.z = 130;
	return pointLight;
    };

    return {
        sphere:sphere,
        light:light
    }
})();
