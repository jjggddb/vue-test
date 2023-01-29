/*
 * @Author: guliangbin
 * @Date: 2022-06-15 16:49:39
 * @LastEditors: guliangbin
 * @LastEditTime: 2022-06-16 11:40:15
 * @Description: 
 */
import { createApp} from 'vue'
import App from './App.vue'

// 引入公共的样式文件
// import './assets/style/common.less'; 

// 挂载路由
import router from './router'

// vue状态管理
import store from './store'

// ele-plus UI库
import ElementPlus from 'element-plus'
//  ele ui样式
import 'element-plus/dist/index.css'

// 引入全局自定义指令
import directive from "./common/directive"; 

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(store);
app.use(directive);
app.mount('#app')