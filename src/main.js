import { createApp } from 'vue'
import router from '@/router'
import 'ant-design-vue/dist/antd.min.css' // TODO 目前无法正确按需引入样式，先采用全局引入
import App from './App.vue'

createApp(App).use(router).mount('#app')
