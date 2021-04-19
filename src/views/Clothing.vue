<template>
  <b-container>
    <b-columns>
      <b-column>
        <b-button
          class="mt-4 mb-4"
          tag="router-link"
          to="/clothing/add"
          type="is-link"
        >
          Add Clothing
        </b-button>
        <b-table class="mb-6" :data="garments" :columns="columns"></b-table>
      </b-column>
    </b-columns>
  </b-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Clothing',
  data() {
    return {
      columns: [
        {
          field: 'styleCode',
          label: 'Style Code'
        },
        {
          field: 'garment',
          label: 'Garment'
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
    ...mapGetters(['garments'])
  }
}
</script>
