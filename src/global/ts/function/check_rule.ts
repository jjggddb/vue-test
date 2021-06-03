import store from '../../../store'

export default function (rule :string[]) :boolean {
    //let rules = store.state.user.rules
    const rules :string[] = []
    if (rule.length === 0) return true
    else return rule.some(rule => rules.includes(rule))
}
