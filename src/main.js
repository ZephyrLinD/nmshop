import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'


// 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api';
// 响应时间调整
axios.defaults.timeout = 8000;
// // 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL; 
// 接口错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data;
  let path = location.hash;
  if(res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    if(path != '#/index') {
      window.location.href = '/#/login';
    }
  } else {
    alert(res.meg);
    return Promise.reject(res);
  }
});

Vue.use(VueAxios, axios);
Vue.use(VueCookie);
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
