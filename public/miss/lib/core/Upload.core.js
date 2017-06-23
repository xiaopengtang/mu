//长传类
import _ from "./Common.core" ;
export default (function(fn){
	return fn.call(true)
})(function(){
	const defaultConfig    =  
	{
		formatSize       :  1*1024*1024   //1M
		,type            :  "*.png,*.gif"   //后缀名
		,refuseFileCallback   :  _.noop
		,start           :  _.noop
		,upload          :  _.noop
		,end             :  _.noop
		,finish          :  _.noop
	};
	
	return function($config){
		$config     =  _.extend(true,defaultConfig,$config) ;

		class Handle{
			constructor(){
				this.$reg      =  new RegExp($config.type.split(",").map((v)=>{
					return "(\\"+v.substr(1)+"$)" ;
				}).join("|")) ;
			}
			_checkFile(files){
				let ret        =  []
				,correct       =  []
				_.each( files , (v)=>{
					if( typeof v != "object")
						return ;
					let status  =  this.$reg.test(v.name)
					status && ret.push(v) || correct.push(v) ;
				} )
				correct.length > 0 
				&& _.isFunction($config.refuseFileCallback)
				&& $config.refuseFileCallback.call(true,correct)
				return ret ;
			}
			_createViewImg(files,callback){
				let file       =  files.shift()
				let ret        =  []
				const $reader  =  new FileReader()
				$reader.readAsDataURL( file )
				$reader.onload =  ()=>{
					ret.push( $reader.result )
					files.length > 0 && this._createViewImg( files , (arr)=>{
						Array.prototype.push.apply(ret,arr)
						_.isFunction($config.ready) && $config.ready.call(this,ret)
					} ) || _.isFunction($config.ready) && $config.ready.call(this,ret)
				}
				return true ;
			}
			_sendFileToServer(file,callback,errorback){
				callback.call(file)
			}
		}

		class Upload extends Handle{
			constructor(files){
				super(files);
				this.$files    =  this._checkFile( files )
				let $files     =  _.extend(true,[],this.$files)
				this.$files.length > 0 && this._createViewImg($files)
				&& this.start() ;
			}
			start(){
				let file    =  this.$files.shift()
				this.upload(file)
				_.isFunction( $config.start )
				&& $config.start.call(file)
			}
			upload(file,pos){
				pos         =  pos === void 0 ? 0 : pos ;
				let size    =  file.size,uploadSlice  
				,formatSize =  size < formatSize ? size : $config.formatSize 
				,flag       =  pos + formatSize
				formatSize  =  flag > size ? (size-pos) : formatSize
				uploadSlice =  file.slice( pos , formatSize ) ;
				let uploaded   =  pos + formatSize ;
				this._sendFileToServer( uploadSlice , ()=>{
					_.isFunction( $config.upload )
					&& $config.upload.call(file,uploaded ) ;
				    flag < size && this.upload(file,flag) 
				    || this.end(file) ;
				} 
				,()=>{
					_.isFunction($config.uploadErrorCallback)
					&&$config.uploadErrorCallback.call(file,uploaded)
				})
				
			}
			end(file){
				_.isFunction( $config.complate )
				&& $config.complate.call(file) ;
				this.$files.length > 0 && this.start()
				|| _.isFunction( $config.finish )
				&& $config.finish.call() ;
			}
		}
		return Upload
	}
})