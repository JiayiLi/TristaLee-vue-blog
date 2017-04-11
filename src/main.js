// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import { Message } from 'element-ui';
import App from './App'
import router from './router'
import './assets/utf8-php/ueditor.config.js'
import './assets/utf8-php/ueditor.all.min.js'
import './assets/utf8-php/lang/zh-cn/zh-cn.js'
import './assets/utf8-php/ueditor.parse.min.js'


Vue.use(ElementUI)
Vue.use(Vuex)

//Vuex配置
const store = new Vuex.Store({
  state: {
    domain:'http://test.example.com', //保存后台请求的地址，修改时方便（比方说从测试服改成正式服域名）
    userInfo: { //保存用户信息
      // nick: null,
      // ulevel: null,
      // uid: null,
      // portrait: null
      userId:null,
      userName:null
    }
  },
  mutations: {
    //更新用户信息
    updateUserInfo(state, newUserInfo) {
      state.userInfo = newUserInfo;
    }
  }
})

//设置cookie,增加到vue实例方便全局调用
//vue全局调用的理由是，有些组件所用到的接口可能需要session验证，session从cookie获取
//当然，如果session保存到vuex的话除外
Vue.prototype.setCookie = (c_name, value, expiredays) => {
  var exdate = new Date();　　　　
  exdate.setDate(exdate.getDate() + expiredays);　　　　
  document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}

//获取cookie、
function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return (arr[2]);
  else
    return null;
}
Vue.prototype.getCookie = getCookie;

//删除cookie
Vue.prototype.delCookie =(name) => {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { 
  	App
  },
  // created(){
  // 	this.checkLogin();
  // },
  // watch:{
  // 	"$route":'checkLogin'
  // },
  // methods:{
  // 	checkLogin:function(){
  // 		if(!this.getCookie('session')){
  // 			this.$router.push('/tristalee/user');
  // 		}else {
  // 			// this.$router.push('/tristalee/tecblog');
  // 		}
  // 	}
  // }
})



