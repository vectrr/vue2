import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Patch from './views/patch.vue'
// import Home1 from '../demo/docs/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:  '/post/:postId/:postName/:postOccupation/:postEmail/:postBio/edit',
      component: Patch,
      props: true
    }
  ]
})
