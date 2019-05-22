<template>
  <div id="app-home">
    <carousel
      id="cyrk"
      :perPage="1"
      :autoplay="true"
      paginationColor="#d0aad5"
      paginationActiveColor="#afd5aa"
      :autoplayTimeout="3000"
      :loop="true"
      :speed="1000"
    >
      <slide class="slajd">
        <img class="slide" src="homeslides/elo10.jpg" alt="Animaux">
      </slide>
      <slide class="slajd">
        <img class="slide" src="homeslides/elo20.jpg" alt="Animaux">
      </slide>
      <slide class="slajd">
        <img class="slide" src="homeslides/elo50.jpg" alt="Animaux">
      </slide>
      <slide class="slajd">
        <img class="slide" src="homeslides/elo40.jpg" alt="Animaux">
      </slide>
      <slide class="slajd">
        <img class="slide" src="homeslides/elo30.jpg" alt="Animaux">
      </slide>
    </carousel>

    <div id="content">
      <article>Welcome to Animaux! We are a very friendly shelter for any doggo and catto you can imagine!</article>
      <h1>New goodboies and goodgurls</h1>
      <p id="help">Click on the picture to go to cats or dogs page!</p>
      <div id="newbois">
        <router-link class="newbois" to="/cattos" @click.native="scrollToTop()">
          <img src="/cats/catt4.jpg" alt="cat">
        </router-link>
        <router-link class="newbois" to="/doggos" @click.native="scrollToTop()">
          <img src="/dogs/dogt10.jpg" alt="dog">
        </router-link>
        <router-link class="newbois" to="/cattos" @click.native="scrollToTop()">
          <img src="/cats/catt11.jpg" alt="cat">
        </router-link>
        <router-link class="newbois" to="/doggos" @click.native="scrollToTop()">
          <img src="/dogs/dogt8.jpg" alt="dog">
        </router-link>
      </div>

      <br>
      <section>
        To see animals, that are currently at our shelter, head to the "<router-link class="router" to="/cattos" @click.native="scrollToTop()">Cattos</router-link>" or "<router-link class="router" to="/doggos" @click.native="scrollToTop()">Doggos</router-link>" page. <br>
        If you want to know anything more about us, go to "<router-link class="router" to="/about" @click.native="scrollToTop()">About Us</router-link>" page. You have any questions/suggestions? Use our "<router-link class="router" to="/contact" @click.native="scrollToTop()">Contact Us</router-link>" page, but before doing that, check if your question isn't answered already in the "<router-link class="router" to="/faq" @click.native="scrollToTop()">FAQ</router-link>" section. Enjoy your stay here my friend!
      </section>
    </div>
  </div>
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
#content {
  width: 80%;
  margin: auto;
  font-family: "Source Sans Pro", sans-serif;
  color: #63666a;
}

h1 {
  padding: 30px;
  text-align: center;
  font-family: "Source Sans Pro", sans-serif;
  color: #63666a;
}

p {
  font-family: "Source Sans Pro", sans-serif;
  color: #63666a;
}

#newbois {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.newbois {
  flex-basis: 340px;
}

article {
  padding: 15px;
  font-size: 3.5em;
  text-align: center;
  font-weight: bold;
}

section {
  padding: 15px;
  text-align: center;
  font-size: 2em;
  margin-bottom: 2em;
}

img {
  width: 340px;
  height: 300px;
}

.slide {
  width: 100%;
  height: auto;
  max-height: 650px;
}

.content {
  width: 90%;
  margin: auto;
}

#help {
  display: block;
  text-align: center;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 14px;
}

.router {
  text-decoration: none;
  color: black;
  font-weight: 500;
}

@media only screen and (max-width: 600px) {
  #cyrk {
    display: none;
  }
}
</style>
