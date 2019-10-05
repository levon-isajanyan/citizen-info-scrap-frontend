<template>
    <div class="col-sm-12 loadingheight">

        <div id="progresscontainer" class="progress">


            <div class="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">

            </div>

        </div>

        <div id="svgblock">

            <div id="first">

                <svg width="80px" height="80px" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

                    <!-- Generator: Sketch 43.1 (39012) - http://www.bohemiancoding.com/sketch -->
                    <desc>
                        Created with Sketch.
                    </desc>

                    <defs>

                        <circle id="path-1" cx="40" cy="40" r="40">

                        </circle>

                    </defs>

                    <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">

                        <g id="People-search-page-2" transform="translate(-107.000000, -49.000000)">

                            <g id="Group" transform="translate(107.000000, 49.000000)">

                                <mask id="mask-2" fill="white">
                                    <use xlink:href="#path-1"></use>
                                </mask>

                                <use id="Oval" fill="#74D1EA" xlink:href="#path-1"></use>

                                <text id="2" font-family="Times-Bold, Times" font-size="36" font-weight="bold" fill="#F1F2F1">

                                    <tspan x="31.1630435" y="52.2608696">1</tspan>

                                </text>
                            </g>

                        </g>
                    </g>

                </svg>

            </div>





            <div id="second">
                <svg width="80px" height="80px" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <!-- Generator: Sketch 43.1 (39012) - http://www.bohemiancoding.com/sketch -->
                    <desc>Created with Sketch.</desc>
                    <defs>
                        <circle id="path-1" cx="40" cy="40" r="40"></circle>
                    </defs>
                    <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="People-search-page-2" transform="translate(-107.000000, -49.000000)">
                            <g id="Group" transform="translate(107.000000, 49.000000)">
                                <mask id="mask-2" fill="white">
                                    <use xlink:href="#path-1"></use>
                                </mask>
                                <use id="Oval" fill="#74D1EA" xlink:href="#path-1"></use>
                                <text id="2" font-family="Times-Bold, Times" font-size="36" font-weight="bold" fill="#F1F2F1">
                                    <tspan x="31.1630435" y="52.2608696">2</tspan>
                                </text>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>

            <div id="third">
                <svg width="80px" height="80px" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <!-- Generator: Sketch 43.1 (39012) - http://www.bohemiancoding.com/sketch -->
                    <desc>Created with Sketch.</desc>
                    <defs>
                        <circle id="path-1" cx="40" cy="40" r="40"></circle>
                    </defs>
                    <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="People-search-page-2" transform="translate(-107.000000, -49.000000)">
                            <g id="Group" transform="translate(107.000000, 49.000000)">
                                <mask id="mask-2" fill="white">
                                    <use xlink:href="#path-1"></use>
                                </mask>
                                <use id="Oval" fill="#74D1EA" xlink:href="#path-1"></use>
                                <text id="2" font-family="Times-Bold, Times" font-size="18" font-weight="bold" fill="#F1F2F1">
                                    <tspan x="21.1630435" y="45.2608696">Soon</tspan>
                                </text>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>


    export default {

        name: "stepsLoadingBar",

    }

</script>

<style scoped>

    /* progress bar container */
    #progresscontainer{
        width: 100%;
        -webkit-box-shadow: 1px 11px 35px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 1px 11px 35px 0px rgba(0,0,0,0.75);
        box-shadow: 1px 11px 35px 0px rgba(0,0,0,0.75);
        overflow: unset!important;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }

    /* circle svg block */
    #svgblock{
        display: block;
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        height: 41%;
    }

    /* first svg */
    #first{
        display: inline-block;
        position: absolute;
        top: 0;
        left: -15px;
    }

    /* second svg */
    #second{
        display: inline-block;
        position: absolute;
        top: 0;
        left: 47%;
    }

    /* last svg */
    #third{
        display: inline-block;
        position: absolute;
        top: 0;
        left: 94%;
    }

</style>