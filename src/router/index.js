import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '',
		name: 'home-page',
		component: () => import('../components/FormSection.vue')
	},
	{
		path: '/ticket_filter',
		name: 'ticket-filter',
		component: () => import('../components/FilterSection.vue')
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
