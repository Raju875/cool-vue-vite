import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "home", component: () => import("/src/views/Home.vue") },
  {
    path: "/about",
    name: "about",
    component: () => import("/src/views/About.vue"),
  },
  {
    path: "/contact",
    name: "contact.list",
    component: () => import("/src/views/Contact.vue"),
  },
  {
    path: "/contact/details/:id/:slug",
    name: "contact.details",
    component: () => import("../components/contact/Details.vue"),
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("../components/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
