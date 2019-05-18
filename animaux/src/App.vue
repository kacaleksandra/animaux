<template>
  <div id="app">
    <app-header class="header" />
    <router-view class="center" />
    <app-footer class="footer" />
  </div>
</template>

<style scoped>
.center {
  z-index: 0;
}

.header {
  z-index: 1;
}

</style>


<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";


export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
  },
  data() {
    return {
      title: "Animaux"
    };
  }
};
</script>
