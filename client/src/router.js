import Vue from 'vue'
import Router from 'vue-router'
import Article from './views/article.vue'
import Content from './views/content.vue'
import Category from './views/category.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/article',
    },
    {
      path: '/article',
      name: 'article',
      component: Article,
    },
    {
      path: '/content/:id',
      name: 'content',
      component: Content,
    },
    {
      path: '/category',
      name: 'category',
      component: Category,
    },
  ],
})
