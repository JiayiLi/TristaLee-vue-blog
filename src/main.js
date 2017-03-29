// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
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


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { 
  	App
  }
})
