function visual(container){
    var VIEW_ANGLE = 45;
    var WIDTH = container.width();
    var HEIGHT = container.height();
    if(HEIGHT == 0){
        console.log("Dividing by 0 at aspect ratio calculation - container is empty",container);
    }
    var ASPECT = WIDTH / HEIGHT;
    var NEAR = 0.1;
    var FAR = 10000;

    var renderer = new THREE.WebGLRenderer();
    var camera = new THREE.PerspectiveCamera(
        VIEW_ANGLE,
        ASPECT,
        NEAR,
        FAR
    );
    var scene = new THREE.Scene();
    scene.add(camera);

    camera.position.z = 300;
    renderer.setSize(WIDTH,HEIGHT);

    container.append(renderer.domElement);
    var doRender = function(){
        requestAnimationFrame(doRender);
        renderer.render(scene,camera);
    };
    return {
        renderer:renderer,
        camera:camera,
        scene:scene,
        render:function(){
            requestAnimationFrame(doRender);
        }
    }
}
