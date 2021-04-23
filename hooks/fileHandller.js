
var hookMethodsDesignated = [
	"- initWithCoder:",
	"- initWithFileDescriptor:",
	"- initWithFileDescriptorcloseOnDealloc:",
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
	var hook = ObjC.classes.NSFileHandler[m];
	Interceptor.attach(hook.implementation, {
		onEnter: function(args) {           
            console.log(m, '\n\t', ObjC.Object(args[2]).toString());
		}
	});
});
