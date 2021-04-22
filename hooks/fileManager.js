
Interceptor.attach(ObjC.classes.NSFileManager['- fileExistsAtPath:'].implementation, {
    onEnter: function (args) {
        console.log('fileExistsAtPath:', '\n\t', ObjC.Object(args[2]).toString());
	}
});


Interceptor.attach(ObjC.classes.NSFileManager['- createFileAtPath:contents:attributes:'].implementation, {
    onEnter: function (args) {
        console.log('createFileAtPath:contents:attributes:', '\n\t', ObjC.Object(args[2]).toString());
	}
});

