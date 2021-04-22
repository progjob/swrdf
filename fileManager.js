

Interceptor.attach(ObjC.classes.NSURL['+ fileURLWithPath:'].implementation, {
    onEnter: function (args) {
        console.log('write' , ObjC.Object(args[2]).toString());
    }
});

