import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import {routes} from "./router/routes";

import axios from "axios";
Vue.prototype.$http = axios; // 导入axios

Vue.config.productionTip = false;

// 调用 Element-UI 框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, {size: 'small', zIndex: 3000});

// 初始化自定义滚动条
import GeminiScrollbar from 'vue-gemini-scrollbar'
Vue.use(GeminiScrollbar);

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import './../static/css/custom-global.css'
import './../static/css/custom-color.css'
import './../static/css/custom-button.css'
import 'animate.css'

// 注册全局公共组件
import Header from './components/Header';
import Sidebar from './components/Sidebar';
Vue.component("header-view", Header);
Vue.component("sidebar-view", Sidebar);


// 配置路由
const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
});
