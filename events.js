var main = function(){

    $(".event-info").click(function(){
        $(this).find(".desc-hide").toggle();
    });
};

$(document).ready(main);
