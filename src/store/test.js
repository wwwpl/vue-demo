import API from '@/api/api'

const state = {}

const actions = {
  getTest ({dispatch, commit, state}) {
    return API({url: '/', param: {}})
  }
}

const mutations = {}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
