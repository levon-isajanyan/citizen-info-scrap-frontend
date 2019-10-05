<template>
    <div class="col-sm-12">

        <section>
            <div class="titleheight text-center">
                <h6>
                    {{storeBodyTitle}}
                </h6>
                <hr>
            </div>
            <store-form>

            </store-form>
        </section>

    </div>
</template>

<script>
    import storeForm from './storeForm' //import into store body form component
    export default {
        name: "storeBody",
        components: {
            storeForm //store component
        },
        data:function () {

            return{
                storeBodyTitle : 'Պահպանել տվյալները ' //Title option for storedata component
            }

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