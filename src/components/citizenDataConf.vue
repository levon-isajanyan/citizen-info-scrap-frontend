<template>
    <modal  name="confirmation" :clickToClose="false" :draggable="true" :adaptive="true">
        <section>
            <h6 class="text-center">
                Հաստատել
            </h6>
            <div class="jumbotron">
                Դուք պատրաստվում էք մշակել  {{citizenData}} անձնական տվյալները :
            </div>
            <div class="container text-center">
                <router-link to="/storedata">
                    <button type="button" id="nextstepagreement" class="btn  float-left">
                        Հաստատել
                    </button>
                </router-link>
                <button type="button" class="btn  float-right" @click="cancelCitizenConfirmation">
                    Մերժել
                </button>
            </div>

        </section>

    </modal>
</template>

<script>
    import Vue from 'vue' //import vue js
    import VModal from 'vue-js-modal' //iport vue-js-modal

    Vue.use(VModal); //middleware to invoke vuejs modal npm

    export default {
        name: "citizenDataConf",
        props:['citizenData'], //props to use citizen data in parent data option
        methods:{


            //Method to hide modal citizen data next step modal window
            cancelCitizenConfirmation(){


                this.$modal.hide('confirmation')


            },

        }
    }
</script>

<style scoped>

    /* modal style */
    .v--modal {
        background: #2D2926;
        border: 1px solid #74D1EA;
        border-radius: 8px;
        -webkit-box-shadow: 2px 2px 22px 2px rgba(0,0,0,0.75);
        -moz-box-shadow: 2px 2px 22px 2px rgba(0,0,0,0.75);
        box-shadow: 2px 2px 22px 2px rgba(0,0,0,0.75);
        color: #F1F2F1;
        padding: 1em 2em;

    }

    /* modal title style */
    .v--modal > section > h6{
        font-size: 1.8em;
    }

    /* modal text style */
    .v--modal > section > .jumbotron{
        font-size: 1.1em;
        background-color: inherit !important;
        padding-bottom: 0 !important;
    }

    /* modal button style */
    .v--modal  button{
        padding: 0.2em 0.9em !important;
        background-color: transparent!important;
        color: #F1F2F1 !important;
        border: 1px solid #74D1EA !important;
        border-radius: 8px !important;
    }

    /* modal button hover style */
    .v--modal  button:hover{
        color: #91B54D!important;
    }

</style>