import Vue from 'vue';
import Router from 'vue-router';
import index from '@/pages/index';

import about from '@/pages/about/about';
import introduce from '@/pages/about/introduce';
import honor from '@/pages/about/honor';
import culture from '@/pages/about/culture';
import partner from '@/pages/about/partner';

import news from '@/pages/news/news';
import newsIndex from '@/pages/news/newsIndex';
import media from '@/pages/news/media';
import topic from '@/pages/news/topic';
import industry from '@/pages/news/industry';

import financial from '@/pages/financial/financial';
import credit from '@/pages/financial/credit';
import iot from '@/pages/financial/iot';
import banking from '@/pages/financial/banking';

import offers from '@/pages/offers';
import contact from '@/pages/contact';
Vue.use(Router)

export default new Router({
	mode: 'history',
	// base: '/dist/',
	linkActiveClass: "active",
	routes: [
		{
			path: '/',
			name: 'index',
			meta: {
				index: '1'
			},
			component: index
		},
		{
			path: '/about',
			name: 'about',
			component: about,
			meta: {
				index: '2'
			},
			children: [{
				path: 'introduce',
				name: 'introduce',
				meta: {
					index: '2-1'
				},
				component: introduce,
			}, {
				path: 'honor',
				name: 'honor',
				meta: {
					index: '2-2'
				},
				component: honor,
			}, {
				path: 'culture',
				name: 'culture',
				meta: {
					index: '2-3'
				},
				component: culture,
			}, {
				path: 'partner',
				name: 'partner',
				meta: {
					index: '2-4'
				},
				component: partner,
			}]
		},
		{
			path: '/news',
			name: 'news',
			meta: {
				index: '3'
			},
			component: news,
			children: [{
				path: 'index',
				name: 'index',
				meta: {
					index: '3-1'
				},
				component: newsIndex,
			}, {
				path: 'index/:id',
				name: 'index',
				meta: {
					index: '3-1'
				},
				component: newsIndex,
			}, {
				path: 'media',
				name: 'media',
				meta: {
					index: '3-2'
				},
				component: media,
			}, {
				path: 'topic',
				name: 'topic',
				meta: {
					index: '3-3'
				},
				component: topic,
			}, {
				path: 'industry',
				name: 'industry',
				meta: {
					index: '3-4'
				},
				component: industry,
			}]
		},{
			path: '/financial',
			name: 'financial',
			component: financial,
			meta: {
				index: '4'
			},
			children: [{
				path: 'credit',
				name: 'credit',
				meta: {
					index: '4-1'
				},
				component: credit,
			}, {
				path: 'iot',
				name: 'iot',
				meta: {
					index: '4-2'
				},
				component: iot,
			}, {
				path: 'banking',
				name: 'banking',
				meta: {
					index: '4-3'
				},
				component: banking,
			}]
		},

		{
			path: '/offers',
			name: 'offers',
			meta: {
				index: '6'
			},
			component: offers
		},
		{
			path: '/contact',
			name: 'contact',
			meta: {
				index: '7'
			},
			component: contact
		},
	]
})
