import {useI18n} from "vue-i18n";
import * as $data from './data'

const {t,te} = useI18n()
/** ************************************************ 验证函数集合 ************************************************ **/

/**
 * 客户姓名长度验证
 * @param str
 * @returns {boolean}
 */
export const isName = (str: string) : boolean => {
    const reg = /^[\u4e00-\u9f5a]$/
    const arr : string[] = str.split('')
    let len = 0
    for (let i = 0; i < arr.length; i++) {
        if (reg.test(arr[i])) len += 2
        else len++
    }
    return len <= 16
}

/**
 * 身份证验证
 * @param str
 * @returns {boolean}
 */
export const isIdentity = (str: string) : boolean => {
    const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    const now = new Date().getTime()
    const brithday = new Date(str.substring(6, 10) + '-' + str.substring(10, 12) + '-' + str.substring(12, 14)).getTime()
    if (isNaN(brithday)) return false
    if (brithday > now) return false
    return reg.test(str)
}

/**
 * 电话号码验证
 * @param str
 * @returns {boolean}
 */
export const isPhone = (str: string) : boolean => {
    const reg = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|166|(17[0,1,3,5-8])|(18[0-9])|(19[1,8,9]))\d{8}$/
    return reg.test(str)
}

/**
 * QQ号码验证
 * @param str
 * @returns {boolean}
 */
export const isQQ = (str: string) : boolean => {
    const reg = /^[1-9][0-9]\d{4,}$/
    return reg.test(str)
}

/**
 * 金额验证（保留两位小数）
 * @param str
 * @returns {boolean}
 */
export const isMoney = (str: string) : boolean => {
    const reg = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/
    if (Number(str) === 0) return true
    return reg.test(str)
}

/**
 * 项目名称长度验证
 * @param str
 * @returns {boolean}
 */
export const isItem = (str: string) : boolean => {
    return str.length <= 30
}

/**
 * 备注文字长度验证
 * @param str
 * @returns {boolean}
 */
export const isRemark = (str: string) : boolean => {
    const reg = /^[\u4e00-\u9f5a]$/
    const arr : string[] = str.split('')
    let len = 0
    for (let i = 0; i < arr.length; i++) {
        if (reg.test(arr[i])) len += 2
        else len++
    }
    return len <= 100
}

/**
 * 正整数验证
 * @param value
 * @returns {boolean}
 */
export const isPositiveNumber = (value: any) :boolean => {
    const reg = /^[1-9]+[0-9]*$/
    return reg.test(value)
}

/**
 * 银行卡号验证
 * @param value
 * @returns {boolean}
 */
export const isBankNum = (value: string) :boolean => {
    const reg = /^(\d{16}|\d{19})$/
    return reg.test(value)
}

/**
 * 字符串非空格和中文验证
 * @param value
 * @returns {boolean}
 */
export const isPassword = (value: string) :boolean => {
    const reg = /^[^\u4e00-\u9fa5 ]+$/
    return reg.test(value)
}

/**
 * 判断是否日期
 * @param str
 * @returns {boolean}
 */
export const checkDate = (str:string) :boolean => {
    return isNaN(Number(str)) && !isNaN(Date.parse(str))
}

/**
 * 数组中至少有一个元素
 * @param { array } arr
 * @returns { boolean }
 */
export const atLeastOne = (arr: any[]) :boolean => {
    return isArray(arr) && arr.length > 0
}

/**
 * 判断是否是外部的链接
 * @param {string} path
 * @returns {Boolean}
 */
export const isExternal = (path: string) :boolean => {
    return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 判断是否是数组
 * @param { any } arr 需要判断的值
 * @returns { boolean }
 */
export function isArray(arr: any[]) :boolean {
    return Object.prototype.toString.call(arr) === '[object Array]'
}

/**
 * 判断是否是对象
 * @param { any } obj 需要判断的值
 * @returns { boolean }
 */
export const isObject = (obj : Object) :boolean => {
    return Object.prototype.toString.call(obj) === '[object Object]'
}

/**
 * 判断是否是字符串
 * @param { any } str 需要判断的值
 * @returns {boolean}
 */
export const isString = (str: string) :boolean => {
    return Object.prototype.toString.call(str) === '[object String]'
}

/**
 * 判断是否是数字
 * @param number
 * @return {boolean}
 */
export const isNumber = (number: number) :boolean => {
    const regPos = /^\d+(\.\d+)?$/ // 非负浮点数
    const regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/ // 负浮点数
    return regPos.test(String(number)) || regNeg.test(String(number))
}

/** ************************************************ form表单rules验证规则 ************************************************ **/

// 生成验证触发方式
const generateTrigger = (target: string, field: string) :string => {
    const key: string = target + '.validator.' + field + '.trigger'
    if (te(key)) return t(key)
    return 'blur'
}

// 验证是否必填
const generateRequired = (target: string, field: string) :boolean => {
    const key: string = target + '.validator.' + field + '.required'
    return (te(key) && t(key) === 'true')
}

// 生成验证规则
const generateValidator = (target: string, field: string, self: any) : Function | undefined | Object => {
    const prefix: string = target + '.validator.' + field
    const verify: string = target + '.verify.' + field
    if (te(prefix)) {
        const fun: string | any = te(`${prefix}.format`) ? eval(t(`${prefix}.format`)) : ''
        const list = t(prefix) as any
        let validator
        for (let k in list) {
            if (list.hasOwnProperty(k)) {
                validator = (rule: Object, value: any, callback: Function) => {
                    if ((!value && te(prefix + '.required')) && t(prefix + '.required') === 'true') return callback(new Error(t(verify + '.required')))
                    if ((value && te(prefix + '.length_lt')) && value.length <= parseInt(t(prefix + '.length_lt'))) return callback(new Error(t(verify + '.length_lt')))
                    if ((value && te(prefix + '.length_gt')) && value.length > parseInt(t(prefix + '.length_gt'))) return callback(new Error(t(verify + '.length_gt')))
                    if ((value && te(prefix + '.format')) && !(fun(value))) return callback(new Error(t(verify + '.format')))
                    // 密码改变后再次对确认密码进行验证
                    if (value && te(prefix + '.again')) self.$refs.form.validateField(t(`${prefix}.agent`))
                    // 验证确认密码与密码是否一致
                    if (te(prefix + '.equal') && value !== self.form[t(prefix + '.equal')]) return callback(new Error(t(verify + '.equal')))
                    callback()
                }
            }
        }
        return validator
    } else {
        return {}
    }
}

// 自动生成验证规则
export default function rules (target: string, form: Object, self = '') :Object {
    const rule = {} as any
    for (const k in form) {
        if (form.hasOwnProperty(k) && te(target + '.validator.' + k)) {
            rule[k] = [{
                validator: generateValidator(target, k, self),
                trigger: generateTrigger(target, k),
                required: generateRequired(target, k)
            }]
        }
    }
    return rule
}