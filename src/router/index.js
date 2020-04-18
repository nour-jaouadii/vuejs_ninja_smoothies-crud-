import Vue from "vue";
import VueRouter from "vue-router";
import index from "@/components/index.vue";
import AddSmoothie from "@/components/AddSmoothie"
import EditSmoothie from "@/components/EditSmoothie"       

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: index
  },
  {
    path: "/add-smoothie",
    name: "AddSmoothie",
    component: AddSmoothie
  },
  {
    path: "/edit-smoothie/:smoothie_slug",
    name: "EditSmoothie",
    component: EditSmoothie
  },
  
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
