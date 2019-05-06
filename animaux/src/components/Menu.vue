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
    position: static;
    cursor: pointer;
    opacity: 0;
}

.close g {
    stroke: #63666a;
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
    align-items: center;
    justify-content: center;
    position: absolute;
    opacity: 0;
    height: 100vh;
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

.mainenu div {
    margin-top: 50px;
    transition: margin 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

input:checked~.mainmenu div {
    margin-top: 0px;
}


@media (min-width: 1050px) and (min-height: 613px) {

    .mainmenu {
        width: 13%;
        flex-direction: column;
        display: flex;
    }

    #image {
        margin-bottom: 15%;
        margin-top: 15%;
    }
}

@media (min-width: 1000px) {

    .mainmenu {
        width: 10%;
        flex-direction: column;
        display: flex;
    }

    #image {
        margin-bottom: 15%;
        margin-top: 15%;
    }

}

@media (max-width: 1000px) and (min-width: 600px) {

    .mainmenu {
        width: 15%;
        flex-direction: column;
        display: flex;
    }

    #image {
        margin-bottom: 8%;
        margin-top: 8%;
    }
}

@media (max-width: 600px) {

    .mainmenu {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    #image {
        margin-bottom: 5%;
        margin-top: 1%;
    }
}

@media (max-width: 900px) and (max-height: 420px) {

    .mainmenu {
        width: 100%;
        display: flex;
        flex-direction: initial;
    }

    #image {
        margin-left: 5%;

    }

    #name {
        margin-top: 15%;

    }

    #namep {
        margin-top: 28%;
    }
}
</style>