import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
];

if(process.env.NODE_ENV === 'development') {
  routes.push(...[
    {
      path: '/2048',
      name: '2048',
      component: () => import('../../../2048/src/App.vue'),
    },
    {
      path: '/calculator',
      name: 'Calculator',
      component: () => import('../../../calculator/src/App.vue'),
    },
    {
      path: '/comparison',
      name: 'Comparison',
      component: () => import('../../../comparison/src/App.vue'),
    },
    {
      path: '/docx-template',
      name: 'DocxTemplate',
      component: () => import('../../../docx-template/src/App.vue'),
    },
    {
      path: '/wishes',
      name: 'Wishes',
      component: () => import('../../../wishes/src/App.vue'),
    },
  ]);
};


export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
