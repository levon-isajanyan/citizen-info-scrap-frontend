import Vue from 'vue' //import vue npm
import Router from 'vue-router' //import vue-router npm
import peoplesearch from '../components/peoplesearch' //import navbar component
import notificationPage from '../components/Notification' //import Notification component
import pageNotFound from '../components/404' //import Notification component
import storedata from '../components/storedata' //import store data page

Vue.use(Router) //middleware call router each time

export default new Router({
    //Routes array
    routes: [
        {

            path: '/', //route path (url path)
            name: 'appWrapper', //component name
            component: notificationPage //imported component (es5 feature)

        },
        {

            path: '/find', //route path (url path)
            name: 'peoplesearch', //component name
            component:peoplesearch //imported component (es5 feature)
        },
        {

            path: '/storedata', //route path (url path)
            name: 'storedata', //component name
            component: storedata //imported component (es5 feature)
        },
        {

            path: '*', //route path (url path)
            name: 'pageDoesNotExist', //component name
            component: pageNotFound,  //imported component (es5 feature)

        }

    ]
})