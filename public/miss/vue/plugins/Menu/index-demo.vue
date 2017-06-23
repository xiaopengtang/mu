<template>
	<mu-collapse class="mu-plugins menu">
		<mu-collapse-item class="menu-items" v-for="d in list" :defaults="false" :label="d.title">
			<ul class="menu-item" v-if="d._">
				<li v-for="i in d._" :class="{'active':urlIndex === i.url}"  @click="handleSelect(i.url)">{{i.title}}</li>
			</ul>
		</mu-collapse-item>
	</mu-collapse>
</template>
<script>
	export default {
		"name"    :  "mu-plugins-menu"
		,"props"  :  {
			"data"   :  {
				"type"  :  Array
				,"default"  :  [{title:"测试",_:[{"url":"xxx.com","title":"标题一"},{"url":"xxx.com","title":"标题一"},{"url":"xxx.com","title":"标题一"}]},{title:"测试",_:[{"url":"xxx.com","title":"标题一"},{"url":"xxx.com","title":"标题一"},{"url":"xxx.com","title":"标题一"}]},{title:"测试",_:[{"url":"xxx.com","title":"标题一"},{"url":"xxx.com","title":"标题一"},{"url":"xxx.com","title":"标题一"}]}]
			}
		}
		,data(){
			return {
				"urlIndex"   :  ""
				,"list"      :  this.data
			}
		}
		,computed :  {
			list(h){
				let {data}    =  this ;
				data     =  data || []
				h        =  this.$createElement
				return data.map( v => {
					// v.title   =  (<div class="menu-title"><h2>{v.title}</h2><i class="mu-icon-chevron-up"></i></div>) ;
					return v ;
				} ) ;
			}
		}
		,methods  :  {
			handleSelect(url){
				this.urlIndex    =  url ;
			}
		}
	}
</script>