
Interceptor.attach(ObjC.classes.NSFileManager['- fileExistsAtPath:'].implementation, {
    onEnter: function (args) {
        console.log('fileExistsAtPath:', '\n\t', ObjC.Object(args[2]).toString());
	}
});
