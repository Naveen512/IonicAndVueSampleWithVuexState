import { createRouter, createWebHistory } from "@ionic/vue-router";
import Users from "../pages/Users.vue";
import AddOrUpdateUser from "../pages/AddOrUpdateUser";

const routes = [
  {
    path: "/",
    redirect: "/users",
  },
  {
    path: "/users",
    component: Users,
  },
  {
    path: "/add-or-update/:id",
    component: AddOrUpdateUser
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
