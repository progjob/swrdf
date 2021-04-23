
var hookMethods = [
	"- writeToURL:atomically:",
	"- writeToFile:atomically:",
	"- writeToURL:options:error:",
	"- writeToFile:options:error:",

	"- initWithContentsOfURL:",
	"- initWithContentsOfFile:",	
	"- initWithContentsOfURL:options:error:",
	"- initWithContentsOfFile:options:error:",	

	"+ dataWithContentsOfURL:",
	"+ dataWithContentsOfFile:",	
	"+ dataWithContentsOfURL:options:error:",
	"+ dataWithContentsOfFile:options:error:",	

	"+ dataWithContentsOfMappedFile:",
	"- initWithContentsOfMappedFile:",	
];

hookMethods.forEach(function(m) {
	var hook = ObjC.classes.NSData[m];
	Interceptor.attach(hook.implementation, {
		onEnter: function(args) {           
            console.log(m, '\n\t', ObjC.Object(args[2]).toString());
		}
	});
});
