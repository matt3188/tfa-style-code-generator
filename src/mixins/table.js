export const table = {
  data() {
    return {
      columns: [
        {
          field: 'styleCode',
          label: 'Style Code'
        },
        {
          field: 'club',
          label: 'Club'
        },
        {
          field: 'description',
          label: 'Description'
        },
        {
          field: 'season',
          label: 'season'
        },
        {
          field: 'year',
          label: 'year'
        }
      ]
    }
  },
  methods: {
    /**
     * Insert something into a specific index
     * @param {Array} source - Source array
     * @param {Int} index - Index to insert at
     * @param  {...any} elements - Thing to insert
     */
    insertAt(array, index, ...elements) {
      array.splice(index, 0, ...elements)
    }
  }
}
