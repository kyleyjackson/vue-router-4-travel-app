<template>
  <TheNavigation/>
  <div class="container">
    <router-view v-slot="{Component}">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path" ></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
  import TheNavigation from './components/TheNavigation.vue'
  
  export default {
    components: {TheNavigation}
  }
</script>

<style lang="css">
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>