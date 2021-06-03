import {createI18n} from "vue-i18n";

import zhLocale from 'element-plus/lib/locale/lang/zh-cn'
// import enLocale from 'element-ui/lib/locale/lang/en'
// import twLocale from 'element-ui/lib/locale/lang/zh-tw'
// 语言包
import cn from '../locales/cn'
// import en from '../src/locales/cn/en'
// import tw from '../src/locales/cn/tw'



const i18n = createI18n({
    // locale: process.env.VUE_APP_I18N_LOCALE || 'en',
    locale: 'cn',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
    messages: {
        'cn': Object.assign(cn, zhLocale)
        // 'en': Object.assign(en, enLocale),
        // 'tw': Object.assign(tw, twLocale)
    }
})

export default i18n