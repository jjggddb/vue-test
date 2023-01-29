import  {createStore} from 'vuex';
const store = createStore({
    state: {
        isVip: true,
    },
    mutations: {
        setVipStatus(state, param) {
            state.isVip = param
        }
    },
    actions: {},
    getters: {}
})
export default store