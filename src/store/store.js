import Vue from 'vue' //Import vue
import Vuex from 'vuex' //Import vuex

Vue.use(Vuex) //middleware for vuex invoking

export const store = new Vuex.Store({
    state: {

        birth:'', //Birth data state
        registrationAdress:'', //Adress data state
        registrationDistrict:'', //District data state
        name:'', //Name data state
        lastName:'', //Last name state
        surname:'' //Surname state

    }

})
