import { createRouter,createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: "/",
        name: "welcome",
        component: () => import("@/views/WelcomePage"),
    },
    {
        path: "/home",
        name: "home",
        component: () => import("@/views/HomePage"),
    },
    {
        path: "/watch",
        name: "watch",
        component: () => import("@/views/WatchPage"),
    },
    {

        path: "/about",
        name: "about",
        component: () => import("@/views/AboutPage"),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;
  