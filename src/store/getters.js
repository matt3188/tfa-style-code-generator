export const getters = {
  /**
   * Get all the Garments
   * @param {Array} state
   * @returns {Array}
   */
  garments: state => {
    return state.all.filter(x => x.garment)
  },
  /**
   * Get all the Accessories
   * @param {Array} state
   * @returns {Array}
   */
  accessories: state => {
    return state.all.filter(x => x.accessory)
  },
  /**
   * Number of existing Garments in DB
   *
   * @param {Array} state
   * @param {Array} getters
   * @returns {Number}
   */

  garmentCount: (state, getters) => name => {
    return getters.garments.filter(garment => garment.garment == name).length
  },
  /**
   * Number of existing Accessories in DB
   *
   * @param {Array} state
   * @param {Array} getters
   * @returns {Number}
   */
  accessoryCount: (state, getters) => name => {
    return getters.accessories.filter(accessory => accessory.accessory == name)
      .length
  }
}
