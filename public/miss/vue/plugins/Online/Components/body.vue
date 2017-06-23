<template>
	<div class="mu-effect-card card-in-top online-body">
		<div class="online-header">
			<div class="online-title">
				<div class="online-title-txt">小朋友</div>
				<i class="mu-icon-close"  @click="handleClose"></i>
			</div>
			<div :class="{'online-sign mu-css-font-break':true,'is-editing':isEditSign}" :contenteditable="isEditSign" @blur="handleEditSign" @click="handleStartEditSign">在深邃的编码世界，做一枚轻盈的纸飞机 在深邃的编码世界，做一枚轻盈的纸飞机</div>
		</div>
		<mu-tabs class="online-container">
			<mu-tab-pane :label="friendIcon">
			<mu-tobar height="3.3">
			        <mu-collapse class="online-group">
				    	<mu-collapse-item label="家人" animation="mu-fadein-right">
				    	    <mu-tobar>
				    	    	<user v-for="n in 10" @click="handleOpenMessageBox"></user>
				    	    </mu-tobar>
				    	</mu-collapse-item>
				    	<mu-collapse-item label="家人" animation="mu-fadein-right">
				    	    <mu-tobar>
				    	    	<user v-for="n in 10" @click="handleOpenMessageBox"></user>
				    	    </mu-tobar>
				    	</mu-collapse-item>
				    	<mu-collapse-item label="家人" animation="mu-fadein-right">
				    	    <mu-tobar>
				    	    	<user v-for="n in 10" @click="handleOpenMessageBox"></user>
				    	    </mu-tobar>
				    	</mu-collapse-item>
				    	<mu-collapse-item label="家人" animation="mu-fadein-right">
				    	    <mu-tobar>
				    	    	<user v-for="n in 10" @click="handleOpenMessageBox"></user>
				    	    </mu-tobar>
				    	</mu-collapse-item>
				    	<mu-collapse-item label="家人" animation="mu-fadein-right">
				    	    <mu-tobar>
				    	    	<user v-for="n in 10" @click="handleOpenMessageBox"></user>
				    	    </mu-tobar>
				    	</mu-collapse-item>
				    	<mu-collapse-item label="家人" animation="mu-fadein-right">
				    	    <mu-tobar>
				    	    	<user v-for="n in 10" @click="handleOpenMessageBox"></user>
				    	    </mu-tobar>
				    	</mu-collapse-item>
				    	<mu-collapse-item label="家人" animation="mu-fadein-right">
				    	    <mu-tobar>
				    	    	<user v-for="n in 10" @click="handleOpenMessageBox"></user>
				    	    </mu-tobar>
				    	</mu-collapse-item>
				    	<mu-collapse-item label="家人" animation="mu-fadein-right">
				    	    <mu-tobar>
				    	    	<user v-for="n in 10" @click="handleOpenMessageBox"></user>
				    	    </mu-tobar>
				    	</mu-collapse-item>
				    	<mu-collapse-item label="家人" animation="mu-fadein-right">
				    	    <mu-tobar>
				    	    	<user v-for="n in 10" @click="handleOpenMessageBox"></user>
				    	    </mu-tobar>
				    	</mu-collapse-item>
				    	<mu-collapse-item label="家人" animation="mu-fadein-right">
				    	    <mu-tobar>
				    	    	<user v-for="n in 10" @click="handleOpenMessageBox"></user>
				    	    </mu-tobar>
				    	</mu-collapse-item>
				    	<mu-collapse-item label="家人" animation="mu-fadein-right">
				    	    <mu-tobar>
				    	    	<user v-for="n in 10" @click="handleOpenMessageBox"></user>
				    	    </mu-tobar>
				    	</mu-collapse-item>
				    	<mu-collapse-item label="家人" animation="mu-fadein-right">
				    	    <mu-tobar>
				    	    	<user v-for="n in 10" @click="handleOpenMessageBox"></user>
				    	    </mu-tobar>
				    	</mu-collapse-item>
				    	<mu-collapse-item label="家人" animation="mu-fadein-right">
				    	    <mu-tobar>
				    	    	<user v-for="n in 10" @click="handleOpenMessageBox"></user>
				    	    </mu-tobar>
				    	</mu-collapse-item>
			        </mu-collapse>
			    </mu-tobar>
			</mu-tab-pane>
			<mu-tab-pane :label="groupIcon">
				<mu-collapse class="online-group">
			    	<mu-collapse-item label="扯淡会" animation="mu-fadein-right">
				    	<mu-tobar >
			    	    	<user v-for="n in 10" @click="handleOpenMessageBox"></user>
			    	    </mu-tobar>
			    	</mu-collapse-item>
			    	<mu-collapse-item label="吹风会" animation="mu-fadein-right">
			    	    <mu-tobar >
			    	    	<user v-for="n in 10" @click="handleOpenMessageBox"></user>
			    	    </mu-tobar>
			    	</mu-collapse-item>
			    </mu-collapse>
			</mu-tab-pane>
			<mu-tab-pane :label="messageIcon">
			    <mu-tobar height="3.3">
	    	    	<user v-for="n in 10" @click="handleOpenMessageBox"></user>
	    	    </mu-tobar>
			</mu-tab-pane>
		</mu-tabs>
		<div class="online-setting">
		    <i class="mu-icon-search"></i>
		    <i class="mu-icon-volume-up"></i>
		    <i class="mu-icon-plus"></i>
		    <i class="mu-icon-cog"></i>
		    <i class="mu-icon-bell-o"></i>
		</div>
	</div>
</template>
<script>
    import user from "./user.vue" ;
    import MessageWin  from "./messageWin.vue" ;
    import miss from "miss" ;
    let {"Selector":$}   =  miss
    let $handle    =  {
    	"win"      :  null
    }
	export default{
		data(){
			return {
				"friendIcon"   :  (<i class="mu-icon-user-circle-o"></i>) 
				,"groupIcon"   :  (<i class="mu-icon-group"></i>)
				,"messageIcon" :  (<i class="mu-icon-comment"></i>)
				,"user"        :  {}
				,"isEditSign"  :  false
			}
		}
		,components    :  {user}
		,methods    :  {
			handleClose(e){
				this.$emit("close",e)
			}
			,handleEditSign(e){
				this.isEditSign    =  false
			}
			,handleStartEditSign(e){
				this.isEditSign    =  true
				// e.currentTarget.dblclick()
				console.log( e.currentTarget.dblclick )
			}
			,handleCloseMessageBox(){}
			,handleOpenMessageBox(h){
				let $dom      =  h.currentTarget
				let user      =  {"uid":1,"nickname":"测试","url":"//q.qlogo.cn/qqapp/101235792/B704597964F9BD0DB648292D1B09F7E8/100"}
				h        =  this.$createElement
				!$handle.win  && ($handle.win =
				this.$modal({
					"body"    :  (<MessageWin></MessageWin>)
					,"title"  :  false
				})) || ($handle.win.vm.active=true);
			}
		}
	}
</script>