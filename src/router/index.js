import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import MontageView from "@/views/MontageView.vue";
import Composants from "@/views/Composants.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/montage",
        name: "MontageView",
        component: MontageView,
        props: true
    },
    {
        path: "/composants",
        name: "ComposantsView",
        component: Composants,
        props: true
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;