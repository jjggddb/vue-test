import { checkDate } from '../common/verify'

const oneDayTimestamp = 8.64e+7

/**
 * 获取日期格式
 * @param timestamp 时间戳
 * @param split 分隔符
 * @return {*}
 */
export const formatDate = (timestamp :any = '', split = '-') : any => {
    if (!timestamp) timestamp = new Date().getTime()
    else if (timestamp && isNaN(timestamp)) timestamp = timestamp.replace(/-/g, '/')
    const date: Date = new Date(timestamp)
    const w: string = String(date.getDay() || 7)
    const W: string = String(getWeek(date.getDay()))
    const Y: string = String(date.getFullYear())
    const M: string = String((date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1))
    const D: string = String((date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()))
    const h: string = String((date.getHours() < 10 ? '0' + date.getHours() : date.getHours()))
    const m: string = String((date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()))
    const s: string = String((date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()))
    const time: string = `${Y}${split}${M}${split}${D} ${h}:${m}:${s}`
    const day: string = `${Y}${split}${M}${split}${D}`
    return { time, day, date, W, w, Y, M, D, h, m, s }
}

export const formatTime = (timestamp: any) :string => {
    const date = formatDate(timestamp)
    return date.time
}

export const formatDay = (timestamp: any) :string => {
    if (!timestamp) timestamp = new Date().getTime()
    const date = formatDate(timestamp)
    return date.day
}

export const getYear = (timestamp :number = new Date().getTime()) :string => {
    const date = new Date(timestamp)
    return String(date.getFullYear())
}

export const getMonth = (timestamp :number = new Date().getTime()) :string => {
    const date = new Date(timestamp)
    const month = date.getMonth() + 1
    return String(month < 10 ? '0' + month : month)
}

export const getLastMonth = (timestamp :number = new Date().getTime()) :string => {
    const date = new Date(timestamp)
    const month = date.getMonth()
    return String(month < 10 ? '0' + month : month)
}

export const getNextMonth = (timestamp :number = new Date().getTime()) :string => {
    const date = new Date(timestamp)
    const month = date.getMonth() + 2
    return String(month < 10 ? '0' + month : month)
}

export const getDay = (timestamp :number = new Date().getTime()) :string => {
    const date = new Date(timestamp)
    const day = date.getDate()
    return String(day < 10 ? '0' + day : day)
}

export const getWeek = (dayOfWeek: any) :string => {
    const dayList = ['sun', 'mon', 'tues', 'wed', 'thur', 'fri', 'sat']
    return String(dayList[parseInt(dayOfWeek)])
}

/**
 * 获取时间戳
 * @param date
 * @returns {*}
 */
export const getTimestamp = (date: any = '') :number => {
    if (!checkDate(date)) return Number('')
    date = new Date(date) as Date
    return Number((date).getTime())
}

export const lastMonthTimeRange = () :string[] => {
    let { Y, M } = formatDate()
    Y = getLastMonth() === '00' ? Y - 1 : Y
    const lastM = getLastMonth() === '00' ? 12 : getLastMonth()
    const start = getTimestamp(`${Y}-${lastM}-01 00:00:00`)
    const end = getTimestamp(`${Y}-${M}-01 00:00:00`) - 1000
    return [String(formatDate(start).time), String(formatDate(end).time)]
}
export const lastWeekTimeRange = () :string[] => {
    const { w, day } = formatDate()
    const start = getTimestamp(`${day} 00:00:00`) - (oneDayTimestamp * (w + 6))
    const end = getTimestamp(`${day} 23:59:59`) - (oneDayTimestamp * w)
    return [String(formatDate(start).time), String(formatDate(end).time)]
}
export const todayTimeRange = () :string[] => {
    const { day, time } = formatDate()
    const start = getTimestamp(`${day} 00:00:00`)
    const end = getTimestamp(`${time}`)
    return [String(formatDate(start).time), String(formatDate(end).time)]
}
export const thisMonthTimeRange = () :string[] => {
    const { Y, M, time } = formatDate()
    const start = getTimestamp(`${Y}-${M}-01 00:00:00`)
    const end = getTimestamp(`${time}`)
    return [String(formatDate(start).time), String(formatDate(end).time)]
}
export const thisWeekTimeRange = () :string[] => {
    const { w, day, time } = formatDate()
    const start = getTimestamp(`${day} 00:00:00`) - (oneDayTimestamp * (w - 1))
    const end = getTimestamp(`${time}`)
    return [String(formatDate(start).time), String(formatDate(end).time)]
}
export const thisYearTimeRange = () :string[] => {
    const { Y, time } = formatDate()
    const start = getTimestamp(`${Y}-01-01 00:00:00`)
    const end = getTimestamp(`${time}`)
    return [String(formatDate(start).time), String(formatDate(end).time)]
}
export const quickPicker = {
    lastMonthTimeRange,
    lastWeekTimeRange,
    todayTimeRange,
    thisMonthTimeRange,
    thisWeekTimeRange,
    thisYearTimeRange
}

// export const TMap = (key) => {
//   return new Promise(function (resolve, reject) {
//     window.init = function () {
//       resolve(qq) // 注意这里
//     }
//     var script = document.createElement('script')
//     script.type = 'text/javascript'
//     script.src = 'https://map.qq.com/api/js?v=2.exp&callback=init&key=' + key
//     script.onerror = reject
//     document.head.appendChild(script)
//   })
// }
