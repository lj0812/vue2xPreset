import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router)

export default new Router({
  <%_ if (historyMode) { _%>
  mode: 'history',
  base: process.env.BASE_URL,
  <%_ } _%>
  routes
})
