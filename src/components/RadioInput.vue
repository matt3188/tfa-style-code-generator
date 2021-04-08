<template>
  <b-field :label="localLabel" grouped group-multiline>
    <b-radio-button
      v-model="model"
      v-for="input in inputs"
      :key="input.name"
      :native-value="input"
      type="is-primary"
      @input="changed"
    >
      {{ input.name }}
    </b-radio-button>
  </b-field>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'RadioInput',
  props: {
    label: String,
    inputs: Array
  },
  data() {
    return {
      model: ''
    }
  },
  computed: {
    ...mapState({
      selected(state) {
        if (this.label.indexOf('Categories') > -1) {
          return state.selections.categorySelected
        }
        if (this.label.indexOf('Accessories') > -1) {
          return state.selections.accessorySelected
        }
        return state.selections[
          `${this.label.toLowerCase().slice(0, -1)}Selected`
        ]
      }
    }),
    localLabel() {
      if (this.label.indexOf('Accessories') > -1) return 'Categories'
      return this.label
    }
  },
  methods: {
    ...mapActions({
      updateState(dispatch, payload) {
        if (this.label.indexOf('Categories') > -1) {
          return dispatch('updateCategory', payload)
        }
        if (this.label.indexOf('Accessories') > -1) {
          return dispatch('updateAccessory', payload)
        }
        return dispatch(`update${this.label.slice(0, -1)}`, payload)
      }
    }),
    changed($event) {
      this.updateState($event)
    }
  }
}
</script>
