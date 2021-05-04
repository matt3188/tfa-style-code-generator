<template>
  <b-container>
    <b-columns>
      <b-column>
        <Table
          :columnHeadings="columns"
          :data="accessories"
          :loading="!accessories"
          sort-icon-size="is-small"
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
import { table } from '@/mixins/table'

export default {
  name: 'Accessories',
  components: { TableActions, Table },
  mixins: [table],
  computed: {
    ...mapState(['all']),
    ...mapGetters(['accessories'])
  },
  created() {
    this.insertAt(this.columns, 1, {
      field: 'accessory',
      label: 'Accessory'
    })
  }
}
</script>
