import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';


const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			//our-domain.com/teams
			path: '/teams',
			// the component we want to render with that endpoint
			component: TeamList
		},
		{
			path: '/users',
			component: UsersList
		},
    {
      path: '/teams/:teamId',
      component: TeamMembers
    }
	],
  // overrides the default class name defined by router view
  linkActiveClass: 'active'
});
const app = createApp(App);
app.use(router);

app.mount('#app');
