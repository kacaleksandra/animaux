<template>
  <div id="app-footer">
    <div class="footer">
      <div id="button"></div>
      <div id="container">
        <div id="cont">
          <div class="footer_center">
            <h3>tekst</h3>
          </div>
        </div>
        <div class="footer-menu">
            <h5 class="title">LINKI</h5>
            <ul>
                <li v-for="(link, idx) in links" :key="idx"><router-link :to="link.route">{{ link.text }}</router-link></li>
            </ul>
        </div>
        <div class="footer-copyright">
            <p>{{ copyright }} {{ title }}</p>
        </div>
        </footer>
    </div>
  </div>
</template>


<style scoped>
@import "./style/footer.css";
</style>
