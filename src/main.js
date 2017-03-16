// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
// import css from './assets/css/index.css'
// import css from './assets/css/common.css'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { 
  	App
  }
})
