import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import '../views/home.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [{
    path: '/',
    // redirect: '/login',
    component: () =>
        import('../views/home.vue')
}];

const route = new VueRouter({
    routes
});

/** 全局导航守卫 */
/* 前置导航守卫 */
route.beforeEach((to, from, next) => {
    // do something before next route
    next()
});

/* 后置导航守卫 */
route.afterEach((to, from) => {
    // do something after route
});

export default route;