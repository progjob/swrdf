
var hookMethodsDesignated = [
	"- initWithCoder:",
	"- initWithFileDescriptor:",
	"- initWithFileDescriptor:closeOnDealloc:",
];

var hookMethodsConvenient = [
	"+ fileHandleForReadingAtPath:", 
	"+ fileHandleForWritingAtPath:", 
	"+ fileHandleForUpdatingAtPath:", 

	"+ fileHandleForReadingFromURL:error:", 
	"+ fileHandleForWritingToURL:error:", 
	"+ fileHandleForUpdatingURL:error:", 
];

hookMethodsDesignated.forEach(function(m) {
	var hook = ObjC.classes.NSFileHandle[m];
	Interceptor.attach(hook.implementation, {
		onEnter: function(args) {           
            console.log(m, '\n\t', ObjC.Object(args[2]).toString());
		}
	});
});

hookMethodsConvenient.forEach(function(m) {
	var hook = ObjC.classes.NSFileHandle[m];
	Interceptor.attach(hook.implementation, {
		onEnter: function(args) {           
            console.log(m, '\n\t', ObjC.Object(args[2]).toString());
		}
	});
});
