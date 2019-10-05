<template>
    <div class="container">
        <div class="row">
            <steps-loading-bar>

            </steps-loading-bar>
            <search-page-body>

            </search-page-body>
        </div>
    </div>
</template>

<script>
    import {fitAppToScreen} from '../mixins/fullScreenPage' //Full screen page mixin import
    import stepsLoadingBar from './stepsLoadingBar' //Loading bar component import
    import searchPageBody from'./peopleSearchBody' //people search component inport

    export default {

        name: "peoplesearch",
        mixins:[fitAppToScreen], //Mixin to fit screen to full size of browser
        components:{

           stepsLoadingBar, //Loading bar component
           searchPageBody //Main search page body

        }

    }
</script>

<style scoped>

</style>