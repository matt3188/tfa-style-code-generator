<template>
  <b-container>
    <b-columns>
      <b-column>
        <h1 class="mb-5">Add Clothing</h1>
        <form ref="form" @submit.prevent="createRecord">
          <RadioInput
            ref="input"
            :inputs="categories"
            label="Categories"
            @changed="updateCategory"
          />
          <RadioInput
            ref="input1"
            :inputs="garments"
            label="Garments"
            @changed="generateGarmentNumber"
          />
          <RadioInput
            ref="input2"
            :inputs="clubs"
            label="Clubs"
            @changed="updateClub"
          />
          <b-field label="Product Description">
            <b-input v-model="input" />
          </b-field>
          <RadioInput
            ref="input3"
            :inputs="seasons"
            label="Seasons"
            @changed="updateSeason"
          />
          <RadioInput
            ref="input4"
            :inputs="years"
            label="Years"
            @changed="updateYear"
          />
          <hr />
          <h1>Style code: {{ generateGarment }}</h1>
          <b-button
            class="mt-4"
            tag="input"
            native-type="submit"
            value="Submit"
            type="is-primary"
          />
        </form>
      </b-column>
    </b-columns>
  </b-container>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import StyleCodeService from '@/api/StyleCodeService'
import RadioInput from '@/components/RadioInput'

export default {
  name: 'AddClothing',
  data() {
    return {
      input: '',
      garmentNumber: ''
    }
  },
  components: { RadioInput },
  computed: {
    ...mapGetters(['garmentCount']),
    ...mapState({
      accessories: state => state.accessories,
      accessorySelected: state => state.selections.accessorySelected,
      categories: state => state.categories,
      categorySelected: state => state.selections.categorySelected,
      clubs: state => state.clubs,
      clubSelected: state => state.selections.clubSelected,
      garments: state => state.garments,
      garmentSelected: state => state.selections.garmentSelected,
      seasons: state => state.seasons,
      seasonSelected: state => state.selections.seasonSelected,
      years: state => state.years,
      yearSelected: state => state.selections.yearSelected
    }),
    /**
     * Style code for Clothing
     */
    generateGarment() {
      return `TF${this.undef(this.categorySelected)}${
        this.garmentNumber
      }${this.undef(this.clubSelected)}${this.description}${this.undef(
        this.seasonSelected
      )}${this.undef(this.yearSelected)}`
    },
    /**
     * Transforms the users input value for
     * both Clothing and Accessory Style codes
     */
    description() {
      if (this.input) {
        return `-${this.input.replace(/\s+/g, '_').toUpperCase()}-`
      }
      return '-'
    }
  },
  methods: {
    ...mapActions([
      'emptySelections',
      'getAll',
      'updateCategory',
      'updateClub',
      'updateGarment',
      'updateSeason',
      'updateYear'
    ]),
    /**
     * Check value exists, return value or dash
     */
    undef(value) {
      if (typeof value.value !== 'undefined') {
        return value.value
      } else {
        return ' - '
      }
    },
    /**
     * POST to API
     */
    createRecord() {
      let payload = {
        category: this.categorySelected.name,
        club: this.clubSelected.name,
        description: this.input,
        garment: this.garmentSelected.name,
        season: this.seasonSelected.name,
        styleCode: this.generateGarment,
        year: this.yearSelected.name
      }

      StyleCodeService.create(payload).then(res => {
        console.log(res)
        this.success()
      })
    },
    generateGarmentNumber($event) {
      let num = this.garmentCount($event.name) + 1
      const styleNumber = num.toLocaleString(undefined, {
        useGrouping: false,
        minimumIntegerDigits: 3
      })
      this.garmentNumber = `${$event.value}${styleNumber}`
      return this.updateGarment($event)
    },
    randomNumber() {
      return Math.floor(Math.random() * (999 - 100) + 100)
    },
    success() {
      this.$buefy.toast.open({
        message: 'Something happened correctly!',
        type: 'is-success'
      })
      this.$refs.input.resetModel()
      this.$refs.input1.resetModel()
      this.$refs.input2.resetModel()
      this.$refs.input3.resetModel()
      this.$refs.input4.resetModel()
      this.input = ''
      this.garmentNumber = ''
      this.getAll()
      this.emptySelections()
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 25px;
}
</style>
