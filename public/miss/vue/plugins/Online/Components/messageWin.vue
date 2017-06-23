<template>
	<div class="online-win online mu-plugins">
		<div class="online-users">
			<mu-tobar height="5.45">
				<div :class="{'online-user only-header':true,'active':userIndex == n}" @click="handleSelectUser(n)" v-for="n in 15">
					<div class="online-user-header">
						<img src="//q.qlogo.cn/qqapp/101235792/B704597964F9BD0DB648292D1B09F7E8/100">
					</div>
					<div class="online-user-name">
					    <h3 class="online-nickname">小朋友</h3>
					</div>
					<i class="mu-icon-close" @click.stop="handleDelUser(n)"></i>
				</div>
			</mu-tobar>
		</div>
		<div class="online-mess-box">
			<div class="online-mess-header">
				<user class="big"></user>
				<div class="online-mess-ctrl">
					<i class="mu-icon-minus"></i>
					<i class="mu-icon-close" @click="handleCloseWin"></i>
				</div>
			</div>
			<div class="online-mess-body"></div>
			<div class="online-mess-footer">
				<editer></editer>
				<div class="online-sub-btns">
					<button class="online-btn">关闭</button>
					<button class="online-btn">发送</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
    import user from "./user.vue"
    import editer from "../../Editer/index.vue"
	export default {
		props   :  {
			user   :  Object
		}
		,methods   :  {
			handleSelectUser(index){
				this.userIndex    =  index
			}
			,handleDelUser(index){
			}
			,handleCloseWin(e){
				this.$emit("closeWin",e)
			}
		}
		,components   :  {user,editer}
		,data(){
			return {
				"userList"   :  [this.user]
				,"receiveUser"  :  {}
				,"userIndex" :  1
			}
		}
		,computed   :  {
			/*receiveUser(){
				return this.user
			}*/
		}
		,watch   :  {
			/*receiveUser(newValue){
				this.userList.push(newValue)
				this.userIndex   =  this.userList.length - 1
			}*/
		}
	}
</script>