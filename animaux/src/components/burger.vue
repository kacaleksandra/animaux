<template>
    <div id="burger">
        <div class="burger">
            <router-link to="/" @click.native="scrollToTop()" class="logo">
                <img height="45px" width="110px" src="/logo.png" alt="logo">
            </router-link>
            <h2 @click="showBurger()">MENU</h2>
        </div>
        <nav :class="{active}">
            <ul>
                <li v-for="(link, idx) in links" :key="idx">
                    <router-link :to="link.route" class="router" @click.native="scrollToTop();showBurger()">{{ link.text }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [{
                    text: "Home",
                    route: "/"
                },
                {
                    text: "Cattos",
                    route: "/cattos"
                },
                {
                    text: "Doggos",
                    route: "/doggos"
                },
                {
                    text: "Contact",
                    route: "/contact"
                },
                {
                    text: "About Us",
                    route: "/about"
                },
                {
                    text: "FAQ",
                    route: "/faq"
                },
            ],
            active: false
        }
    },
    methods: {
        scrollToTop: function () {
            window.scrollTo(0, 0);
        },
        showBurger: function() {
            this.active = !this.active;
        }
    }
}
</script>

<style scoped>
#burger {
    position: sticky;
    top: 0;
}

.burger {
    display: flex;
    flex-wrap: wrap;
    background: #afd5aa;
    border-bottom: 3px solid #d0aad5;
}

h2 {
    padding: 1em;
    text-align: center;
    font-family: 'Source Sans Pro', sans-serif;
    color: #63666A;
    width: 100%;
    flex-basis: 60%;
}

.logo {
    padding-top: 0.5em;
    padding-left: 1.5em;
    flex-basis: 35%;
}

nav {
    flex-basis: 100%;
    display: none;
    color: #63666A;
    background: #afd5aa;
}

.active {
    display: block;
    transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s;
}

ul {
    list-style: none;
}

li {
    margin: auto;
}

.router {
    display: block;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
    color: #63666A;
    padding: 1em;
}

.router:hover {
    background: #63666A;
    color: #afd5aa;
    border-radius: 1em;
}
</style>
