import Vue from 'vue'

export const state = {
    typeLable: null,
    typeSnotify: null,
    message: null
};

export const mutations = {
    success(state, message) {
        state.typeSnotify = 'success';
        state.typeLable = 'alert-success';
        state.message = message;
        Vue.prototype.$snotify.success(message)
    },
    error(state, message) {
        state.typeSnotify = 'error';
        state.typeLable = 'alert-danger';
        state.message = message;
        Vue.prototype.$snotify.error(message)
    },
    clear(state) {
        state.typeSnotify = null;
        state.typeLable = null;
        state.message = null;
    }
};

export const actions = {
    success({ commit }, message) {
        commit('success', message);
    },
    error({ commit }, message) {
        commit('error', message);
    },
    clear({ commit }) {
        commit('clear');
    }
};
