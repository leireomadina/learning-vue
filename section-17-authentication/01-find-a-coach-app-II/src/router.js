import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsRecieved from './pages/requests/RequestsRecieved.vue';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index.js';

const router = createRouter({
	mode: 'hash',
	history: createWebHistory(),
	routes: [
		{ path: '/', redirect: '/coaches' },
		{ path: '/coaches', component: CoachesList },
		{
			path: '/coaches/:id',
			component: CoachDetail,
			//passes the dynamic id value
			props: true,
			children: [
				{ path: 'contact', component: ContactCoach } // example: coaches/c1/contact
			]
		},
		{
			path: '/register',
			component: CoachRegistration,
			meta: { requiresAuth: true }
		},
		{
			path: '/requests',
			component: RequestsRecieved,
			meta: { requiresAuth: true }
		},
		{ path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
		{ path: '/:notFound(.*)', component: NotFound }
	]
});

// global navigation guard
router.beforeEach(function(to, _, next) {
	if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
		next('/auth');
	} else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
		next('/coaches');
	} else {
		next();
	}
});

export default router;
