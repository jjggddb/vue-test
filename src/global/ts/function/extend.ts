export default function<T> (...args :Array<T>) :T {
    const length = args.length
    let target = args[0] || {} as T
    if (typeof target !== 'object' && typeof target !== 'function') {
        target = {} as T
    }
    let i = 1
    if (length === 1) {
        target = args[0]
        i--
    }
    for (i; i < length; i++) {
        const source = args[i]
        for (const key in source) {
            // 使用for in会遍历对象所有的可枚举属性，包括原型。
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                switch (Object.prototype.toString.call(source[key])) {
                    case '[object Object]':
                        target[key] = Object.assign({}, target[key], source[key])
                        break
                    default:
                        target[key] = source[key]
                        break
                }
            }
        }
    }
    return target
}
