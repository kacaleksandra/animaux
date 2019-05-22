<template>
  <div id="app">
    <app-loading v-if="!loading" @loaded="loading = $event"/>
    <transition name="loading-animation" enter-active-class="animated fadeIn faster">
      <div v-if="loading">
        <app-header class="header"/>
        <app-burger class="burger"/>
        <transition name="router-animation" enter-active-class="animated fadeIn normal">
          <router-view class="center"/>
        </transition>
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

.burger {
  z-index: 1;
  display: none;
}

@media only screen and (max-width: 550px) {
  .burger {
    display: block;
  }

  .header {
    display: none;
  }
}
</style>


<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Loading from "./components/loading.vue";
import Burger from "./components/burger.vue";
import "../node_modules/animate.css/animate.css";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-loading": Loading,
    "app-burger": Burger
  },
  data() {
    return {
      title: "Animaux",
      loading: false
    };
  }
};
</script>
