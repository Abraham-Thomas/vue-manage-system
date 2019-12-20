import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入elementui
import ElementUI from 'element-ui'
// 单独引入样式文件
import 'element-ui/lib/theme-chalk/index.css'

// 执行elementui，后面可以传入一个配置对象
Vue.use(ElementUI, { size: 'small', zIndex: 3000 })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
