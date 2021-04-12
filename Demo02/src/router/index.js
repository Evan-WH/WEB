import Router from 'vue-router'
import Vue from 'vue'
import Login from '../views/Login.vue'
import Four from '../views/Test_4/index.vue'
import Five from '../views/Test_5/index.vue'
import Six from '../views/Test_6/index.vue'
import Seven from '../views/Test_7/index.vue'
import Eight from '../views/Test_8/index.vue'
import Nine from '../views/Test_9/index.vue'

// 安装路由
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/Four',
        name: 'Four',
        component: Four
    },
    {
        path: '/Five',
        name: 'Five',
        component: Five
    },
    {
        path: '/Six',
        name: 'Six',
        component: Six
    },
    {
        path: '/Seven',
        name: 'Seven',
        component: Seven
    },
    {
        path: '/Eight',
        name: 'Eight',
        component: Eight
    },
    {
        path: '/Nine',
        name: 'Nine',
        component: Nine
    },
    ]
})