import extend from '../../global/ts/function/extend'

export function generateFields() :any {
    const base = {
        name: '名称',
        type: '类型',
        price: '价格',
        discount: '折扣',
        sort: '排序',
        status: '状态',
        statuses: { '-1': '全部', 1: '正常', 2: '禁用', color: { 1: 'primary', 2: 'danger' }},
        unit: { yuan: '元', wan: '万', yi: '亿' },
        remark: '备注',
        created_at: '创建时间',
        updated_at: '更新时间',
        count: '数量',
        action: '操作',
        more: '更多',
        search: '搜索',
        screen: '筛选',
        total: '总计',
        opt: '选择',
        tag: '标签',
        copy: '复制',
        settlement: '结算',
        selection: '选用',
        all: '全部',
        time: '时间',
        date: '日期',
        startDate: '开始日期',
        endDate: '结束日期',
        lastMonth: '上月',
        lastWeek: '上周',
        today: '今日',
        thisMonth: '本月',
        thisWeek: '本周',
        thisYear: '今年',
        content: '内容',
        forever: '永久',
        day: '天',
        selected: '已选',
    }
    // 省市区联级选择
    const region = {
        region: '所在地区', // 表单展示字段
        // 以下为实际交互字段
        province_id: '所在地区',
        city_id: '所在地区',
        district_id: '所在地区',
    } as Object
    const title = {
        notify: {
            operation: '执行结果',
            sweet_tip: '温馨提示',
            message: '消息通知'
        }
    }
    const week = {
        sun: '星期日',
        mon: '星期一',
        tues: '星期二',
        wed: '星期三',
        thur: '星期四',
        fri: '星期五',
        sat: '星期六'
    }
    const app = {
        copyright: '',
        consultation: '免费咨询热线：',
        about_link: {

        }
    }
    return extend(base, region, title, week, app)
}

export function generateBaseRules() :boolean {
    return false
}

// 初始通用字段
export const fields :any = generateFields()

/**
 * 生成需要的基础词典
 * @param need
 * @returns {{}}
 */
export function generateBaseFields(need :string[]) :any {
    let base :any = {}
    for (const v of need) {
        base[v] = fields[v]
    }
    return base
}

/**
 * 生成 placeholder
 * @returns {{}}
 */
export function generatePlaceholders(fields :any, iL :string[] = [], sL :string[] = []) :any {
    let placeholder :any = {}
    for (const k in fields) {
        if (fields.hasOwnProperty(k) && iL.indexOf(k) > -1) placeholder[k] = '请输入' + fields[k]
        else if (fields.hasOwnProperty(k) && sL.indexOf(k) > -1) placeholder[k] = '请选择' + fields[k]
    }
    return placeholder
}

/**
 * 必填规则
 * @param field
 * @param type
 * @returns {string}
 */
export const requiredRule = (field :string, type :number = 1) :string => {
    switch (type) {
        default:
            return field + '不能为空'
        case 1:
            return '请填写' + field
        case 2:
            return '请选择' + field
    }
}

/**
 * 是否存在验证
 * @param field
 * @returns {string}
 */
export const existsRule = (field :string) :string => {
    return field + ' 不存在'
}

/**
 * 长度规则
 * @param field
 * @param length
 * @param type
 * @returns {string}
 */
export const lengthRule = (field :string, length :number, type :number = 1) :string => {
    switch (type) {
        default:
            return field + '不能超过' + length + '个字符'
        case 2:
            return field + '不能小于' + length + '个字符'
    }
}

/**
 * 长度规则
 * @param { string } field 语言包字段
 * @param { string } main 自定义语言
 * @param { number } type 返回模板类型
 * @returns {string}
 */
export const formatRule = (field :string, main :string = '格式错误', type :number = 1) :string => {
    switch (type) {
        default:
            return field + main
        case 2:
            return field + '不能输入' + main
    }
}

/**
 * 一致性规则
 * @param { string } fieldF 第一语言包字段
 * @param { string } fieldS 第二语言包字段
 * @param { number } type 返回模板类型
 * @returns {string}
 */
export const equalRule = (fieldF :string, fieldS :string, type :number = 1) :string => {
    switch (type) {
        default:
            return `${fieldF}与${fieldS}不一致`
    }
}

// 生成placeholder
const inputList :string[] = ['remark', 'content']
const selectList :string[] = ['time', 'date', 'startDate', 'endDate']
export const placeholder :any = generatePlaceholders(fields, inputList, selectList)

// 生成最终语言包
export function generateLocales() :any {
    let base = generateFields()
    base.placeholder = placeholder
    return base
}

export const locales = generateLocales()

export default {
    locales,
    generateBaseFields,
    generatePlaceholders,
    requiredRule,
    lengthRule,
    formatRule
}
