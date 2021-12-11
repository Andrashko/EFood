import MainPage from '@/pages/MainPage'
import AboutE from '@/pages/AboutE'
import MyOffice from '@/pages/MyOffice'
import Login from '@/pages/Login'
import Registration from '@/pages/Registration'
import VueRouter from "vue-router"

const routes = [
    { path: '/', component: MainPage },
    { path: '/aboutE', component: AboutE},
    { path: '/myOffice', component: MyOffice },
    { path: '/Login', component: Login },
    { path: '/Registration', component: Registration}
]

const router = new VueRouter({routes})

export default router