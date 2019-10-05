export const progressFinsih = {

    mounted:function () {

        $( document ).ready(function () {

                //Progress container set
                $('#progresscontainer > div').css('width','60' + '%');

                //Progress container set function call
                $('#storebutton').click(function () {

                    $('#progresscontainer > div').css('width','93' + '%'); //Progress container set after store button

                })

        })

    }

}