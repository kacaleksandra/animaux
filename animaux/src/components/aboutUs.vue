<template>
    <div id="app-about-us">
        <h1>Our shelter: </h1>
        <div id="shelter">
            <img src="shelter.jpg" alt="Our shelter" id="fotshel">
            <p class="infous">
                Our shelter is located in 3101 Alton Darby Creek Rd Hilliard, Ohio 43026. It's a medium-sized, cozy
                place for our animals. The animals have a
                good living space in there. We plan to expand our place in the future. For now we think that it's a very
                good place for animals to live in. Everyday we look out for them and take care of them. Our place has a
                river going through it. Because of that, we also have a small pond for them. They love playing in it! A
                big garden is also for our little creatures. Long walks with them are a pleasure for us and we love to
                do it. A passionate stuff in Animaux is what makes this place special and unique!
            </p>
        </div>
        <h1>Our team: </h1>
        <div id="about">
            <v-container class="my-2">
                <v-layout row wrap>
                    <v-flex xs12 sm6 md4 lg4 v-for="person in team" :key="person.name" id="elo">
                        <v-card class="text-xs-center ma-3" relative >
                            <v-responsive class="pt-4">
                                <v-avatar size="300" class="grey lighten-1">
                                    <img :src="person.avatar">
                                </v-avatar>
                            </v-responsive>
                            <v-card-text>
                                <div class="imie">{{ person.name }}</div>
                                <div class="opis">{{ person.role }}</div>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>
        <p class="infous">
            We are two young students from Poland. As an animal loving people, we always wanted to make something for
            the little creatures we love and adore. So that's how the idea came up. We also have a knowledge in
            webdesign and web programming. We put our skills and passion together, making Animaux - a lovely animal
            shelter with great and loving people, and a good communication system between the adopters and us.
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            team: [{
                    name: 'Radek Olesiński',
                    role: 'Website designer and originator',
                    avatar: '/avatar-1.png'
                },
                {
                    name: 'Szymon Szczepanowski',
                    role: 'Website designer and originator',
                    avatar: '/avatar-2.png'
                },
                { name: 'Aleksandra Kacprzak', 
                role: 'Website designer and originator', 
                avatar: '/avatar-3.png'},
            ]
        }
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
    font-family: 'Source Sans Pro', sans-serif;
    padding: 1em;
    color: #63666A;
    font-size: 3em;
}

.imie {
    text-align: center;
    font-family: 'Source Sans Pro', sans-serif;
    color: #63666A;
    font-weight: bold;
    font-size: 2.5em;
}

.opis {
    text-align: center;
    font-family: 'Source Sans Pro', sans-serif;
    color: #63666A;
    font-size: 1.5em;
}

.infous {
    font-family: 'Source Sans Pro', sans-serif;
    color: #63666A;
    font-weight: bold;
    width: 80%;
    font-size: 1.2em;
    margin: 2em auto;
    flex-basis: 15em;
}

p {
    text-align: center;
    padding: 1em;
}

#elo {
    z-index: -1;
}

#shelter {
    width: 80%;
    margin: auto;
}

#fotshel {
    display: block;
    text-align: center;
    margin: auto;
}
</style>
