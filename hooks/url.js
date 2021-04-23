
var hookMethodsDesignated = [
	"- initWithCoder:",
	"- initFileURLWithPath:",
	"- initFileURLWithPath:isDirectory:",
	"- initFileURLWithPath:relativeToURL:",
	"- initFileURLWithPath:isDirectory:relativeToURL:",
	"- initFileURLWithFileSystemRepresentation:isDirectory:relativeToURL:",
	"- initWithString:relativeToURL:",
	"- initWithDataRepresentation:relativeToURL:",
	"- initAbsoluteURLWithDataRepresentation:relativeToURL:",
];

hookMethodsDesignated.forEach(function(m) {
	var hook = ObjC.classes.NSURL[m];
	Interceptor.attach(hook.implementation, {
		onEnter: function(args) {           
            console.log(m, '\n\t', ObjC.Object(args[2]).toString());
		}
	});
});
