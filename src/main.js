import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiSpotify, BiYoutube, BiInstagram, HiMail } from "oh-vue-icons/icons";

addIcons(BiSpotify, BiYoutube, BiInstagram, HiMail);

const router = createRouter({
    history: createWebHistory(),
routes: [] })

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");
