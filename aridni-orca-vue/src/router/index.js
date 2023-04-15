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
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;
  