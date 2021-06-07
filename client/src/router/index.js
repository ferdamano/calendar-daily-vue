import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Events from '@/components/Events';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [{
    path: '/events',
    name: 'Events',
    component: Events,
  },
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
  },
  ],
});
