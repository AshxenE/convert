<template>
  <div class="select" :style="selectStyle">
    <div class="select-header" :class="{'select__error': error}"  @click="close =! close">
        <span class="select-header__text" :class="{'select-header__placeholder': !value}">
          {{ modelValue[truckBy] || placeholder }}
        </span>
      <img src="@/assets/images/svg/close.svg" alt="" class="select-img" :class="{ 'select-active__img': close, 'select-error__fill':error}">
    </div>
    <transition name="error" appear>
      <div v-if="error" :class="['select__error-text']">
        {{ errorText }}
      </div>
    </transition>
    <transition appear name="slide-fade">
      <div v-if="close" class="select-body">
        <UiInput @click.stop v-model="searchValue" height="35px" placeholder="Поиск" />
        <span
            v-for="(item, key) in optionsSelect" :key="key"
            :class="['select-body__item', {selected: item[truckBy] === modelValue[trukBy]}]"
            @click="selectValue(item)"
        >{{ item[truckBy] }} </span>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { defineProps, ref, computed, defineEmits } from 'vue'
import UiInput from '@/components/ui/Input'

const props = defineProps({
  modelValue:{
    type: [String, Object],
    default: '',
  },
  options: {
    type:Array,
    default: () => []
  },
  truckBy: {
    type:String,
    default: 'text'
  },
  errorText: {
    type:String,
    default: ''
  },
  height: {
    type:String,
    default:''
  },
  width: {
    type:String,
    default:''
  },
  error:{
    type:Boolean,
    default:false
  },
  placeholder: {
    type: String,
    default: '',
  }
})

const emit = defineEmits(['change', 'update:modelValue' ])

const close = ref(false)
const searchValue = ref('')

const selectStyle = computed(() => {
  return {
    width: props.width,
    height: props.height
  }
})

const optionsSelect = computed(() => {
  return props.options.filter(val => val[props.truckBy].toLowerCase().includes(searchValue.value.toLowerCase()))
})

const selectValue = (item) => {
  emit('update:modelValue', item)
  emit('change', item)
  close.value =! close.value
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/components/ui/select";
</style>
