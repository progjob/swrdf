
// Env

var rMode = '<';
var wMode = '>';

var onEnterCallback = function (args) {
        console.log('_' , ObjC.Object(args[2]).toString());
}

var onReadCallback = function (args) {
        console.log(rMode , ObjC.Object(args[2]).toString());
}

var onWriteCallback = function (args) {
        console.log(wMode , ObjC.Object(args[2]).toString());
}

// data, array, dict

// NSURL
Interceptor.attach(ObjC.classes.NSURL['+ fileURLWithPath:'].implementation, {
    onEnter: onReadCallback
});
