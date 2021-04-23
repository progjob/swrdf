
var hookMethods = [
	"- writeToURL:atomically:encoding:error:",
	"- writeToFile:atomically:encoding:error:",

	"- initWithContentsOfURL:encoding:error:",
	"- initWithContentsOfFile:encoding:error:",	
	"+ stringWithContentsOfURL:encoding:error:",
	"+ stringWithContentsOfFile:encoding:error:",

	"- initWithContentsOfURL:usedEncoding:error:",
	"- initWithContentsOfFile:usedEncoding:error:",	
	"+ stringWithContentsOfURL:usedEncoding:error:",
	"+ stringWithContentsOfFile:usedEncoding:error:",

	"- writeToURL:atomically:",
	"- writeToFile:atomically:",
	"- initWithContentsOfURL:",
	"- initWithContentsOfFile:",	
	"+ stringWithContentsOfURL:",
	"+ stringWithContentsOfFile:",
];

hookMethods.forEach(function(m) {
	var hook = ObjC.classes.NSString[m];
	Interceptor.attach(hook.implementation, {
		onEnter: function(args) {           
            console.log(m, '\n\t', ObjC.Object(args[2]).toString());
		}
	});
});


