import * as types from './mutation-types'

export const mutations = {
  [types.SET_ACCESSORY](state, payload) {
    state.selections.accessorySelected = payload
  },
  [types.SET_CATEGORY](state, payload) {
    state.selections.categorySelected = payload
  },
  [types.SET_GARMENT](state, payload) {
    state.selections.garmentSelected = payload
  },
  [types.SET_SEASON](state, payload) {
    state.selections.seasonSelected = payload
  },
  [types.SET_CLUB](state, payload) {
    state.selections.clubSelected = payload
  },
  [types.SET_YEAR](state, payload) {
    state.selections.yearSelected = payload
  },
  [types.EMPTY_SELECTIONS](state) {
    state.selections = {}
  }
}
