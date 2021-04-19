<template>
  <b-field :label="localLabel" grouped group-multiline>
    <b-radio-button
      :key="input.name"
      :native-value="input"
      @input="changed"
      type="is-primary"
      v-for="input in inputs"
      v-model="model"
    >
      {{ input.name }}
    </b-radio-button>
  </b-field>
</template>

<script>
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
    localLabel() {
      if (this.label.indexOf('Accessories') > -1) return 'Categories'
      return this.label
    }
  },
  methods: {
    changed($event) {
      this.$emit('changed', $event)
    },
    resetModel() {
      this.model = ''
    }
  }
}
</script>
