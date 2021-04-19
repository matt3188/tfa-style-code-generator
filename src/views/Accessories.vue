<template>
  <b-container>
    <b-columns>
      <b-column>
        <b-button
          class="mt-4 mb-4"
          tag="router-link"
          to="/accessories/add"
          type="is-link"
        >
          Add Accessory
        </b-button>
        <b-table class="mb-6" :data="accessories" :columns="columns"></b-table>
      </b-column>
    </b-columns>
  </b-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Accessories',
  data() {
    return {
      columns: [
        {
          field: 'styleCode',
          label: 'Style Code'
        },
        {
          field: 'accessory',
          label: 'Accessory'
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
  computed: {
    ...mapState(['all']),
    ...mapGetters(['accessories'])
  }
}
</script>
