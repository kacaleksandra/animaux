import Home from  './components/Home.vue'
import aboutUs from  './components/aboutUs.vue'
import Kontakt from './components/Kontakt.vue'
import Doggos from './components/Doggos.vue'
import Cattos from './components/Cattos.vue'

export default[
    { path: '/', component: Home },
    { path: '/about', component: aboutUs },
    { path: '/contact', component: Kontakt},
    { path: '/doggos', component: Doggos},
    { path: '/cattos', component: Cattos}
]