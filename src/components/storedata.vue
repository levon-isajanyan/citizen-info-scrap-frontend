<template>
    <div class="container">
        <div class="row">
            <steps-loading-bar>

            </steps-loading-bar>
            <storebody>

            </storebody>
        </div>
    </div>
</template>

<script>
    import {fitAppToScreen} from '../mixins/fullScreenPage' //Full screen page mixin import
    import stepsLoadingBar from './stepsLoadingBar' //Loading bar component import
    import storebody from './storeBody' //Import stroreBody
    import {progressFinsih} from '../mixins/finalProgress' //Progress bar constant script import

    export default {
        name: "storedata",
        mixins:[fitAppToScreen,progressFinsih], //Mixin to fit screen to full size of browser,animation
        components:{

            stepsLoadingBar, //Loading bar component
            storebody //Load storebody component

        }

    }
</script>

<style scoped>

</style>