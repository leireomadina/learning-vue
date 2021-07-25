import { createRouter, createWebHistory } from 'vue-router';

import TeamList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			redirect: '/teams'
		},
		{
			name: 'teams',
			//our-domain.com/teams
			path: '/teams',
			// the component we want to render with that endpoint
			// component: TeamList,
			meta: { needsAuth: true },
			components: {
				default: TeamList,
				footer: TeamsFooter
			},
			// alias: '/'
			children: [
				{
					name: 'team-members',
					path: ':teamId',
					component: TeamMembers,
					props: true
				}
			]
		},
		{
			path: '/users',
			// component: UsersList
			components: {
				default: UsersList,
				footer: UsersFooter
			},
			beforeEnter(to, from, next){
				console.log('users beforeEnter');
				console.log(to, from ,next);
				// confirms every navigation to users page
				next();
			}
		},
		{
			path: '/:notFound(.*)',
			// redirect: '/teams',
			component: NotFound
		}
	],
	// overrides the default class name defined by router view
	linkActiveClass: 'active',
	scrollBehavior(to, from, savedPosition) {
		console.log(to, from, savedPosition);
		if(savedPosition) {
			return savedPosition;
		}
		return { 
			// scrolls to the top of the page
			left: 0,
			top: 0
		}
	}	
});

// nagivation guards that executes before any nagivation happens
router.beforeEach(function(to, from, next){
	console.log('Global beforeEach');
	console.log(to, from, next);
	next(); // allows all navigation actions
	// next(false); // cancels all navigation actions
	// next('/users'); // goes to the users route page
	// next({name: 'team-members', params: {teamId: 't2'}}); // creates an infinite loop: use a conditional
	// if(to.name === 'team-members') {
	// 	next();
	// } else {
	// 	next({name: 'team-members', params: {teamId: 't2'}});
	// }
	if(to.meta.needsAuth) {
		console.log('needs auth');
		if(to.meta.needsAuth) {
			// logic to navigate to this page only if the user is logged in
			next();
		}
	}
});

router.afterEach(function(to, from){
	// triggers only after a navigation action ends 
	console.log('Global afterEach');
	console.log(to, from);
	// possible use: sending analytics data to the server
});

export default router;