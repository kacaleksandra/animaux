<template>
    <div id="app-cattos">
        <h1>Our lovely cats!</h1>
        <p id="help">Click on the picture to reveal name and information about the animal!</p>
        <div id="gallery">
            <div id="img1" style="background: url('/cats/catt1.jpg');" @click="showText1()">
                <p :class="{text1}">Walkin boi <br><br> This is Walker <br> Walker can walk on every surface, even water
                    is not a big deal for him, he can also climb on walls.</p>
            </div>
            <div id="img2" style="background: url('/cats/catt2.jpg');" @click="showText2()">
                <p :class="{text2}">Smol gurl <br><br> This is Ana <br> So basically Ana is very smol and cute kitten
                    but willing to love her future hoomans</p>
            </div>
            <div id="img3" style="background: url('/cats/catt3.jpg');" @click="showText3()">
                <p :class="{text3}">Kitchen boi <br><br> This is Malcolm <br> Malcolm spends all the time in the
                    kitchen, its his favourite room and he hates being in any different</p>
            </div>
            <div id="img4" style="background: url('/cats/catt4.jpg');" @click="showText4()">
                <p :class="{text4}">Drill boi <br><br> This is Smudge <br> Smudge sneezes a lot (thats why hes a drill
                    boi), he loves long walks around the town with his hoomans</p>
            </div>
            <div id="img5" style="background: url('/cats/catt5.jpg');" @click="showText5()">
                <p :class="{text5}">Lazy boi <br><br> This is Oscar <br> Oscar loves napping all day long in every
                    position everywhere, he also loves long hugs</p>
            </div>
            <div id="img6" style="background: url('/cats/catt6.jpg');" @click="showText6()">
                <p :class="{text6}">Jumpy gurl <br><br> This is Cleo <br> Cleo is the jumpiest cat youve ever seen, she
                    jumps all around what looks kinda funny sometimes</p>
            </div>
            <div id="img7" style="background: url('/cats/catt7.jpg');" @click="showText7()">
                <p :class="{text7}">Amgry gurl <br><br> This is Molly <br> Molly is very moody cat and mostly amgry (but
                    not when has snacc), one hug can solve everythig for about 3hrs!</p>
            </div>
            <div id="img8" style="background: url('/cats/catt8.jpg');" @click="showText8()">
                <p :class="{text8}">Cute boi <br><br> This is Marco <br> Marco is very cute, fluff and gentle, hes not a
                    mornin animal prefers napping whole day!</p>
            </div>
            <div id="img9" style="background: url('/cats/catt9.jpg');" @click="showText9()">
                <p :class="{text9}">Humgry boi <br><br> This is Charlie <br> Charlie is always humgry so you better have
                    snacc all around your place!</p>
            </div>
            <div id="img10" style="background: url('/cats/catt10.jpg');" @click="showText10()">
                <p :class="{text10}">Snowy gurl <br><br> This is Daisy <br> Daisy loves playing in the snow and is
                    always willing to play even without snow...</p>
            </div>
            <div id="img11" style="background: url('/cats/catt11.jpg');" @click="showText11()">
                <p :class="{text11}">Happ gurl <br><br> This is Sacha <br> Sacha is the happiest cat in the whole
                    universe, she always tries to spread her whole energy among people around her</p>
            </div>
            <div id="img12" style="background: url('/cats/catt12.jpg');" @click="showText12()">
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
    text-align: center;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 14px;
}

</style>
