import Vue from 'vue';
import router from './router';

import './public/style/icon.css';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './public/style/reset.less';
import './public/style/common.less';
import App from './App';

Vue.config.productionTip = false;
Vue.use(iView);
// router.beforeEach((to, from, next) => {
// 	console.log(to.name)
// })
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
})