import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sideBarOpen: false,
        selectedOption: {},
        selectedOption2: {},
        selectedOptionFlows: {}
    },
    getters: {
        sideBarOpen: state => {
            return state.sideBarOpen
        }
    },
    mutations: {
        toggleSidebar(state) {
            state.sideBarOpen = !state.sideBarOpen
        },
        setSelectedOption(state, option) {
            state.selectedOption = option;
        },
        setSelectedOption2(state, option) {
            state.selectedOption2 = option;
        },
        selectedOptionFlow(state, option) {
            state.selectedOptionFlows = option;
        }
    },
    actions: {
        toggleSidebar(context) {
            context.commit('toggleSidebar')
        }
    }
})
