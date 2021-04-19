<template>
  <b-container>
    <b-columns>
      <b-column>
        <RadioInput
          ref="ainput"
          :inputs="accessories"
          label="Accessories"
          @changed="generateAccessoryNumber"
        />
        <RadioInput
          ref="ainput1"
          :inputs="clubs"
          label="Clubs"
          @changed="updateClub"
        />
        <b-field label="Product Description">
          <b-input v-model="input" />
        </b-field>
        <RadioInput
          ref="ainput2"
          :inputs="seasons"
          label="Seasons"
          @changed="updateSeason"
        />
        <RadioInput
          ref="ainput3"
          :inputs="years"
          label="Years"
          @changed="updateYear"
        />
        <hr />
        <h1>Style code: {{ generateAccesory }}</h1>
        <b-button @click="createRecord()" type="is-primary"> Submit </b-button>
      </b-column>
    </b-columns>
  </b-container>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import StyleCodeService from '@/api/StyleCodeService'
import RadioInput from '@/components/RadioInput'

export default {
  name: 'Home',
  data() {
    return {
      input: '',
      accessoryNumber: ''
    }
  },
  components: { RadioInput },
  computed: {
    ...mapGetters(['accessoryCount']),
    ...mapState({
      accessories: state => state.accessories,
      accessorySelected: state => state.selections.accessorySelected,
      clubs: state => state.clubs,
      clubSelected: state => state.selections.clubSelected,
      seasons: state => state.seasons,
      seasonSelected: state => state.selections.seasonSelected,
      years: state => state.years,
      yearSelected: state => state.selections.yearSelected
    }),
    /**
     * Style code for Accessories
     */
    generateAccesory() {
      return `TFACC${this.accessoryNumber}${this.undef(this.clubSelected)}${
        this.description
      }${this.undef(this.seasonSelected)}${this.undef(this.yearSelected)}`
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
      'getAll',
      'updateAccessory',
      'updateSeason',
      'updateClub',
      'updateYear',
      'emptySelections'
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
        accessory: this.accessorySelected.name,
        club: this.clubSelected.name,
        description: this.input,
        season: this.seasonSelected.name,
        styleCode: this.generateAccesory,
        year: this.yearSelected.name
      }

      StyleCodeService.create(payload).then(res => {
        console.log(res)
        this.success()
      })
    },
    generateAccessoryNumber($event) {
      let num = this.accessoryCount($event.name) + 1
      const styleNumber = num.toLocaleString(undefined, {
        useGrouping: false,
        minimumIntegerDigits: 3
      })
      this.accessoryNumber = `${$event.value}${styleNumber}`
      return this.updateAccessory($event)
    },

    success() {
      this.$buefy.toast.open({
        message: 'Something happened correctly!',
        type: 'is-success'
      })
      this.$refs.ainput.resetModel()
      this.$refs.ainput1.resetModel()
      this.$refs.ainput2.resetModel()
      this.$refs.ainput3.resetModel()
      this.input = ''
      this.accessoryNumber = ''
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
