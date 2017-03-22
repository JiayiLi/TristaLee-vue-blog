import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import tecblog from 'components/tecblog'
import article from 'components/article'
import detail from 'components/detail'
import addnew from 'components/addnew'


Vue.use(Router)

const router = new Router({
	mode: 'history',
  	routes: [
        { path: '/', name: 'Home', component: Home},
        { path: '/tristalee', name: 'Home', component: Home},
        { path: '/tristalee/tecblog', name: 'tecblog', component: tecblog },
        { path: '/tristalee/article', name: 'article', component: article },
        { path: '/tristalee/tec/detail/:id', name: 'detail', component: detail },
        { path: '/tristalee/art/detail/:id', name: 'detail', component: detail },
        { path: '/lijiayi/add/new', name: 'addnew', component:addnew },


  	]
})

export default router

// export default Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Hello',
//       component: Hello
//     },
//     {
//       path: '/tecblog',
//       name: 'tecblog',
//       component: tecblog
//     },
//     {
//       path: '/article',
//       name: 'article',
//       component: article
//     }
//   ]
// })
