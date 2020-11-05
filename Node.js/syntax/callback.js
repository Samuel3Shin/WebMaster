// function a() {
//     console.log("A");
// }

var a = () => {
    console.log("A");
}

var slowfunc = (cb) => {
    cb();
}

slowfunc(a);