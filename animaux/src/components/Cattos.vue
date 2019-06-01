<template>
    <div id="app-cattos">
        <h1>Our lovely cats!</h1>
        <p id="help">Click on the picture to reveal name and information about the animal!</p>
        <div id="gallery">
            <div id="img1" @click="showText1()">
                <img src="/cats/catt1.jpg" alt="walker">
                <p :class="{text1}">Walkin boi <br><br> This is Walker <br> Walker can walk on every surface, even water
                    is not a big deal for him, he can also climb on walls.</p>
            </div>
            <div id="img2" @click="showText2()">
                <img src="/cats/catt2.jpg" alt="ana">
                <p :class="{text2}">Smol gurl <br><br> This is Ana <br> So basically Ana is very smol and cute kitten
                    but willing to love her future hoomans</p>
            </div>
            <div id="img3" @click="showText3()">
                <img src="/cats/catt3.jpg" alt="malcolm">
                <p :class="{text3}">Kitchen boi <br><br> This is Malcolm <br> Malcolm spends all the time in the
                    kitchen, its his favourite room and he hates being in any different</p>
            </div>
            <div id="img4" @click="showText4()">
                <img src="/cats/catt4.jpg" alt="smudge">
                <p :class="{text4}">Drill boi <br><br> This is Smudge <br> Smudge sneezes a lot (thats why hes a drill
                    boi), he loves long walks around the town with his hoomans</p>
            </div>
            <div id="img5" @click="showText5()">
                <img src="/cats/catt5.jpg" alt="oscar">
                <p :class="{text5}">Lazy boi <br><br> This is Oscar <br> Oscar loves napping all day long in every
                    position everywhere, he also loves long hugs</p>
            </div>
            <div id="img6" @click="showText6()">
                <img src="/cats/catt6.jpg" alt="cleo">
                <p :class="{text6}">Jumpy gurl <br><br> This is Cleo <br> Cleo is the jumpiest cat youve ever seen, she
                    jumps all around what looks kinda funny sometimes</p>
            </div>
            <div id="img7" @click="showText7()">
                <img src="/cats/catt7.jpg" alt="molly">
                <p :class="{text7}">Amgry gurl <br><br> This is Molly <br> Molly is very moody cat and mostly amgry (but
                    not when has snacc), one hug can solve everythig for about 3hrs!</p>
            </div>
            <div id="img8" @click="showText8()">
                <img src="/cats/catt8.jpg" alt="marco">
                <p :class="{text8}">Cute boi <br><br> This is Marco <br> Marco is very cute, fluff and gentle, hes not a
                    mornin animal prefers napping whole day!</p>
            </div>
            <div id="img9" @click="showText9()">
                <img src="/cats/catt9.jpg" alt="charlie">
                <p :class="{text9}">Humgry boi <br><br> This is Charlie <br> Charlie is always humgry so you better have
                    snacc all around your place!</p>
            </div>
            <div id="img10" @click="showText10()">
                <img src="/cats/catt10.jpg" alt="daisy">
                <p :class="{text10}">Snowy gurl <br><br> This is Daisy <br> Daisy loves playing in the snow and is
                    always willing to play even without snow...</p>
            </div>
            <div id="img11" @click="showText11()">
                <img src="/cats/catt11.jpg" alt="sacha">
                <p :class="{text11}">Happ gurl <br><br> This is Sacha <br> Sacha is the happiest cat in the whole
                    universe, she always tries to spread her whole energy among people around her</p>
            </div>
            <div id="img12" @click="showText12()">
                <img src="/cats/catt12.jpg" alt="sammy">
                <p :class="{text12}">Strechy boi <br><br> This is Sammy <br> Sammy is more like lazy boi, he loves
                    laying on the couch whole day taking breaks for some strechin</p>
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
    height: auto;
    max-height: 400px;
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
    position: absolute;
    top: 0;
}

#help {
    display: block;
    text-align: center;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 14px;
}

</style>
