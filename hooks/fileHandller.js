
/*

- (instancetype)initWithFileDescriptor:(int)fd;
- (instancetype)initWithFileDescriptor:(int)fd closeOnDealloc:(BOOL)closeopt
- (nullable instancetype)initWithCoder:(NSCoder *)coder

+ (nullable instancetype)fileHandleForReadingAtPath:(NSString *)path;
+ (nullable instancetype)fileHandleForWritingAtPath:(NSString *)path;
+ (nullable instancetype)fileHandleForUpdatingAtPath:(NSString *)path;

+ (nullable instancetype)fileHandleForReadingFromURL:(NSURL *)url error:(NSError **)error
+ (nullable instancetype)fileHandleForWritingToURL:(NSURL *)url error:(NSError **)error
+ (nullable instancetype)fileHandleForUpdatingURL:(NSURL *)url error:(NSError **)error

*/
