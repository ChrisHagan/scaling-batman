$(function(){
    var container = $("#scene");
    var v = visual(container);
    var s = model.sphere();
    var l = model.light();

    v.scene.add(s);
    v.scene.add(l);
    v.render();

    var io = new Kibo();
    io.down("left",function(){
	console.log("left");
    }).down("right",function(){
	console.log("right");
    });
});
