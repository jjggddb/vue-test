// import { open } from './mixin/dialog'
// import deepCopy from './function/deepCopy'
import transform from './function/transform'
import extend from './function/extend'
// import verify from './common/verify'
// import checkRule from './function/check_rule'
// import storage from './common/storage'
// import messages from './common/message'

// import elementResizeDetector from 'element-resize-detector'
// import autoTableHeight from './table/autoTableHeight'
// import { apiPost, checkCode } from './common/http'

export default (app :any) :void => {
    app.config.globalProperties.$transform  = transform
    app.config.globalProperties.$extend  = extend
}
