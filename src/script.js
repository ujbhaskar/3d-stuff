console.log('Script');
var plot = document.getElementById("plot");
var x = -3;
var y = 44;
var z = -23;

function rotateX(flag){
    x = flag?x+5:x-5;
    setTransform();
}

function rotateY(flag){
    y = flag?y+5:y-5;
    setTransform();
}

function rotateZ(flag){
    z = flag?z+5:z-5;
    setTransform();
}

function setTransform(){
    plot.style.transform = 'translate3d(-83px,41px,490px) rotateY('+y+'deg) rotateZ('+z+'deg) rotateX('+x+'deg)';
    console.log(plot.style.transform);
}

setTransform();