<template>
  <div id="app">
    <app-header :title="title"/>
    <app-menu/>
    <router-view/>
    <app-footer/>
  </div>
</template> 

<style scoped>

</style>


<script>
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    "app-header": Header,
    "app-menu": Menu,
    "app-footer": Footer
  },
  data() {
    return {
      title: "Animaux"
    };
  }
};
</script>
