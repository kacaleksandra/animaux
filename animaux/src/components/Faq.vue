<template>
    <div id="faq">
        <h1>Frequently asked questions</h1>

        <h3>How do I contact you</h3>
        <p>Just fill the form on our <router-link class="router" to="/contact" @click.native="scrollToTop()">contact
            </router-link> page!</p>

        <h3>How do I adopt?</h3>
        <p>You need to visit our centre</p>

        <h3>Where can I find you?</h3>
        <p>We are located in 3101 Alton Darby Creek Rd Hilliard, Ohio 43026</p>

        <h3>What are your working hours?</h3>
        <p>We work from 6am to 6pm</p>

        <h3>Is there possibility to walk your dogs?</h3>
        <p>You need to work for us to walk the dog</p>

        <h3>I found a dog/cat. Can I bring him to your shelter?</h3>
        <p>Before bringing that animal call us on 81381598372 to find out if there is a free place. If not we will find
            another shelter</p>

        <h3>Can I donate any money?</h3>
        <p>Of course! But apart from money we also appreciate donates in stuff like food, blankets, carpets, etc</p>
    </div>
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
#faq {
    font-family: 'Source Sans Pro', sans-serif;
    padding: 1em;
    width: 80%;
    height: 100%;
    margin: auto;
    color: rgb(92, 93, 95);
    background-color: #d0aad5;
    border-bottom-left-radius: 200em;
    border-bottom-right-radius: 1000em;
    position: static;
}

h1 {
    padding: 1.3em;
    text-align: center;
}

h3 {
    padding: 0.7em;
}

p {
    padding: 0.7em;
}

p:last-of-type {
    margin-bottom: 5em;
}

.router {
    text-decoration: none;
    color: black;
}

</style>

