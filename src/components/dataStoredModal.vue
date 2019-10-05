<template>
    <modal name="successStoredModal" :adaptive="true" :clickToClose="false">
        <section class="text-center">
            <h6>
                {{citizenSuccessTitle}}
            </h6>
            <p id="storemodaltext">
                {{citizenAddedSuccess}}
            </p>
            <div class="container text-center">
                <button type="button" id="storemodalbutton" class="btn  float-right" @click="hideSuccessModal()">
                    {{close}}
                </button>
            </div>

        </section>
    </modal>
</template>

<script>
    import vue from 'vue' //import vue.js library
    import VModal from 'vue-js-modal' //import vue-js-modal library

    vue.use(VModal); //

    export default {
        name: "dataStoredModal",
        data : function () {
            return{

                citizenSuccessTitle : 'Շնորհակալություն', //Data option for data stored successfull modal title
                citizenAddedSuccess : 'Տվյալները ավելացվել են Ձեր տվյալների բազային',  //Data option for data stored successfull modal text
                close : 'Փակել պատուհանը' //Data option for data stored successfull modal button

            }
        },
        methods:{

            //Hide modal
            hideSuccessModal(){

                this.$modal.hide('successStoredModal'); //method to hide opened modal

            }

        }
    }
</script>

<style scoped>
    /* modal button position */
    #storemodalbutton{
        position: absolute;
        bottom: 2em;
        left: 50%;
        transform: translateX(-50%);
    }
    /* modal text position */
    #storemodaltext{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 70%;
    }
</style>