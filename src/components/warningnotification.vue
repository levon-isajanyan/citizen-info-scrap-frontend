<template>

        <modal  name="warning"  :adaptive="true" :clickToClose="false" :draggable="true">
            <section>
                <h6 class="text-center">
                    {{notificationTitle}}  !!!
                </h6>
                <p>
                    {{notificationText}}
                </p>
                <div class="container text-center">
                        <router-link to="/find">
                            <button type="button" class="btn  float-left" v-on:click="proceed()">
                                    {{agree}}
                            </button>
                        </router-link>
                        <button type="button" class="btn  float-right" v-on:click="hide()">
                            {{disagree}}
                        </button>
                </div>

            </section>

        </modal>

</template>

<script>

    import VModal from 'vue-js-modal' //import vue-js-modal npm
    import Vue from 'vue' //import vue npm

    Vue.use(VModal); //register modal

    export default {

        name : 'warningnotification',
        data:function () {
            return {

                notificationTitle : 'Զգուշացում', //Modal title data
                notificationText : 'Ծառայությունը ներկայացվում է , այնպես ինչպես  կա ։ Ծառայության ցանկացած անօրինական օգտագործումից բխող ցանկացած արարք , որը պարունակում է Հայաստանի Հանրապետության քրեական օրենսգեւքում , արգելվում  է ։ Տվյալ ծառայությնունը կարգավորվում է ըստ ՀՀ օրենքների եւ սահմանդրության ։ ', //Modal text data
                agree : 'Համաձայն եմ', //Agree button data
                disagree : 'Լքել կայքը', //Disagree button data
            }
        },
        methods:{

            //V-on:click directive method to close modal
            hide() {

                this.$modal.hide('warning');

            },
            //V-on:click directive method to proceed to other page
            proceed() {

                this.$modal.hide('warning');

            }


        },

        //Lifecycle hook
        mounted:function () {

            this.$nextTick(function () {

                //Checking route to call vue-js-modal
                if( this.$route.path == '/' ){

                    this.$modal.show('warning') //Call modal

                }

            })
        }

    }

</script>

<style>



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
    .v--modal > section > p{

        font-size: 1.1em;

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