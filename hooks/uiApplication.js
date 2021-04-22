
var hookMethods = ["- canOpenURL:", "- openURL:", "- openURL:options:completionHandler:"]

hookMethods.forEach(function(m) {
	var hook = ObjC.classes.UIApplication[m];
	Interceptor.attach(hook.implementation, {
		onEnter: function(args) {           
            console.log(m, '\n\t', ObjC.Object(args[2]).toString());
		}
	});
});
