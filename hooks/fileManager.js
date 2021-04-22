
var hookMethods = [
	"- contentsAtPath:",
	"- createFileAtPath:contents:attributes:",

	"- fileExistsAtPath:",
	"- fileExistsAtPath:isDirectory:",

	"- isReadableFileAtPath:",
	"- isWritableFileAtPath:",
	"- isExecutableFileAtPath:",
	"- isDeletableFileAtPath:",

	"- createDirectoryAtPath:withIntermediateDirectories:attributes:error:",
	"- createDirectoryAtURL:withIntermediateDirectories:attributes:error:",
	"- createSymbolicLinkAtURL:withDestinationURL:error:",
	"- createSymbolicLinkAtPath:withDestinationPath:error:",
	"- createSymbolicLinkAtPath:pathContent:",
	"- createDirectoryAtPath:attributes:",
];

hookMethods.forEach(function(m) {
	var hook = ObjC.classes.NSFileManager[m];
	Interceptor.attach(hook.implementation, {
		onEnter: function(args) {           
            console.log(m, '\n\t', ObjC.Object(args[2]).toString());
		}
	});
});
