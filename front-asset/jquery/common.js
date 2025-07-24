//Toggle Nav//
document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("menu");
    var sticky = header.offsetTop;

    window.onscroll = function() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    };

    window.onresize = function() {
        sticky = header.offsetTop;
    };

    sticky = header.offsetTop;
});


$(document).ready(function() {
    $('.toggleNav').click(function() {
        // $(this).toggleClass('open');
        $('.menu').toggleClass('menu_open');
        $('body').toggleClass('no_scroll');
    });
});
//Toggle Nav Ends//

//New Modal Open Close//
function open_modal(self) {
    $(self).addClass("modal_open");
    $("body").addClass("no_scroll");
}

function close_modal(self) {
    $(self).closest(".modal_open").removeClass("modal_open");
    $("body").removeClass("no_scroll");
}

// function get_youtube_thum_src($url, $thumb_size='default'){
//     $thumb_size_arr=array('default','hqdefault','mqdefault','sddefault','maxresdefault');
//     if(in_array($thumb_size, $thumb_size_arr)==false){
//         $thumb_size='default';
//     }

//     $yTid_1=explode("?v=", $url);
//     $yTid_2=explode("?si=", $url);
//     $yTid_3=explode("/shorts/", $url);

//     if(count($yTid_1)>1){
//         return "http://img.youtube.com/vi/".$yTid_1[1]."/".$thumb_size.".jpg";
//     }else{
//         if(count($yTid_2)>1){
//             return "http://img.youtube.com/vi/".$yTid_2[1]."/".$thumb_size.".jpg";
//         }else{
//             if(count($yTid_3)>1){
//                 return "http://img.youtube.com/vi/".$yTid_3[1]."/".$thumb_size.".jpg";
//             }
//         }
//     }
// }

//Loader
function addLoader() {
    $("body").append("<div style='position: fixed; top: 0; left: 0; right:0; bottom:0; z-index:99999999; display:grid; align-items:center; justify-content:center; background-color:#c0c0c038;' id='loader'><div class='spinner-border text-primary'></div></div>");
}

function removeLoader(ele) {
    $(ele).remove();
}
$(document).on({
    ajaxStart: function() {
        addLoader();
    },
    ajaxStop: function() {
        removeLoader("#loader");
    }
});
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});