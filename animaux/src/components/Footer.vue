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
        scrollToTop: function () {
            window.scrollTo(0, 0);
        },
    }
}
</script>


<style scoped>
footer {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 300;
    background: #afd5aa;
    color: #63666A;
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
    font-family: 'Helvetica';
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
    color: #63666A;
}

ul {
    list-style: none;
}
</style>
