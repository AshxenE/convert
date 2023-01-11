<template>
  <div class="button" :style="buttonStyle">
    <span class="button__text">
       <slot></slot>
    </span>
  </div>
</template>

<script setup>
  import { defineProps, computed } from 'vue'

  const props = defineProps({
    width:{
      type: String,
      default: ''
    },
    height:{
      type: String,
      default: ''
    },
    background:{
      type: String,
      default: ''
    },
    color:{
      type: String,
      default: ''
    },
  })

  const buttonStyle = computed(() => {
    return {
      width: props.width,
      height: props.height,
      background: props.background,
      color: props.background,
    }
  })
</script>

<style scoped lang="scss">
@import "../../assets/styles/components/ui/button";
</style>
