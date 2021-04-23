
var hookMethods = [
	"- setObject:forKey:", 
	"- setInteger:forKey:", 
	"- setFloat:forKey:", 
	"- setDouble:forKey:",
	"- setBool:forKey:",
	"- setURL:forKey:",
	
	"- objectForKey:",
	"- integerForKey:",
	"- floatForKey:",
	"- doubleForKey:",
	"- boolForKey:",
	"- URLForKey:",
	"- arrayForKey:",
	"- dictionaryForKey:",
	"- dataForKey:",
	"- stringForKey:",
	"- stringArrayForKey:",
];

hookMethods.forEach(function(m) {
	var hook = ObjC.classes.NSUserDefaults[m];
	Interceptor.attach(hook.implementation, {
		onEnter: function(args) {
	        console.log('UserDefaults', '\n\t', m);
		}
	});
});
