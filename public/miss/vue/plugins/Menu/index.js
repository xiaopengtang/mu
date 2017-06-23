import Vue from "vue"
export default {
	"name"   :  "mu-plugins-menu"
	,data(){
		return {
			"urlIndex"   :  ""
		}
	}
	,props   :  {
		"data"  :  {
			"type"     :  Array
			,"default" :  [{title:"测试",_:[{"url":"xxx.com","title":"标题一"},{"url":"xxx.com","title":"标题一"},{"url":"xxx.com","title":"标题一"}]},{title:"测试",_:[{"url":"xxx.com","title":"标题一"},{"url":"xxx.com","title":"标题一"},{"url":"xxx.com","title":"标题一"}]},{title:"测试",_:[{"url":"xxx.com","title":"标题一"},{"url":"xxx.com","title":"标题一"},{"url":"xxx.com","title":"标题一"}]}]
		}
	}
	,methods   :  {
		renderItem(h){
			let {data}    =  this
			data          =  data || []
			return data.map( it => {
				return (
					<mu-collapse-item label={Vue.compile(`<div class="menu-title"><h2>${it.title}</h2><i class="mu-icon-chevron-up"></i></div>`)} >
					{it._ ? (
						<ul class="menu-item">
						{it._.map(child=>{
							const active    =  this.urlIndex === child.url
							return (<li class={`${active?"active":""}`} onClick={this.handleSelect.bind(this,child.url)}>{child.title}</li>);
						})}
						</ul>
					) : null }
					</mu-collapse-item>
				);
			} )
		}
		,handleSelect(url){
			console.log(`this is url : ${url}`)
		}
	}
	,render(h){
		return (
			<mu-collapse>{this.renderItem(h)}</mu-collapse>
		);
	}
}