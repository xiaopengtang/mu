let gulp       =  require("gulp")
let $          =  require('gulp-load-plugins')()
let config     =  require("./module.config")
let pkg        =  require("./package.json")
let minifycss  =  require('gulp-minify-css')
let webpack    =  require("webpack")
let webpackStream   =  require("webpack-stream")
let named           =  require('vinyl-named')
let buildConfig     =  require("./webpack.config")
/*gulp.task("appServer",function(callback){
	$.nodemon({
	    script: './bin/www',
	    env: {
	      NODE_ENV: 'development'
	    },
	    stdout: false
	}).on('readable', function() {
	    this.stdout
	      .pipe(bistre({time: true}))
	      .pipe(process.stdout);
	    this.stderr
	      .pipe(bistre({time: true}))
	      .pipe(process.stderr);
	});
    callback();
})*/
gulp.task("less",()=>{
	return gulp.src( config.src.less )
    .pipe($.header(config.header,{pkg:pkg,ver:""}))
    .pipe($.plumber({errorHandler:function(e){
        this.emit('end');
    }}))
    .pipe($.less({}))
    .pipe(minifycss())
    .pipe( gulp.dest(config.dist.css) )
})

// gulp.task("js",function(e){
// 	let task     =  gulp.src(config.src.js , {base:"."}  )
//         .pipe(named())
//         .pipe($.plumber({errorHandler:function(e){
//             this.emit('end');
//         }}))
//         .pipe(webpackStream( fn.extend({},buildConfig,{
//         	output:{
//         		library        :  name,
//         		libraryTarget  : 'umd'
//         	}
//         }) ))
//         .pipe($.header(config.header,{pkg:pkg,ver:""}))
//         .pipe(gulp.dest(config.dist.js/*config.dist.js))
//         .pipe($.uglify())
//         .pipe($.rename({suffix: '.min',dirname:""}))
//         .pipe($.header(config.header,{pkg:pkg,ver:""}))
//         .pipe(gulp.dest(config.dist.js/*config.dist.js*/))
// 	return  task
// })*/
gulp.task("watch",()=>{
	return gulp.watch( [config.watch.less] , ["less"] )
})
// gulp.task("js",()=>{
	// return webpack( require("./webpack.config") )
// })
gulp.task('default', [/*"appServer",*/"watch","less"/*,"js"*/]);