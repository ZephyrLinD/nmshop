import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './multations'
import actions from './action'

Vue.use(Vuex);

const state = {
    username: '',
    cartCount: 0
}

export default new Vuex.Store({
    state,
    mutations,
    actions
});