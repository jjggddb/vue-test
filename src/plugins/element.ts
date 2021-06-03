import {
    ElLoading,
    ElRow,
    ElCol,
    ElTable,
    ElTableColumn,
    ElForm,
    ElFormItem,
    ElButton,
    ElInput,
    ElInputNumber,
    ElSelect,
    ElOption,
    ElCard,
    ElRadio,
    ElRadioButton,
    ElRadioGroup,
    ElCheckbox,
    ElCheckboxButton,
    ElCheckboxGroup,
    ElTooltip
} from 'element-plus'
import '../global/css/variables/element.scss'

export default (app :any) :void =>{
    app.use(ElLoading)
    app.use(ElRow)
    app.use(ElCol)
    app.use(ElTable)
    app.use(ElTableColumn)
    app.use(ElForm)
    app.use(ElFormItem)
    app.use(ElButton)
    app.use(ElInput)
    app.use(ElInputNumber)
    app.use(ElSelect)
    app.use(ElOption)
    app.use(ElCard)
    app.use(ElRadio)
    app.use(ElRadioButton)
    app.use(ElRadioGroup)
    app.use(ElCheckbox)
    app.use(ElCheckboxButton)
    app.use(ElCheckboxGroup)
    app.use(ElTooltip)
}

