<template>
    <div class="col-sm-12">

        <section>
            <div class="titleheight text-center">
                <h6>
                    {{searchPageTitle}}
                </h6>
                <hr>
            </div>
            <people-search-form>

            </people-search-form>
        </section>

    </div>
</template>

<script>
    import peopleSearchForm from './peoplesearchform' //import search form into this component

    export default {

        name: "peopleSearchBody",
        data:function () {

            return{

                searchPageTitle : 'Մարդկանց որոնում' //people search block title

            }

        },

        components:{

            peopleSearchForm //component option to add form into search body

        }

    }

</script>

<style scoped>

    /* title block */
    .titleheight {
        color: #F1F2F1;
    }

    /* title style  */
    .titleheight > h6{
        font-size: 2em;
    }

    /* body title hr  */
    .titleheight >hr{
        border-top: 1px solid #F1F2F1;
        max-width: 17%;
    }

</style>