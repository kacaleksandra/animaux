<template>
  <footer>
    <div id="piesek">
      <img width="80px" src="/dogbutton.png" alt="pjesek-button-footer">
    </div>
    <div id="content">
      <div id="footer-copy">
        <h4>Animaux &copy; 2019</h4>
      </div>
      <div id="menu1">
        <ul>
          <li>
            <router-link class="router" to="/" @click.native="scrollToTop()">Home</router-link>
          </li>
          <li>
            <router-link class="router" to="/about" @click.native="scrollToTop()">About Us</router-link>
          </li>
          <li>
            <router-link class="router" to="/contact" @click.native="scrollToTop()">Contact</router-link>
          </li>
        </ul>
      </div>
      <div id="menu2">
        <ul>
          <li>
            <router-link class="router" to="/doggos" @click.native="scrollToTop()">Doggos</router-link>
          </li>
          <li>
            <router-link class="router" to="/cattos" @click.native="scrollToTop()">Cattos</router-link>
          </li>
          <li>
            <router-link class="router" to="/faq" @click.native="scrollToTop()">FAQ</router-link>
          </li>
        </ul>
      </div>

      <div id="logo">
        <router-link to="/" @click.native="scrollToTop()">
          <img height="45px" width="110px" src="/logo.png" alt="logo">
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    scrollToTop: function() {
      window.scrollTo(0, 0);
    }
  }
};
</script>


<style scoped>
footer {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 300;
  background: #afd5aa;
  color: #63666a;
  position: relative;
  bottom: 0;
  width: 100%;
  height: 8em;
  border-top: 3px solid #d0aad5;
  margin-top: 40px;
  -webkit-box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.75);
}

#piesek {
  width: 35px;
  height: 43px;
  top: -70px;
  margin: 0 auto;
  position: relative;
  margin-bottom: -15px;
  left: -2em;
}

h4 {
  font-family: "Helvetica";
  font-size: 17px;
  font-weight: bold;
}

#content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  margin-bottom: 0;
}

#menu1 {
  grid-column: 1 / 2;
  justify-self: center;
}

#menu2 {
  grid-column: 2 / 3;
  justify-self: start;
}

#logo {
  grid-column: 3 / 5;
  justify-self: center;
}

#footer-copy {
  grid-row: 2 / 3;
  grid-column: span 4;
  text-align: center;
}

.router {
  text-decoration: none;
  font-weight: 100;
  color: #63666a;
}

ul {
  list-style: none;
}

@media (max-width: "1200px") {
  #app-footer {
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 300;
    background-color: lightblue;
    color: #f0f2ef;
  }

  #piesek {
    width: 35px;
    height: 43px;
    top: -6px;
    margin: 0 auto;
    position: relative;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
  }

  #piesek:hover {
    width: 35px;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
    position: relative;
  }

  .footer {
    bottom: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 7.2em;
    overflow: hidden;
    margin: 0 auto;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
    z-index: 999;
  }

  .footer:hover {
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
    height: 11.4em;
  }

  .footer #container {
    margin-top: 2px;
    width: 100%;
    height: 100%;
    position: relative;
    top: 20px;
    left: 0;
    background: #63666a;
    border-top: #afd5aa solid 5px;
  }

  .footer_center {
    width: 100vw;
    display: inline-block;
    text-align: center;
  }

  .footer h3 {
    font-family: "Helvetica";
    font-size: 20px;
    font-weight: 100;
    margin-top: 5px;
    margin-bottom: 3px;
  }

  .menu {
    width: 60%;
    display: inline-block;
  }

  .logo {
    width: 40%;
    display: inline-block;
  }

  #img {
    text-align: center;
  }

  #menu1 {
    display: inline-block;
    width: 40%;
    margin-left: 5%;
  }

  #menu2 {
    display: inline-block;
    width: 20%;
    margin-left: 5%;
  }

  #clearli {
    list-style: none;
  }

  .router {
    text-decoration: none;
    color: #f0f2ef;
  }
}
</style>
