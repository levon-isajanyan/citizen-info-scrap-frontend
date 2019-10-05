<template>
    <div id="notfound" class="align-middle">
        <p class="text-center">
            {{notFoundText}}
        </p>
    </div>
</template>

<script>
    import {fitAppToScreen} from '../mixins/fullScreenPage' //Import fullScreenPage mixin into 404 page

    export default {

        name: "pageDoesNotExist",
        mixins : [fitAppToScreen], //mixins option
        data:function(){
          return {

              notFoundText : 'Page not found' //Dynamic text to show  when route does not exist

          }
        },


    }
</script>

<style scoped>

    #notfound{
        background: url(../assets/background.svg) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        color:  #F1F2F1;
        font-size: 1.4em;
        position: relative;
        height: 100%;
    }

    #notfound > p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

</style>