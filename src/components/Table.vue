<template>
  <b-table :data="data" v-bind="$props">
    <template v-for="col in columnHeadings">
      <b-table-column
        v-slot="props"
        :key="col.field"
        :field="col.field"
        :label="col.label"
        sortable
      >
        <template>{{ props.row[col.field] }}</template>
      </b-table-column>
    </template>
    <b-table-column v-slot="$props" field="actions" custom-key="actions">
      <slot name="actions" v-bind="$props" />
    </b-table-column>
  </b-table>
</template>

<script>
export default {
  name: 'Table',
  props: {
    /**
     * Table data
     */
    data: {
      type: Array,
      required: true
    },
    /**
     * Column headings
     * Not to be confused with Buefy's columns
     */
    columnHeadings: {
      type: Array,
      required: true
    },
    /**
     * Size of sort icon
     */
    sortIconSize: {
      type: String,
      default: 'is-default'
    },
    /**
     * Whether table is striped
     */
    striped: {
      type: Boolean,
      deault: true
    },
    /**
     * Rows are highlighted when hovering
     */
    hoverable: {
      type: Boolean,
      deault: true
    },
    /**
     * Sets the default sort column and order
     */
    defaultSort: String,
    /**
     * Sets the default sort column direction on the first click
     */
    defaultSortDirection: {
      type: String,
      default: 'asc'
    },
    /**
     * Use a unique key of your data Object
     * when use detailed or opened detailed.
     */
    detailKey: String
  }
}
</script>
