<template>
    <footer>
        <div id="piesek">
            <img width="80px" src="/dogbutton.png" alt="pjesek-button-footer">
        </div>
        <div id="footer-copy">
            <h3>Animaux &copy; 2019</h3>
        </div>
        <div id="content">    
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
    border-top: #afd5aa solid 5px;
    color: #F0F2EF;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 3em;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
}

footer:hover {
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
    height: 10em;
}

#piesek {
    width: 35px;
    height: 43px;
    top: -70px;
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

#footer-copy {
    margin-top: -35px;
    margin-bottom: 18px;
    text-align: center;
}

h3 {
    font-family: 'Helvetica';
    font-size: 20px;
    font-weight: 100;
}

#content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
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

.router {
    text-decoration: none;
    font-weight: 100;
    color: #F0F2EF;
}

ul {
    list-style: none;
}


</style>

