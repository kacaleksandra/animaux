<template>
    <div id="app-doggos">
        <h1>Our lovely dogs!</h1>
        <p id="help">Click on the picture to reveal name and information about the animal!</p>
        <div id="gallery">
            <div id="img1" style="background: url('/dogs/dogt1.jpg');" @click="showText1()">
                <p :class="{text1}">Lion king gurl <br><br> This is Simba <br> Simba is very smol and cute (uwu), she
                    hates baths and commands from hoomans!</p>
            </div>
            <div id="img2" style="background: url('/dogs/dogt2.jpg');" @click="showText2()">
                <p :class="{text2}">Happp gurl <br><br> This is Ana <br> Ana is always smiling and making everyones mood
                    better and better, theres no situation she couldnt handle!</p>
            </div>
            <div id="img3" style="background: url('/dogs/dogt3.jpg');" @click="showText3()">
                <p :class="{text3}">Proud gurl <br><br> This is Pyśka <br> Pyśka is very proud of herself cause she
                    learnt many tricks so far as a pupper and tries to show them to everybody!</p>
            </div>
            <div id="img4" style="background: url('/dogs/dogt4.jpg');" @click="showText4()">
                <p :class="{text4}">Clout boi <br><br> This is Nelson <br> Nelson is very fluff and gentle, he loves
                    long hugs and naps at any time!</p>
            </div>
            <div id="img5" style="background: url('/dogs/dogt5.jpg');" @click="showText5()">
                <p :class="{text5}">Smol boi in a big world <br><br> This is Alex <br> Alex feels very smol and anxious
                    sometimes but he tries his best to love his hoomans as much as possible!</p>
            </div>
            <div id="img6" style="background: url('/dogs/dogt6.jpg');" @click="showText6()">
                <p :class="{text6}">Scooooby dooodle <br><br> This is Scooby <br> Scooby has very pleasant fur and he
                    loves when his hooman do scrich scratch, he also enjoys long baths!</p>
            </div>
            <div id="img7" style="background: url('/dogs/dogt7.jpg');" @click="showText7()">
                <p :class="{text7}">Teefs gurl <br><br> This is Zara <br> Zara shows her teefs to everyone to admire
                    her, she can do many tricks and is very active¡!</p>
            </div>
            <div id="img8" style="background: url('/dogs/dogt8.jpg');" @click="showText8()">
                <p :class="{text8}">Fast boi (zoomies) <br><br> This is Light <br> Light is very active (and fast), he
                    loves long walks around the park stopping for some snacc from his loving hooman:3</p>
            </div>
            <div id="img9" style="background: url('/dogs/dogt9.jpg');" @click="showText9()">
                <p :class="{text9}">Mmmm licky gurl <br><br> This is Nala <br> Nala consantly licks her and her hoomans
                    nose, she also loves picnics and appreciates every snacc she get! </p>
            </div>
            <div id="img10" style="background: url('/dogs/dogt10.jpg');" @click="showText10()">
                <p :class="{text10}">Sneaky boi <br><br> This is Sneak <br> Sneak is always willing to play and tries to
                    hide everywhere (what is funny sometimes), hes more like lazy boi...</p>
            </div>
            <div id="img11" style="background: url('/dogs/dogt11.jpg');" @click="showText11()">
                <p :class="{text11}">Smol drunk boi <br><br> This is Stitch <br> Stich likes to take long naps at every
                    time of the day in every position and place possible, he also drinks too much milk...</p>
            </div>
            <div id="img12" style="background: url('/dogs/dogt12.jpg');" @click="showText12()">
                <p :class="{text12}">Two color boi <br><br> This is Bob <br> Probably there wasnt enough ink to print
                    him fully, despite that he is still a good boi and willing to play and love &#10084;</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text1: false,
            text2: false,
            text3: false,
            text4: false,
            text5: false,
            text6: false,
            text7: false,
            text8: false,
            text9: false,
            text10: false,
            text11: false,
            text12: false,
        }
    },
    methods: {
        showText1: function () {
            this.text1 = !this.text1;
        },
        showText2: function () {
            this.text2 = !this.text2;
        },
        showText3: function () {
            this.text3 = !this.text3;
        },
        showText4: function () {
            this.text4 = !this.text4;
        },
        showText5: function () {
            this.text5 = !this.text5;
        },
        showText6: function () {
            this.text6 = !this.text6;
        },
        showText7: function () {
            this.text7 = !this.text7;
        },
        showText8: function () {
            this.text8 = !this.text8;
        },
        showText9: function () {
            this.text9 = !this.text9;
        },
        showText10: function () {
            this.text10 = !this.text10;
        },
        showText11: function () {
            this.text11 = !this.text11;
        },
        showText12: function () {
            this.text12 = !this.text12;
        },
    }
}
</script>

<style scoped>
h1 {
    font-family: 'Source Sans Pro', sans-serif;
    text-align: center;
    padding: 2em;
    color: #63666A;
}

#gallery {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    justify-content: space-around;
    align-content: space-around;
    padding: 1em;
}

#img1,
#img2,
#img3,
#img4,
#img5,
#img6,
#img7,
#img8,
#img9,
#img10,
#img11,
#img12 {
    flex-basis: 430px;
    margin-bottom: 2.5em;
    height: 400px;
    position: relative;
    z-index: 0;
}

p {
    display: none;
}

.text1,
.text2,
.text3,
.text4,
.text5,
.text6,
.text7,
.text8,
.text9,
.text10,
.text11,
.text12 {
    font-family: 'Source Sans Pro', sans-serif;
    text-align: center;
    display: block;
    padding: 2em;
    background-color: black;
    opacity: 0.5;
    color: #fff;
    height: 100%;
    font-size: 1.5em;
}

#help {
    display: block;
    ;
    text-align: center;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 14px;
}
</style>