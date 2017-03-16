import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import tecblog from 'components/tecblog'
import article from 'components/article'


Vue.use(Router)

const router = new Router({
	mode: 'history',
  	routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/tristalee', name: 'Home', component: Home },
        { path: '/tristalee/tecblog', name: 'tecblog', component: tecblog },
        { path: '/tristalee/article', name: 'article', component: article }
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
