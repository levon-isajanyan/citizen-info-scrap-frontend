<template>
    <div class="searchform">
        <form class="text-center">
            <div class="form-row">
                <div class="col-md-3">
                    <div  class="form-group name">
                        <label for="storeName">Անուն</label>
                        <input  type="text" @keydown='forbiddenAction' @keydown.ctrl="forbiddenAction" class="form-control"  id="storeName" v-model="storedName.name" v-on:click.contextmenu.right="disableLeftClick">
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group lastname">
                        <label for="storeLastname">Ազգանուն</label>
                        <input  @keydown='forbiddenAction' @keydown.ctrl="forbiddenAction" class="form-control" id="storeLastname" v-model="storedLastName.lastName" v-on:click.contextmenu.right="disableLeftClick">
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group surname">
                        <label for="storeSurname">Հայրանուն</label>
                        <input  @keydown='forbiddenAction' @keydown.ctrl="forbiddenAction" type="text" class="form-control" id="storeSurname" v-model="storedSurname.surname" v-on:click.contextmenu.right="disableLeftClick">
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group birthdate">
                        <label for="storeDate">Ծնն. ամիս օր տարեթիվ</label>
                        <input @keydown='forbiddenAction' @keydown.ctrl="forbiddenAction" id="storeDate"  class="form-control" type="date" v-model="storedBirth.birth" v-on:click.contextmenu.right="disableLeftClick">
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="col-md-6">
                    <div  class="form-group name">
                        <label for="storeCommunity">Մարզ համայնք</label>
                        <input @keydown='forbiddenAction' @keydown.ctrl="forbiddenAction" type="text" class="form-control" id="storeCommunity" v-model="storedCommunity.registrationDistrict" v-on:click.contextmenu.right="disableLeftClick">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group lastname">
                        <label for="storeAdress">Հասցե</label>
                        <input  @keydown='forbiddenAction' @keydown.ctrl="forbiddenAction" class="form-control" id="storeAdress" v-model="storedAdress.registrationAdress" v-on:click.contextmenu.right="disableLeftClick">
                    </div>
                </div>
            </div>
            <button id="storebutton" class="btn btn-primary" @click="storeData()" :disabled='!isFilled'>
                Պահպանել
            </button>
        </form>
       <stored-success-modal>

       </stored-success-modal>
    </div>
</template>

<script>
    import {store} from '../store/store'
    import axios from 'axios'
    import storedSuccessModal from './dataStoredModal'

    export default {

        name: "storeForm",
        components: {

            storedSuccessModal

        },
        data: function () {

            return{

                storedName : store.state, //Data management for name v-model
                storedLastName : store.state, //Data management for last name v-model
                storedSurname : store.state, //Data management for surname v-model
                storedBirth : store.state, //Data management for birth v-model
                storedCommunity : store.state, //Data managment for name v-model
                storedAdress : store.state

            }

        },
        computed:{

            //Invoke function when instance was created , for preventing against form button click  if name and last name hasn't filled yet
            isFilled () {

                return this.storedName.name && this.storedLastName.lastName; //Change this to play with form submit requirements

            }

        },
        methods : {

            //Prevent typing special characters and letters in input
            forbiddenAction: function(e){

                const nonEnglish = RegExp('^[ա-ֆԱ-Ֆ ]+'); //Only armenian letters

                if (!nonEnglish.test(e.key)

                    && e.keyCode != 8 /* allow backspace */
                    && e.keyCode != 127 /* allow delete */
                    && e.keyCode != 39 /* allow right */
                    && e.keyCode != 37 /* allow left */

                ){

                    e.preventDefault();

                }
            },

            //For semi security reasons disable context menu  to prevent user from  right click
            disableLeftClick: function(event){

                event.preventDefault();

            },

            storeData(){

                let current = this;
                axios.post('http://localhost:8000/api/store', {

                    setName : current.storedName.name , //Vuex option which this form input get from store.js
                    setLastName : current.storedLastName.lastName, //Vuex option which this form input get from store.js
                    setSurname : current.storedSurname.surname, //Vuex option which this form input get from store.js
                    setBirthDate : current.storedBirth.birth, //Vuex option which this form input get from store.js
                    setCommunity : current.storedCommunity.registrationDistrict, //Vuex option which this form input get from store.js
                    setAdress : current.storedAdress.registrationAdress //Vuex option which this form input get from store.js


                })
                    .then(function (response) {

                        current.$modal.show('successStoredModal'); //Just show success modal via promise

                    })
                    .catch(function (error) {

                        console.log(error);

                    });



            }

        }
    }
</script>

<style scoped>
    /* citizen search from style  */
    .searchform > form{
        padding: 1em;
        background-color: rgba(255, 255, 255, 0.56);
        border-radius: 20px;
        -webkit-box-shadow: -1px 6px 37px 1px rgba(0,0,0,0.75);
        -moz-box-shadow: -1px 6px 37px 1px rgba(0,0,0,0.75);
        box-shadow: -1px 6px 37px 1px rgba(0,0,0,0.75);
    }

    /* citizen search form label style  */
    .searchform > form label{
        color: #F2F2F1;
    }

    /* citizen search form-group   */
    .searchform > form .form-group{
        border-radius: 12px;
    }

    /* citizen search form name style  */
    .name{
        background-color: #5F4B8B;
        padding-left: 5px;
        padding-right: 5px;
        padding-bottom: 3px;
    }

    /* citizen search form last name style  */
    .lastname{
        background-color: #91B54D;
        padding-left: 5px;
        padding-right: 5px;
        padding-bottom: 3px;
    }

    /* citizen search surname style  */
    .surname{
        background-color: #6B5B95;
        padding-left: 5px;
        padding-right: 5px;
        padding-bottom: 3px;
    }

    /* citizen search form date style  */
    .birthdate{
        background-color: #74D1EA;
        padding-left: 5px;
        padding-right: 5px;
        padding-bottom: 3px;
    }

    /* citizen search form button style  */
    .searchform button{
        background-color: transparent;
        border: 2px solid #0275D8;
    }
</style>