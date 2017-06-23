import Search from "./Search.component.vue" ;
import Sidemenu from  "./Sidemenu.component" ;
import Datepicker from "./DatePicker.component.vue" ;
import muSelect from "./mu-select.component.vue" ;
import muInput from "./mu-input.component.vue" ;
import muTabs from "./mu-tabs.component.vue" ;
import muButton from "./mu-button.component.vue" ;
import muTabsPane from "./Tabs/mu-tab-pane.component.vue" ;
import muCollapse from "./mu-collapse.component.vue" ;
import muCollapseItem from "./Collapse/mu-collapse-item.vue" ;
import muSilde from "./mu-slide.component.vue"
// import muModal from "./Modal/ModalBase.component.vue"
import muModalBody from "./Modal/modal-body.vue"
import muModalTitle from "./Modal/modal-title.vue"
import muModal from "./Modal/modal.vue"
import muSildeItem from "./Slide/slide.item.vue"
// import muMessageBox from "./MessageBox/index"
import muTip from "./Tip/index"
import muNotify from "./Notify/index"
import muSwitch from "./mu-switch.component.vue"
import muCheckbox from "./mu-checkbox.component.vue"
import muRadio from "./mu-radio.component.vue" ;
import muTobar from "./mu-tobar.component.vue"
import muTooltip from "./mu-tooltip.component.vue" ;
import muSlider from "./mu-slider.component.vue" ;
import muDrag from "./mu-drag.component.vue" ;
import muBlankLine from "./mu-blank-line.component.vue"  ;
import muText from "./mu-text.component.vue" ;
import Vue from "vue" ;
import $modal from "./Modal/index.js"

let installList    =  [muText,muBlankLine,muDrag,muSlider,muTooltip,muTobar,muRadio,muCheckbox,muSwitch,muNotify,muTip/*,muMessageBox*/,muModalTitle,muModalBody,muModal,muButton,muCollapseItem,muSildeItem,muSilde,Search,Sidemenu,Datepicker,muSelect,muInput,muTabs,muTabsPane,muCollapse]

// let MessageBox   =  Vue.extend(muMessageBox) ;

// console.log( document.body.appendChild((new MessageBox({el: document.createElement('div')})).$el) )

const install      =  (list)=>{
	if( install.installed ){
		return ;
	}
	list.forEach( (v)=>{
		Vue.component( v.name , v )
	} )
    // Vue.prototype.$msgbox = muMessageBox;
	install.installed       =  true ;
}

install( installList )

export default {muText,muBlankLine,muDrag,muSlider,muTooltip,muTobar,muRadio,muCheckbox,muSwitch,muNotify,muTip/*,muMessageBox*/,muModalTitle,muModalBody,muModal,muButton,muCollapseItem,muSildeItem,Search,Sidemenu,Datepicker,muSelect,muInput,muTabs,muTabsPane,muCollapse,muSilde}