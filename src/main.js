import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/base.scss' //清除浏览器默认样式
import '@/assets/css/common.scss' //共同样式
import Vcomp from './components/index' //封装的components组件
import { fontSize } from '@/assets/js/font.js' //字体大小适配
import '@/assets/js/flexible-dashboard.js' //屏幕自适应
import * as echarts from 'echarts' //echarts图表

Vue.config.productionTip = false
Vue.prototype.$fontSize = fontSize
Vue.prototype.$echarts = echarts

Vue.use(Vcomp)

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')