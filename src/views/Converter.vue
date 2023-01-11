<template>
  <div class="converter">
    <div class="converter__body">
      <div class="converter__title">
        Конвертер валют
      </div>
      <div class="converter__cards">
        <converter-card>
          <p class="converter__cards-title">У меня есть</p>
          <div class="converter__row">
            <ui-select
                v-model="haveValue"
                height="40px"
                width="100%"
                truckBy="CharCode"
                :options="currenciesOptions"
                @change="convert"
            ></ui-select>
            <ui-input
                v-model="currencyHave"
                width="100%"
                height="40px"
                placeholder="Сумма"
                type="number"
                @change="convert"
            ></ui-input>
          </div>
        </converter-card>
        <img @click="viceVersa()"
             src="@/assets/images/svg/arrow-image.svg"
             :class="['converter__cards-change', { rotate: rotate }]"
        >
        <converter-card>
          <p class="converter__cards-title">Мне надо</p>
          <div class="converter__row">
            <ui-select
                v-model="needValue"
                height="40px"
                width="100%"
                truckBy="CharCode"
                :options="currenciesOptions"
                @change="convert"
            ></ui-select>
            <ui-input
                v-model="currencyNeed"
                width="100%"
                height="40px"
                placeholder="Сумма"
                type="number"
                disabled
            ></ui-input>
          </div>
        </converter-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue'
import { useStore } from '../store'

import UiInput from '../components/ui/Input'
import UiSelect from '../components/ui/Select'
import ConverterCard from '../components/common/ConverterCard'

const store = useStore()

const rotate = ref(false)
const needValue = ref('')
const haveValue = ref('')
const currencyHave = ref('')
const currencyNeed = ref('')

const currenciesOptions = computed(() => {
  return Object.values(store.currencies)
})
needValue.value = currenciesOptions.value.find(val => val.NumCode === '840')
haveValue.value = currenciesOptions.value.find(val => val.NumCode === '051')

const viceVersa = () => {
  rotate.value = !rotate.value
  if (rotate.value) {
    const copyValue = needValue.value
    needValue.value = haveValue.value
    haveValue.value = copyValue
  } else {
    const copyValue = haveValue.value
    haveValue.value = needValue.value
    needValue.value = copyValue
  }

  convert()
}

const convert = () => {
  currencyNeed.value = needValue.value.Value / (+haveValue.value.Value / +currencyHave.value)
}

</script>


<style scoped lang="scss">
@import "../assets/styles/views/converter";
</style>
