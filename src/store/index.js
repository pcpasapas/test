import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state() {
        return {
            boitierchoisistore: "",
            alimchoisistore: "",
            processeurchoisistore: "",
            ssdchoisistore: "",
            cartemerechoisistore: "",
            prixtotalstore: 0,
        }
    },
    mutations: {
        UPDATE_BOITIER(state, payload) {
            state.boitierchoisistore = payload
        },
        UPDATE_ALIM(state, payload) {
            state.alimchoisistore = payload
        },
        UPDATE_PROCESSEUR(state, payload) {
            state.processeurchoisistore = payload
        },
        UPDATE_SSD(state, payload) {
            state.ssdchoisistore = payload
        },
        UPDATE_CARTE_MERE(state, payload) {
            state.cartemerechoisistore = payload
        },
        UPDATE_PRIX(state, payload) {
            state.prixtotalstore += payload
        },
        EFFACER_PANIER(state) {
            state.boitierchoisistore = "",
                state.cartemerechoisistore = "",
                state.prixtotalstore = 0,
                state.processeurchoisistore = "",
                state.ssdchoisistore = "",
                state.alimchoisistore = ""
        }
    },
    actions: {


    }
})
export default store