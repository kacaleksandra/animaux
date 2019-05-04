<template>
  <div id="app-footer">
    <div class="footer">
      <footer>
        <div class="footer">
          <div id="button">
            <div id="piesek">
              <img weight="80px" width="80px" src="/dogbutton.png" alt="piesek">
            </div>
          </div>
          <div id="container">
            <div class="footer_center">
              <h3>Animaux &copy; 2019</h3>
            </div>
            <div class="content">
              <div class="menu">
                <div id="menu1">
                  <ul>
                    <router-link class="router" to="/">
                      <li>Home</li>
                    </router-link>

                    <router-link class="router" to="/about">
                      <li>About us</li>
                    </router-link>
                    <router-link class="router" to="/contact">
                      <li>Contact</li>
                    </router-link>
                  </ul>
                </div>
                <div id="menu2">
                  <ul>
                    <router-link class="router" to="/doggos">
                      <li>Doggos</li>
                    </router-link>
                    <router-link class="router" to="/cattos">
                      <li>Cattos</li>
                    </router-link>

                    <ul>
                      <li id="clearli">&nbsp;</li>
                    </ul>
                  </ul>
                </div>
              </div>
              <div class="logo">
                <div id="img">
                  <img height="45" width="110" src="/logo.png" alt="logo">
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>


<style scoped>
@import "./style/footer.css";
</style>

