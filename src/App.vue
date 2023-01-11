<template>
  <div class="app">
    <div class="container">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Header from "./components/Header";
import { useStore } from './store'

const store = useStore()

store.getCurrencies()

</script>

<style lang="scss">
@import "assets/styles/global";
</style>
