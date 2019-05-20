<template>
  <div id="app">
    <app-loading v-if="!loading" @loaded="loading = $event"/>
    <transition name="loading-animation" enter-active-class="animated fadeIn faster">
      <div v-if="loading">
        <app-header class="header"/>
        <router-view class="center"/>
        <app-footer class="footer"/>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.center {
  z-index: -1;
}

.header {
  z-index: 1;
}
</style>


<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Loading from "./components/loading.vue";
import "../node_modules/animate.css/animate.css";
export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-loading": Loading
  },
  data() {
    return {
      title: "Animaux",
      loading: false
    };
  }
};
</script>
