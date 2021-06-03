import {useI18n} from "vue-i18n";

/**
 * 语言包转译
 * @param message
 * @returns {string}
 */
export default function (message = '') :string {
    const {t,te} = useI18n()
    let result = ''
    const magArray :string[] = message.split(' ')
    for (const v of magArray) {
        if (v) {
            if (te(v)) {
                result += t(v)
            } else {
                result += v
            }
        }
    }
    return result
}
