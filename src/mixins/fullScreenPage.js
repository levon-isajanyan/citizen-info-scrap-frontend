
export const fitAppToScreen = {

    //Mixin to add created hook to components to make app full page fit , without scrolling
    created : function () {
        $( document ).ready(function() {

            /* Set windows height to app main wrapper height */
            $('#app').css( "height", $(window).height() );

            //Loading bar height
            $('.loadingheight').css( "height", $(window).height() * 20 / 100  );
            //tittle height
            $('.titleheight').css( "height", $(window).height() * 10 / 100  );
            //searchfrom height
            $('.searchform').css( "height", $(window).height() * 20 / 100  );
            //result table height
            $('#resultTable').css( "height", $(window).height() * 50 / 100  );
            /* Call resize function after browser will be resized to calculate block heights */
            $( window ).resize(function() {
                $('#app').css( "height", $(window).height() );
                $('.loadingheight').css( "height", $(window).height() * 20 / 100  );
                $('.titleheight').css( "height", $(window).height() * 10 / 100  );
                $('.searchform').css( "height", $(window).height() * 20 / 100  );
                $('#resultTable').css( "height", $(window).height() * 40 / 100  );
            });


        })

    }


}
