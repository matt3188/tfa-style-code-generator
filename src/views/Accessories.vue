<template>
  <b-container>
    <b-columns>
      <b-column>
        <Table
          :columnHeadings="columns"
          :data="accessories"
          :loading="!accessories"
        >
          <template v-slot:actions="slotProps">
            <TableActions :slotProps="slotProps" />
          </template>
        </Table>
      </b-column>
    </b-columns>
  </b-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Table from '@/components/Table'
import TableActions from '@/components/TableActions'

export default {
  name: 'Accessories',
  components: { TableActions, Table },
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
