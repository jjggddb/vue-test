import { createRouter, createWebHashHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: defineAsyncComponent(() => import('../views/index.vue')),
            meta: {
                title: '首页',
            },
        },
          {
            path: '/my',
            component: defineAsyncComponent(() => import('../views/my.vue')),
            meta: {
                title: '我的',
            },
        },
    ]
})
export default router