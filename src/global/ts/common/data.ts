/** ************************************************ 数据处理 ************************************************ **/

import deepCopy from '../function/deepCopy'
import { getMonth, getDay } from '../function/dateTime'
import { isArray, isExternal } from './verify'

export const formatFloat = (value) => {
    let n = parseFloat(value)
    if (isNaN(n)) {
        return 0.00
    } else {
        return Math.round(n * 100) / 100
    }
}

export const formatFixed = (value) => {
    let n = parseFloat(value)
    if (isNaN(n)) {
        return 0.00
    } else {
        return n.toFixed(2)
    }
}

export const random = () => {
    let random = Math.ceil(Math.random() * 900) + 100
    return random < 1000 ? random : 999
}

/**
 * 生产订单号
 */
export const formNo = () => {
    let now = new Date()
    let time = now.getTime().toString().substring(5)
    let rand = random()
    return now.getFullYear().toString() + getMonth(now.getTime()) + getDay(now.getTime()) + time + rand
}

export const batchNo = () => {
    let no = formNo()
    return no.substring(2)
}

/**
 * 字段赋值
 * @param form
 * @param data
 * @param need
 * @returns {*}
 */
export const setField = (form, data, need) => {
    if (!need) need = deepCopy(form)
    let k
    for (k in need) {
        if (need.hasOwnProperty(k)) form[k] = (['undefined', ' - ', '-'].indexOf(data[k]) !== -1) ? need[k] : data[k]
    }
    return form
}

/**
 * 过滤属性生成一个新对象
 * @param data
 * @param need
 * @returns {boolean|*}
 */
export const generateField = (data, need) => {
    if (!data && (!need || need.length <= 0)) return false
    let obj = {}
    need.forEach((key) => {
        if (data.hasOwnProperty(key)) obj[key] = data[key]
    })
    return obj
}

/**
 * 清除字段
 * @param form
 * @param need
 * @returns {*}
 */
export const clearField = (form, need) => {
    if (!need) need = deepCopy(form)
    let k
    for (k in need) {
        if (need.hasOwnProperty(k)) form[k] = ''
    }
    return form
}

/**
 * 删除为null字段
 * @param form
 * @param need
 * @returns {*}
 */
export const delField = (form, need) => {
    if (!need) need = deepCopy(form)
    for (let k in need) {
        if (k !== 'id' && need.hasOwnProperty(k) && need[k] === null) delete form[k]
    }
    return form
}

/***
 * 过滤数组对象中的某个特定字段的对象下标
 * @param { Array } list 过滤数组
 * @param { String } key 查找字段的键
 * @param { String } value 查找字段的值
 * @return { number } 返回过滤结果下标
 * */
export function filterField(list = [], key, value) {
    let i = null
    list.map((item, index) => {
        if (item.hasOwnProperty(key) && item[key] === value) i = index
        return item
    })
    return i
}

/**
 * 删除目标表单不存在的字段
 * @param { object } form 实际表单
 * @param { object } target 目标表单
 * @returns { object }
 */
export const delAbsentField = (form, target) => {
    let keys = []
    let obj = deepCopy(form)
    for (let k in target) {
        if (target.hasOwnProperty(k)) keys.push(k)
    }
    for (let k in obj) {
        if (obj.hasOwnProperty(k) && !keys.includes(k)) delete obj[k]
    }
    return obj
}

/**
 * 获取对象的第一个属性
 * @param obj
 * @return {*}
 */
export const firstObj = (obj) => {
    for (let k in obj) {
        if (obj.hasOwnProperty(k)) return obj[k]
    }
}

/**
 * 转换为小数
 * @param value
 * @param point
 * @param float
 * @return {(string | number)|string}
 */
export const toDecimal = (value, point, float) => {
    if (isNaN(value)) {
        return '0.00'
    }
    if (!point) point = 2
    let divi = Math.pow(10, point)
    value = (Math.round(value * divi) / divi).toFixed(point)
    if (float === 1) value = parseFloat(value)
    return value
}

/**
 * 遍历两个数组将参照数组中的某个键值赋予原目标数组对应键
 * @param { array }  target 原目标数组
 * @param { array }  refer 参照数组
 * @param { string }  key 要取值的键
 * @param { string }  prop 判断满足条件的字段
 * @return { array }  修改后的新数组
 * **/
export const doubleArrayAssignData = (target = [], refer = [], key, prop = 'unicode') => {
    if (isArray(target) && isArray(refer)) {
        refer.map(i1 => {
            target.map(i2 => {
                if (i1[prop] === i2[prop]) i2[key] = i1[key]
                return i2
            })
            return i1
        })
    } else {
        console.warn('doubleArrayAssignData() 必须传两个数组')
    }
    return target
}

export const interceptHttp = (http, field = 'upload', split = '/') => {
    if (!isExternal(http)) return console.warn('interceptHttp() 请输入合法的http地址')
    let src = deepCopy(http)
    src = src.split(split)
    let index = src.indexOf(field)
    src = src.splice(index)
    src = src.join(split)
    return src
}

/**
 * 数据叠加
 * @param arr
 * @return {number}
 */
export const plus = (arr) => {
    let total = 0
    for (let v of arr) {
        total = toDecimal(total, 2, 1) + toDecimal(v, 2, 1)
    }
    return toDecimal(total, 2)
}

/**
 * 数据相减
 * @param arr
 * @param total
 * @return {number}
 */
export const minus = (arr, total) => {
    for (let v of arr) {
        total = toDecimal(total, 2, 1) - toDecimal(v, 2, 1)
    }
    return toDecimal(total, 2)
}