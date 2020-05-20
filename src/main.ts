import 'babel-polyfill';
import Vue from 'vue';
import store from './store';
import router from './router';
import i18n from './lang';
import view from './views/index.vue';
import './ui-frame';
import {
    Message
} from 'element-ui';
import lang from './lang';
Vue.config.productionTip = false;
Vue.config.performance = true;
Vue.config.errorHandler = (error, vm, info) => {
    const msg: string = i18n.t(`${error}`).toString();

    Message.error(msg);
};
Vue.config.warnHandler = (msg, vm, trace) => {
    console.error(msg);
};

new Vue({
    router,
    store,
    i18n,
    render: h => h(view),
}).$mount('#app');