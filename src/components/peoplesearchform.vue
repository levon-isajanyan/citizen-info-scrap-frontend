<template>
    <div class="searchform">
            <form class="text-center">
                <div class="form-row">
                    <div class="col-md-3">
                        <div  class="form-group name">
                            <label for="inputName">Անուն</label>
                            <input  type="text" @keydown='forbiddenAction' @keydown.ctrl="forbiddenAction"   class="form-control" id="inputName" v-model.trim="name" v-on:click.contextmenu.right="disableLeftClick">
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group lastname">
                            <label for="inputLastname">Ազգանուն</label>
                            <input   type="text" @keydown='forbiddenAction' @keydown.ctrl="forbiddenAction" class="form-control" id="inputLastname" v-model.trim="lastName" v-on:click.contextmenu.right="disableLeftClick">
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group surname">
                            <label for="inputSurname">Հայրանուն</label>
                            <input type="text" @keydown='forbiddenAction' @keydown.ctrl="forbiddenAction" class="form-control" id="inputSurname" v-model.trim="surname" v-on:click.contextmenu.right="disableLeftClick">
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group birthdate">
                            <label for="inputDate">Ծնն. ամիս օր տարեթիվ</label>
                            <input  id="inputDate"  class="form-control" type="date" v-model="birthDate">
                        </div>
                    </div>
                </div>
                <button id="searchbutton" class="btn btn-primary" v-on:click="find()" :disabled='!isFilled'>
                    Փնտրել
                </button>
            </form>
            <div id="noresult" class="text-center" v-if="noResult">
                <p>
                    {{noSearchResult}}
                </p>
            </div>
            <div v-show="showTable"  id="resultTable" class="table-responsive text-center">
                <table class="table">
                    <thead>
                        <tr v-for="item in result.slice(0,1)">
                            <th>{{item.name}}</th>
                            <th>{{item.birth}}</th>
                            <th>{{item.registrationDistrict}}</th>
                            <th>{{item.registrationAdress}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in result.slice(1)" @mouseover="active = item" @mouseout="active = null" v-bind:class="{ active: active == item}" @click="thisRow(item)">
                            <td>
                                {{item.name}}
                            </td>
                            <td>
                                {{item.birth}}
                            </td>
                            <td>
                                {{item.registrationDistrict}}
                            </td>
                            <td>
                                {{item.registrationAdress}}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <citizen-data-confirm :citizenData="citizen">

            </citizen-data-confirm>
        </div>
</template>

<script>
    import axios from 'axios' //import axios form component
    import citizenDataConfirm from './citizenDataConf' //modal to confirm client selected row
    import{progressBarAnim} from '../mixins/progressBarAnimation'
    import {store} from '../store/store'
    import moment from 'moment'

    export default {
        name: "peoplesearchform",
        components: {
            citizenDataConfirm //Include modal confirmation componnet
        },
        mixins:[progressBarAnim],
        store : store,
        data:function(){

            return{

                name : null, //Citizen name option
                lastName : null, //Citizen last name option
                surname : null, //Citizen surname
                birthDate : null, //Citizen birth date option
                result:[], //Central election response server option to push data into array
                showTable: false, //Response result table hide
                active: '', //Option to add custom class onto active row
                citizen:'', //Option for modal to add citizen name into  confirmation modal
                noSearchResult:'Տվյալներ չեն գտնվել', //Dynamic option for notification , that no result found
                noResult : false, //Option to hide no result found UI element block
                storedName : store.state,
                storedLastName : store.state,
                storedSurname : store.state,
                storedBirth : store.state,
                storedCommunity : store.state,
                storedAdress : store.state

            }

        },
        computed:{

            //Invoke function when instance was created , for preventing against form button click  if name and last name hasn't filled yet
            isFilled () {

                return this.name && this.lastName; //Change this to play with form submit requirements

            }

        },
        methods:{

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

            //Call via  v-on:click help modal with confirmation about further steps against seleted table row
            thisRow(item){

                let itemCitzienInfo = item.name; //Statement for cirtizen name , surname , last name string
                let itemWhSpace = itemCitzienInfo.trim(); //Remove whitespace
                let res = itemWhSpace.split(" "); //Split citizen string info in to words
                let distTrim = item.registrationDistrict.trim();    //Remove whitespace
                let distAdress = item.registrationAdress.trim();    //Remove whitespace
                let Itemdate = item.birth.trim(); //Remove whitespace
                let selectedCitizenDate = moment(Itemdate,'DD-MM-YYYY').format('YYYY-MM-DD'); //COnver birth date format as required html5 standart
                this.$modal.show('confirmation'), //Method over citizenDataConf.vue to open as modal via vue-js-modal help
                this.citizen = item.name, //Bind selected row citizen name , last name , surname into already opened modal
                this.storedName.name = res[0], //Bind name into other form name input
                this.storedLastName.lastName = res[1], //Bind last name into other form last name input
                this.storedSurname.surname = res[2], //Bind surname into other form surname input
                this.storedBirth.birth = selectedCitizenDate, //Bind birth date into other form input type date value
                this.storedCommunity.registrationDistrict = distTrim, //Bind district to other form district input
                this.storedAdress.registrationAdress = distAdress //Bind adress to other form adress input

            },



            //Citizen search function via ajax call
            find() {
                let self = this;
                //Axios npm post into the central election database
                axios.post('http://localhost:8000/api/people', {

                    citizenName: this.name, //Binded data from name input via v-model
                    citizenLastName: this.lastName, //Binded data from last name input via v-model
                    citizenSurname: this.surname, //Binded data from surname input via v-model
                    citizenbirthDate: this.birthDate //Binded data from date value via v-model ( Default it bind data with hereby format ( MM - DD - YYYY)  )


                })
                .then(function (response) {

                      //Condition which based on response data length to show no result block or table
                      if(response.data.length <= 1){

                          self.noResult = true; //no result block show
                          //Condition if table and rendered items shows than set their value false , to hide them
                          if(self.showTable === true && self.rendTable === true){
                              self.showTable = false,
                              self.rendTable = false
                          }

                      }else{

                          self.showTable =true; //Table block
                          self.result = response.data; //Statement to assign emtyp array data option key response data from Central election  server
                          self.rendTable = true; //Show table with data
                          //Condition to check  if no result found notification value is true , than change it  to false
                          if(self.noResult === true){

                              self.noResult = false

                          }

                      }

                })
                .catch(function (error) {

                    alert(error)

                });
            }

        }
    }
</script>

<style scoped>

    /* no result found block style  */
    #noresult{
        color:#F65058;
        font-size: 1.5em;
        margin-top: 1.5em;
    }

    /* hover row style  */
    .active {
        background-color: #91B54D;
        cursor: pointer;
        -webkit-transition: background-color 0.5s ease-out;
        -moz-transition: background-color 0.5s ease-out;
        -o-transition: background-color 0.5s ease-out;
        transition: background-color 0.5s ease-out;
    }

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

    /* citizen search form result block style  */
    #resultTable{
        border:2px solid  #74D1EA;
        border-radius: 7px;
        margin-top: 1.5em;
    }

    /* citizen search form result block table style  */
    #resultTable table{
        background-color: transparent;
        margin-top: 2px;
        color : #F2F2F1;
    }

    /* citizen search form result block table td , th style  */
    #resultTable .table td, .table th {
        border-top: 1px solid #74D1EA;
    }

    /* citizen search form result block table  browser scroll style  */
    #resultTable::-webkit-scrollbar {
        width: 10px;
    }

    /* citizen search form result block table  browser scroll style  */
    #resultTable::-webkit-scrollbar-track {
        border-radius: 0px;
    }

    /* citizen search form result block table  browser scroll style  */
    #resultTable::-webkit-scrollbar-thumb {
        border-radius: 0px;
        background-color: #74D1EA;
        border-radius: 20px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
    }
</style>