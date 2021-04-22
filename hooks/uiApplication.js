
Interceptor.attach(ObjC.classes.UIApplication['- canOpenURL:'].implementation, {
    onEnter: function (args) {
       console.log('canOpenUrl: ', '\n\t', ObjC.Object(args[2]).toString());
    }
});

Interceptor.attach(ObjC.classes.UIApplication['- openURL:'].implementation, {
    onEnter: function (args) {
        console.log('openURL: ', '\n\t', ObjC.Object(args[2]).toString());
    }
});

Interceptor.attach(ObjC.classes.UIApplication['- openURL:options:completionHandler:'].implementation, {
    onEnter: function (args) {
        console.log('openURL:options:completionHandler: ', '\n\t', ObjC.Object(args[2]).toString());
    }
});
