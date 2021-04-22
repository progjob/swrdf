
var hookMethods = [
	"- writeToURL:error:",
	"- writeToFile:atomically:",
	"- writeToURL:atomically:",

	"- initWithContentsOfURL:error:",
	"- initWithContentsOfFile:",
	"- initWithContentsOfURL:",

	"+ arrayWithContentsOfURL:error:",
	"+ arrayWithContentsOfFile:",
	"+ arrayWithContentsOfURL:",
];

hookMethods.forEach(function(m) {
	var hook = ObjC.classes.NSArray[m];
	Interceptor.attach(hook.implementation, {
		onEnter: function(args) {           
            console.log(m, '\n\t', ObjC.Object(args[2]).toString());
		}
	});
});
