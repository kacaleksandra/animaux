<template>
    <div id="app-menu">
        <ul>
            <li v-for="(link, idx) in links" :key="idx"><router-link :to="link.route">{{ link.text }}</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            links: [
                { text: 'Home', route: '/' },
                { text: 'Doggos', route: '/doggos' },
                { text: 'Cattos', route: '/cattos' },
                { text: 'About Us', route: '/about' },
                { text: 'Contact', route: '/contact' },
            ]
        }
    }
}
</script>

<style scoped>

</style>
