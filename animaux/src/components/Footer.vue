<template>
    <div id="app-footer">
        <footer>
            <div class="footer-left">
            <h5 class="title">Tytul jakis footera</h5>
            <p>Jakas tresc zeby pusto nie bylo no nie</p>
        </div>
        <div class="footer-menu">
            <h5 class="title">MENU</h5>
            <ul>
                <li></li>
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
            copyright: 'Copyright 2019'
        }
    }
}
</script>

<style scoped>

</style>
