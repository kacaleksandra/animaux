<template>
  <div>
    <input id="test" type="checkbox">
    <label for="test">
      <svg class="burger" width="86" height="60" viewBox="0 0 150 150">
        <g stroke-width="12">
          <line x1="6" y1="6" x2="80" y2="6"></line>
          <line x1="6" y1="28" x2="80" y2="28"></line>
          <line x1="6" y1="50" x2="80" y2="50"></line>
        </g>
      </svg>
      <svg class="close" width="86" height="60" viewBox="0 0 150 150">
        <g stroke-width="12">
          <line x1="42" y1="6" x2="42" y2="80"></line>
          <line x1="6" y1="42" x2="80" y2="42"></line>
        </g>
      </svg>
    </label>

    <div class="mainmenu">
      <div id="image">
        <router-link class="router" to="/">
          <img width="60" height="60" src="/homemenu.png" alt="logo">
          <div id="name">Home</div>
        </router-link>
      </div>
      <div id="image">
        <router-link class="router" to="/cattos">
          <img width="65" height="65" src="/catmenu.png" alt="logo">
          <div id="name">Cat</div>
        </router-link>
      </div>
      <div id="image">
        <router-link class="router" to="/doggos">
          <img width="65" height="65" src="/dogmenu.png" alt="logo">
          <div id="name">Dog</div>
        </router-link>
      </div>
      <div id="image">
        <router-link class="router" to="/about">
          <img width="65" height="65" src="/aboutusmenu.png" alt="logo">
          <div id="name">About us</div>
        </router-link>
      </div>
      <div id="image">
        <router-link class="router" to="/contact">
          <img width="55" height="55" src="/contactmenu.png" alt="logo">
          <div id="namep">Contact</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "./style/menu.css";
</style>