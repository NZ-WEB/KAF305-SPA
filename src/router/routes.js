
const routes = [
  {
    path: '/',
    component: () => import('layouts/OwnLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Home') },
      { path: '/Teachers', component: () => import('pages/Teachers') },
      { path: '/Schedule', component: () => import('pages/Schedule') },
      { name: 'Group Schedule', path: '/Schedule/group/:id', component: () => import('pages/GroupSchedule') },
      { name: 'Group Weeks Schedule', path: '/Schedule/group/:id', component: () => import('pages/GroupWeeksSchedule') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
