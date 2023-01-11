<template>
  <div class="exchange-card card">
    <div class="card__section">
      <span class="card__text">{{ item.Name }}</span>
    </div>
    <div class="card__section">
      <span class="card__text">{{ item.CharCode }}</span>
    </div>
    <div class="card__section">
      <span class="card__text">{{ item.Previous }}</span>
      <img :src="imageUrl" alt="" class="card__image">
    </div>
    <div class="card__section">
      <span class="card__text">{{ item.Value }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})

const imageUrl = computed(() => {
  const type = props.item?.Previous <  props.item?.Value ? 'down' : 'up'
  return require(`@/assets/images/png/${type}.png`)
})
</script>

<style scoped lang="scss">
@import "../../assets/styles/components/common/exchangeCard";
</style>
