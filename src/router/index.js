import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import tecblog from 'components/tecblog'
import article from 'components/article'
import detail from 'components/detail'
import addnew from 'components/addnew'
import user from 'components/user'



Vue.use(Router)

const router = new Router({
	mode: 'history',
  	routes: [
        { path: '/', name: 'Home', component: Home},
        { path: '/tristalee', name: 'Home', component: Home},
        { path: '/tristalee/tecblog', name: 'tecblog', component: tecblog },
        { path: '/tristalee/article', name: 'article', component: article },
        { path: '/tristalee/detail/', name: 'detail', component: detail },
        { path: '/tristalee/add/new', name: 'addnew', component:addnew },
        { path: '/tristalee/user', name: 'user', component:user },

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
