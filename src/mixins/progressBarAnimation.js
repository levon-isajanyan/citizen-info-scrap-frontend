export const progressBarAnim = {

    mounted:function () {

        $( document ).ready(function () {

            let progressBarInitial = 0;
            $('.progress-bar').css('-webkit-transition','width 1.1s ease', 'transition','width 1.1s ease');
            $('#progresscontainer > div').css('width',progressBarInitial + '%');
            $('#searchbutton').click(function () {

                    $('#progresscontainer > div').css('width','40' + '%');

            });
            $('#nextstepagreement').click(function () {

                    $('#progresscontainer > div').css('width','10' + '%');

            });


        })

    }

}