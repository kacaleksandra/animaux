<template>
  <div id="wrapper"> 
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
          <img width="25" height="25" src="/homemenu.png" alt="logo">
          <p>Home</p>
        </router-link>
      </div>
      <div id="image">
        <router-link class="router" to="/cattos">
          <img width="25" height="25" src="/catmenu.png" alt="logo">
          <p>Cat</p>
        </router-link>
      </div>
      <div id="image">
        <router-link class="router" to="/doggos">
          <img width="25" height="25" src="/dogmenu.png" alt="logo">
          <p>Dog</p>
        </router-link>
      </div>
      <div id="image">
        <router-link class="router" to="/about">
          <img width="25" height="25" src="/aboutusmenu.png" alt="logo">
          <p>About Us</p>
        </router-link>
      </div>
      <div id="image">
        <router-link class="router" to="/contact">
          <img width="25" height="25" src="/contactmenu.png" alt="logo">
          <p>Contact</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
#wrapper {
  height: 100%;
}

label {
    position: absolute;
    z-index: 1;
}

input {
    display: none;
}

input:checked~label {
    right: 0;
}

.burger {
    position: relative;
    top: -10px;
    cursor: pointer;
}

.burger g {
    stroke: #63666a;
    transition: stroke 0.25s ease-in-out;
}

input:checked~label .burger {
    opacity: 0;
}

.close {
    position: absolute;
    right: 92.5vw;
    bottom: 1.6vw;
    cursor: pointer;
    opacity: 0;
}

.close g {
    stroke: #f0f2ef;
    transition: stroke 0.25s ease-in-out;
}

.close line {
    transform-origin: 0%;
}

.close g {
    transform: rotateZ(45deg);
    transform-origin: 50%;
}

input:checked~label .close {
    opacity: 1;
}

.mainmenu {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(30px, auto);
    position: absolute;
    opacity: 0;
    width: 15%;
    height: 100%;
    background-color: #63666a;
    transition: opacity 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    color: #f0f2ef;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    font-family: Helvetica;
    top: 0;
    border-right: solid 5px #afd5aa;
    text-align: center;
}

input:checked~.mainmenu {
    opacity: 0.8;
}

input:checked~.mainmenu div {
    margin-top: 0px;
}

#image {
    grid-column: span 2;
    display: grid;
}

#image:first-of-type{
    margin-top: 45px;
}

.router{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
    text-align: center;
}

.router img{
    justify-self: end;
    align-self: center;
    grid-column: 1 / 2;
}

.router p{
    padding: 5px;
    justify-self: start;
    align-self: center;
    grid-column: 2 / 4;
}
</style>