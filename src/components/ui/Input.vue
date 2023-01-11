<template>
  <div class="input__parent">
    <input
        :type="type"
        :placeholder="placeholder"
        :style="inputStyle"
        :class="{'input__error': error}"
        @input="changeInput"
        class="input"
        :value="modelValue"
        :disabled="disabled"
    >
    <transition name="error" appear>
      <div v-if="error" :class="['input__error-text']">
        {{ errorText }}
      </div>
    </transition>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps({
  modelValue: String,
  height:{
    type:String,
    default: '',
  },
  placeholder:{
    type:String,
    default: '',
  },
  type:{
    type:String,
    default: 'text'
  },
  errorText:{
    type:String,
    default: ''
  },
  error: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  }
})

const emit = defineEmits(['change', 'update:modelValue' ])

const inputStyle = computed(() => {
  return {
    width: props.width,
    height: props.height
  }
})

const changeInput = (event) => {
  emit('update:modelValue', event.target.value)
  emit('change', event.target.value)
}

</script>

<style scoped lang="scss">
@import "../../assets/styles/components/ui/input";
</style>
