
// Env

var rMode = 'Read';
var wMode = 'Write';


// NSURL

Interceptor.attach(ObjC.classes.NSURL['+ fileURLWithPath:'].implementation, {
    onEnter: function (args) {
        console.log('write' , ObjC.Object(args[2]).toString());
    }
});


// NSFileManager

Interceptor.attach(ObjC.classes.NSFileManager['- fileExistsAtPath:'].implementation, {
    onEnter: function (args) {
        console.log('open' , ObjC.Object(args[2]).toString());
    }
});


// NSString

Interceptor.attach(ObjC.classes.NSString['- writeToFile:atomically:encoding:error:'].implementation, {
    onEnter: function (args) {
        console.log('write' , ObjC.Object(args[2]).toString());
    }
});


/*
- (BOOL)writeToURL:(NSURL *)url atomically:(BOOL)useAuxiliaryFile encoding:(NSStringEncoding)enc error:(NSError **)error;
- (BOOL)writeToFile:(NSString *)path atomically:(BOOL)useAuxiliaryFile encoding:(NSStringEncoding)enc error:(NSError **)error;

- (nullable instancetype)initWithContentsOfURL:(NSURL *)url encoding:(NSStringEncoding)enc error:(NSError **)error;
- (nullable instancetype)initWithContentsOfFile:(NSString *)path encoding:(NSStringEncoding)enc error:(NSError **)error;
+ (nullable instancetype)stringWithContentsOfURL:(NSURL *)url encoding:(NSStringEncoding)enc error:(NSError **)error;
+ (nullable instancetype)stringWithContentsOfFile:(NSString *)path encoding:(NSStringEncoding)enc error:(NSError **)error;

- (nullable instancetype)initWithContentsOfURL:(NSURL *)url usedEncoding:(nullable NSStringEncoding *)enc error:(NSError **)error;
- (nullable instancetype)initWithContentsOfFile:(NSString *)path usedEncoding:(nullable NSStringEncoding *)enc error:(NSError **)error;
+ (nullable instancetype)stringWithContentsOfURL:(NSURL *)url usedEncoding:(nullable NSStringEncoding *)enc error:(NSError **)error;
+ (nullable instancetype)stringWithContentsOfFile:(NSString *)path usedEncoding:(nullable NSStringEncoding *)enc error:(NSError **)error;

*/

// data, array, dict, string

// Interceptor.attach(ObjC.classes.NSDictionary['- writeToFile:atomically:encoding:error:'].implementation, {
//     onEnter: function (args) {
//         console.log('write' , ObjC.Object(args[2]).toString());
//     }
// });
