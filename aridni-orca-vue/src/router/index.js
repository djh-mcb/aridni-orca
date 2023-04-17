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
        path: "/listen",
        name: "listen",
        component: () => import("@/views/ListenPage"),
    },
    {
        path: "/watch",
        name: "watch",
        component: () => import("@/views/WatchPage"),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;
  