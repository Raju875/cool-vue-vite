import { createRouter, createWebHistory } from "vue-router";

// // import all files when app first laod
// import Home from "/src/views/Home.vue";
// import About from "/src/views/About.vue";
// import Contact from "/src/views/Contact.vue";

// Lazy loading
const Home = () => import("/src/views/Home.vue");
const About = () => import("/src/views/About.vue");
const Contact = () => import("/src/views/Contact.vue");
const ContactDetails = () => import("../components/contact/Details.vue");


const routes = [
  { path: "/", name:'home', component: Home },
  { path: "/about", name:'about', component: About },
  { path: "/contact", name:'contact.list', component: Contact },
  { path: "/contact/details/:id", name:'contact.details', component: ContactDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;