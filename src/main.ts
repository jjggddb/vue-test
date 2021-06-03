import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './plugins/i18n' // 引入语言包
import installElementPlus from '@/plugins/element.ts' //  引入常用elementUI组件
import installGlobalFunc from '@/global/ts/global'    //  引入常用方法

const app = createApp(App)

app.config.globalProperties.$ELEMENT = { size: 'mini', zIndex: 3000 }
// app.config.globalProperties.$ELEMENT = { size: Cookies.get('size') || 'mini', zIndex: 3000 }
installElementPlus(app)
installGlobalFunc(app)

app.use(store)
app.use(router)
app.use(i18n)
app.mount('#app')
