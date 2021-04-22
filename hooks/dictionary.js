
var hookMethods = [
	"- writeToFile:atomically:",
	"- writeToURL:atomically:",
	"- writeToURL:error:",
	"+ dictionaryWithContentsOfFile:",
	"+ dictionaryWithContentsOfURL:",
	"- initWithContentsOfFile:",
	"- initWithContentsOfURL:",
];

hookMethods.forEach(function(m) {
	var hook = ObjC.classes.NSDictionary[m];
	Interceptor.attach(hook.implementation, {
		onEnter: function(args) {           
            console.log(m, '\n\t', ObjC.Object(args[2]).toString());
		}
	});
});
