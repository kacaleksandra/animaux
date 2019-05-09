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
                    <router-link class="router" to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link class="router" to="/about">About Us</router-link>
                    </li>
                    <li>
                        <router-link class="router" to="/contact">Kontakt</router-link>
                    </li>
                </ul>
            </div>
            <div id="menu2">
                <ul>
                    <li>
                        <router-link class="router" to="/doggos">Doggos</router-link>
                    </li>
                    <li>
                        <router-link class="router" to="/cattos">Cattos</router-link>
                    </li>
                </ul>
            </div>
            
            <div id="logo">
                <img height="45px" width="110px" src="/logo.png" alt="logo">
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 300;
    background: #63666A;
    border-top: 5px solid #afd5aa;
    color: #F0F2EF;
    position: relative;
    bottom: 0;
    width: 100%;
    height: 8em;
    margin-top: 40px;
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
    font-weight: 100;
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
    color: #F0F2EF;
}

ul {
    list-style: none;
}


</style>

