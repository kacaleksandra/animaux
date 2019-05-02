<template>
    <div id="app-footer">
        <footer>
            <div class="footer-left">
            <h5 class="title">Tytul jakis footera</h5>
            <p>Jakas tresc zeby pusto nie bylo no nie</p>
        </div>
        <div class="footer-menu">
            <h5 class="title">LINKI</h5>
            <ul>
                <li v-for="link in links" :key="link"><router-link :to="link.route">{{ link.text }}</router-link></li>
            </ul>
        </div>
        <div class="footer-copyright">
            <p>{{ copyright }} {{ title }}</p>
        </div>
        </footer>
    </div>
</template>

<script>

export default {
    props: ['title'],
    data(){
        return{
            copyright: 'Copyright 2019',
            links:[
                { text: 'Home', route: '/'},
                { text: 'About Us', route: '/about'},
                { text: 'Contact', route: '/contact'},
            ]
        }
    }
}
</script>

<style scoped>

</style>
