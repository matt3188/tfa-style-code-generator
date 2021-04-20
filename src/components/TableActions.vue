<template>
  <div class="buttons">
    <b-button
      type="is-danger"
      icon-right="delete"
      @click="confirmCustomDelete(slotProps.row)"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import StyleCodeService from '@/api/StyleCodeService'

export default {
  name: 'TableActions',
  props: {
    slotProps: Object
  },
  methods: {
    ...mapActions(['getAll']),
    confirmCustomDelete($event) {
      this.$buefy.dialog.confirm({
        title: 'Deleting item',
        message: `Are you sure you want to <b>delete</b> ${$event.styleCode}? This action cannot be undone.`,
        confirmText: 'Delete',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => this.deleteItem($event)
      })
    },
    deleteItem($event) {
      StyleCodeService.delete($event.id).then(() => {
        this.$buefy.toast.open({
          message: `${$event.styleCode} deleted`,
          type: 'is-success'
        })
        this.getAll()
      })
    }
  }
}
</script>
