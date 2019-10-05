<template>
  <div  id="hello">
    <div class="container text-center">
      <div class="row">
        <div class="col-sm-12">
            <modal>

            </modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {fitAppToScreen} from '../mixins/fullScreenPage' //Full screen page mixin import
import modal from './warningnotification'



export default {

  name : 'appWrapper', //Invoke single page component immidiately
  mixins : [fitAppToScreen], //mixins option
  components : {

      modal //Register child component

  }


}
</script>

<style>




</style>
