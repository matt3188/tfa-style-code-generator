import Vue from 'vue'
import Vuex from 'vuex'

import { state } from './state'
import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'

import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const isProd = process.env.NODE_ENV === 'production'

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  plugins: [
    createLogger({
      collapsed: true,
      logActions: !isProd,
      logMutations: !isProd
    })
  ],
  strict: !isProd
})
