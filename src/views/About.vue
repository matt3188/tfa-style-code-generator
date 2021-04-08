<template>
  <div>
    <b-table :data="all" :columns="columns"></b-table>
  </div>
</template>

<script>
import StyleCodeService from '@/api/StyleCodeService'

export default {
  name: 'About',
  data() {
    return {
      all: [],
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
  async mounted() {
    this.all = await StyleCodeService.getAll().then(res => {
      return res.data
    })
  }
}
</script>
