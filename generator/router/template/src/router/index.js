import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router)

const router = new Router({
  <%_ if (historyMode) { _%>
  mode: 'history',
  base: process.env.BASE_URL,
  <%_ } _%>
  routes
})

export default router
