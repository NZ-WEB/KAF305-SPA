const routes = [
  {
    path: "/",
    component: () => import("layouts/OwnLayout.vue"),
    children: [
      {
        path: "/",
        component: () => import("pages/Home"),
      },
      {
        path: "/Teachers",
        component: () => import("pages/Teachers"),
      },
      {
        path: "/Schedule",
        component: () => import("pages/Schedule"),
      },
      {
        path: "/History",
        component: () => import("pages/History"),
      },
      {
        path: "/NIR",
        component: () => import("pages/NIR"),
      },
      {
        path: "/News",
        component: () => import("pages/News"),
      },
      {
        name: "Weeks schedule",
        path: "/Schedule/weeks/:id",
        component: () => import("pages/WeeksSchedule"),
        props: true,
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
