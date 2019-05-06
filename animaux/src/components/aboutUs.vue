<template>
    <div id="app-about-us">
        <h1 class="display-4">Nasz Zespół: </h1>
        <p class="display-2 grey--text">Trzech ambitnych uczniów szkoły średniej postanowiło zrobić projekt o ich wspólnej pasji - zwierzętach.</p>

        <v-container class="my-3">

            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg4 v-for="person in team" :key="person.name">
                    <v-card class="text-xs-center ma-3">
                        <v-responsive class="pt-4">
                            <v-avatar size="300" class="grey lighten-1">
                                <img :src="person.avatar">
                            </v-avatar>
                        </v-responsive>
                        <v-card-text>
                            <div class="display-2">{{ person.name }}</div>
                            <div class="grey--text headline">{{ person.role }}</div>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>    
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return{
            team: [
                { name: 'Radek Olesiński', role: 'Projektant strony i pomysłodawca', avatar: '/avatar-1.png'},
                { name: 'Szymon Szczepanowski', role: 'Projektant strony i pomysłodawca', avatar: '/avatar-2.png'},
                { name: 'Aleksandra Kacprzak', role: 'Projektantka strony i pomysłodawca', avatar: '/avatar-3.png'},
            ]
        }
    }
}
</script>

<style scoped>

.display-4 {
text-align: center;
}
p {
    text-align: center;
    padding: 1em;
}
</style>
