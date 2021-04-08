// import StyleCodeService from "@/services/StyleCodeService";

export const actions = {
  updateAccessory({ commit }, payload) {
    commit('SET_ACCESSORY', payload)
  },
  updateCategory({ commit }, payload) {
    commit('SET_CATEGORY', payload)
  },
  updateGarment({ commit }, payload) {
    commit('SET_GARMENT', payload)
  },
  updateSeason({ commit }, payload) {
    commit('SET_SEASON', payload)
  },
  updateClub({ commit }, payload) {
    commit('SET_CLUB', payload)
  },
  updateYear({ commit }, payload) {
    commit('SET_YEAR', payload)
  },
  emptySelections({ commit }) {
    commit('EMPTY_SELECTIONS')
  }
}
