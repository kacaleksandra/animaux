<template>
    <div id="app-kontakt">
        <div id="contact">
            <h1>Contact Us!</h1>
            <div id="form">
                <form action="#">
                    <p class="uname">Your name: </p><input type="text" class="name" v-model.lazy="contact.name" required
                        placeholder="Quentin Tarantino">
                    <p class="uemail">Your e-mail: </p><input type="email" class="email" name="email"
                        v-model.lazy="contact.mail" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        placeholder="example@example.com">
                    <p class="utextarea">What's your question?</p><textarea name="question" id="question" cols="60"
                        rows="10" class="textarea" placeholder="Put your question here!" v-model.lazy="contact.text"
                        required></textarea>
                    <div id="checkboxes">
                        <label>Cattos</label>
                        <input type="checkbox" value="cattos" v-model="contact.categories">
                        <label>Doggos</label>
                        <input type="checkbox" value="doggos" v-model="contact.categories">
                        <label>Propositions</label>
                        <input type="checkbox" value="propositions" v-model="contact.categories">
                        <label>Basic help</label>
                        <input type="checkbox" value="basic help" v-model="contact.categories">
                    </div>
                    <div id="buttons">
                        <button type="submit" class="send" @click.prevent="popUp();emailValid()">Send</button>
                        <button type="reset" class="reset" @click="clear()">Reset</button>
                    </div>
                </form>
            </div>
            <div id="preview">
                <h3>Preview</h3>
                <p class="prevname">Your name: {{ contact.name }}</p>
                <p class="prevemail">Your e-mail: {{ contact.mail }}</p>
                <p class="prevquest">Your question: </p>
                <p class="prevquestcont" style="white-space: pre-line;"> {{ contact.text }} </p>
                <p class="prevcategories">Categories:</p>
                <ul class="prevcategoriesul">
                    <li v-for="(category, idx) in contact.categories" :key="idx">{{ category }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contact: {
                name: "",
                mail: "",
                text: "",
                categories: [],
            },
        }
    },
    methods: {
        isEmpty: function (obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        },
        popUp: function () {
            if (this.isEmpty(this.contact.name && this.contact.mail && this.contact.text && this.contact.categories)) {
                alert("Fill the whole form!");
            } else if (this.emailValid() == 1) {
                alert("Thanks for contact!");
                this.clear();
            } else {
                alert("Put correct e-mail adress!");
            }
        },
        clear: function () {
            this.contact.name = "";
            this.contact.mail = "";
            this.contact.text = "";
            this.contact.categories = [];
        },
        emailValid: function () {
            var email = this.contact.mail;
            var checker = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i;
            return checker.test(email);
        }
    }
}
</script>

<style scoped>
#contact {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    color: rgb(92, 93, 95);
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    margin-top: 5em;
    grid-template-areas:
        ". h1 ."
        ". formdiv ."
        ". previewdiv .";
}

#form {
    grid-area: formdiv;
    background-color: #f8e088;
    border-radius: 1em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "form .";
}

h1 {
    text-align: center;
    grid-area: h1;
    padding: 2em;
    background-color: #d8aadf;
    border-radius: 1em;
}

form {
    grid-area: form;
    padding: 2em;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
        "uname name"
        "uemail email"
        "utextarea utextarea"
        "textarea textarea"
        "checkboxes checkboxes"
        "send reset";
}

.uname {
    grid-area: uname;
    align-self: center;
}

.uemail {
    grid-area: uemail;
    align-self: center;
}

.utextarea {
    grid-area: utextarea;
    align-self: center;
}

.name {
    grid-area: name;
    align-self: flex-start;
    border: 1px solid #63666A;
    background-color: #fff;
}

.email {
    grid-area: email;
    align-self: flex-start;
    border: 1px solid #63666A;
    background-color: #fff;
}

.textarea {
    border: 1px solid #63666A;
    background-color: #fff;
    grid-area: textarea;
    justify-self: start;
    resize: none;
    width: 100%;
}

.reset {
    bottom: 0;
    padding: 1em;
    grid-area: reset;
    margin-top: 1em;
    background-color: #fff;
    border-radius: 1em;
}

.send {
    bottom: 0;
    padding: 1em;
    grid-area: send;
    background-color: #fff;
    border-radius: 1em;
    margin-right: 1em;
    margin-top: 1em;
}

#buttons {
    display: flex;
}

button {
    flex-basis: 25%;
}

#checkboxes {
    grid-area: checkboxes;
    padding: 0.5em;
}

#checkboxes label {
    padding: 0.5em;
}

#checkboxes input {
    padding: 0.5em;
    margin-right:6px;
}

#preview {
    grid-area: previewdiv;
    padding: 2em;
    background-color: #afd5aa;
    border-radius: 1em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "h3 ."
        "prevname ."
        "prevemail ."
        "prevquest ."
        "prevquestcont ."
        "prevcategories ."
        "prevcategoriesul .";
}

h3 {
    padding: 1em;
    grid-area: h3;
    margin-bottom: 1em;
}

.prevname {
    grid-area: prevname;
    ;
}

.prevemail {
    grid-area: prevemail;
}


.prevquest {
    grid-area: prevquest;
}

.prevquestcont {
    grid-area: prevquestcont;
}

.prevcategories {
    grid-area: prevcategories;
}

.prevcategoriesul {
    grid-area: prevcategoriesul;
}

ul {
    list-style: none;
}
</style>
