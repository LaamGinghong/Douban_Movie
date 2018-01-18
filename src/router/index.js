import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Movie from '@/components/Movie'
import People from '@/components/People'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    		path:'/Movie/:id',
    		name:'Movie',
    		component:Movie
    },
    {
    		path:'/People/:id',
    		name:'People',
    		component:People
    }
  ],
})
