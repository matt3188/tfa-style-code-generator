<template>
  <b-container>
    <!-- <b-button @click="deleteAll">Delete everything</b-button> -->
    <b-columns>
      <b-tabs v-model="activeTab">
        <b-tab-item label="Clothing">
          <b-column v-if="!submitted">
            <RadioInput
              :inputs="categories"
              label="Categories"
              @changed="updateCategory"
            />
            <RadioInput
              :inputs="garments"
              label="Garments"
              @changed="generateGarmentNumber"
            />
            <RadioInput :inputs="clubs" label="Clubs" @changed="updateClub" />
            <b-field label="Product Description">
              <b-input v-model="input" />
            </b-field>
            <RadioInput
              :inputs="seasons"
              label="Seasons"
              @changed="updateSeason"
            />
            <RadioInput :inputs="years" label="Years" @changed="updateYear" />
            <hr />
            <h1>Style code: {{ generateGarment }}</h1>
            <b-button
              class="mt-4"
              @click="createRecord('clothing')"
              type="is-primary"
            >
              Submit
            </b-button>
          </b-column>
          <b-column v-else> Submitted </b-column>
        </b-tab-item>

        <b-tab-item label="Accesories">
          <b-column v-if="!submitted">
            <RadioInput
              :inputs="accessories"
              label="Accessories"
              @changed="updateAccessory"
            />
            <RadioInput :inputs="clubs" label="Clubs" @changed="updateClub" />
            <b-field label="Product Description">
              <b-input v-model="input" />
            </b-field>
            <RadioInput
              :inputs="seasons"
              label="Seasons"
              @changed="updateSeason"
            />
            <RadioInput :inputs="years" label="Years" @changed="updateYear" />
            <hr />
            <h1>Style code: {{ generateAccesory }}</h1>
            <b-button @click="createRecord()" type="is-primary">
              Submit
            </b-button>
          </b-column>
          <b-column v-else> Submitted </b-column>
        </b-tab-item>
      </b-tabs>
    </b-columns>
  </b-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import StyleCodeService from '@/api/StyleCodeService'
import RadioInput from '@/components/RadioInput'

export default {
  name: 'Home',
  data() {
    return {
      all: [],
      input: '',
      activeTab: 0,
      submitted: false
    }
  },
  components: { RadioInput },
  computed: {
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
      return `TF${this.undef(this.categorySelected)}${this.undef(
        this.garmentSelected
      )}${this.undef(this.clubSelected)}${this.description}${this.undef(
        this.seasonSelected
      )}${this.undef(this.yearSelected)}`
    },
    /**
     * Style code for Accessories
     */
    generateAccesory() {
      return `ACC${this.undef(this.accessorySelected)}${this.undef(
        this.clubSelected
      )}${this.description}${this.undef(this.seasonSelected)}${this.undef(
        this.yearSelected
      )}`
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
      'updateAccessory',
      'updateCategory',
      'updateGarment',
      'updateSeason',
      'updateClub',
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
    createRecord(type) {
      let payload = {}
      if (type === 'clothing') {
        payload = {
          category: this.categorySelected.name,
          club: this.clubSelected.name,
          description: this.input,
          garment: this.garmentSelected.name,
          season: this.seasonSelected.name,
          styleCode: this.generateGarment,
          year: this.yearSelected.name
        }
      } else {
        payload = {
          accessory: this.accessorySelected.name,
          club: this.clubSelected.name,
          description: this.input,
          garment: this.garmentSelected.name,
          season: this.seasonSelected.name,
          styleCode: this.generateAccesory,
          year: this.yearSelected.name
        }
      }
      StyleCodeService.create(payload).then(res => {
        console.log(res)
        this.submitted = true
        setTimeout(() => {
          this.submitted = false
        }, 2000)
      })
    },
    deleteAll() {
      StyleCodeService.deleteAll()
    },
    generateGarmentNumber($event) {
      this.updateGarment(`${$event}-${this.randomNumber()}`)
    },
    randomNumber() {
      return Math.floor(Math.random() * (999 - 100) + 100)
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 25px;
}
</style>
