<template>
  <div class="exchange">
    <div class="exchange__body">
      <div class="exchange__title">Список валют <span>(РУБ.)</span></div>
      <div class="exchange__body-row">
        <div class="exchange__body-search">
          <ui-input
              v-model="searchValue"
              width="100%"
              height="40px"
              placeholder="Поиск"
          ></ui-input>
        </div>
        <div class="exchange__body-filters">
          <div class="exchange__body-filters_header">
            <span>Наименование</span>
            <span>Валюта</span>
            <span class="filters-header__item">Текуший</span>
            <span>Предыдуший</span>
          </div>
          <exchange-card v-for="(item, key) in currencies" :item="item" :key="key" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import { useStore } from '../store'
import ExchangeCard from './common/ExchangeCard'
import UiInput from './ui/Input'

const store = useStore()
const searchValue = ref('')

const currencies = computed(() => {

  return Object.values(store.currencies).filter((val) =>
      val.CharCode.toLowerCase().includes(searchValue.value.toLowerCase()) ||
      val.Name.toLowerCase().includes(searchValue.value.toLowerCase()))
})

</script>

<style scoped lang="scss">
@import "../assets/styles/components/exchange";
</style>
