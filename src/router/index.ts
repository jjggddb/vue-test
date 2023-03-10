import { createRouter, createWebHashHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: defineAsyncComponent(() => import('../views/index.vue')),
            meta: {
                title: '้ฆ้กต',
            },
        },
          {
            path: '/my',
            component: defineAsyncComponent(() => import('../views/my.vue')),
            meta: {
                title: 'ๆ็',
            },
        },
    ]
})
export default router