<template>
    <header>
        <router-link to="/" @click.native="scrollToTop()">
            <img height="45px" width="110px" src="/logo.png" alt="logo">
        </router-link>
        <nav>
            <ul>
                <li v-for="(link, idx) in links" :key="idx">
                    <router-link :to="link.route" class="router" @click.native="scrollToTop()">{{ link.text }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
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
            ]
        }
    },
    methods: {
        scrollToTop: function () {
            window.scrollTo(0, 0);
        },
    }
}
</script>

<style scoped>
header {
    font-family: 'Source Sans Pro', sans-serif;
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    grid-template-areas:
        "img . nav";
    background: #afd5aa;
    position: sticky;
    top: 0;
    width: 100%;
    border-bottom: 3px solid #d0aad5;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
}

img {
    margin-left: 5em;
    margin-top: 0.7em;
    margin-bottom: 0.7em;
    grid-area: img;
}

nav {
    grid-area: nav;
}

ul {
    list-style: none;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 2em;
    flex-wrap: wrap;
}

li {
    flex-basis: 15%;
}

.router {
    display: block;
    text-align: center;
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
