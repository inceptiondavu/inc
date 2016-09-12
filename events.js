var main = function(){

    var i = 0;

    $(".event-info").click(function(){
        $(this).find(".desc-hide").toggle();
        if( i === 0){
            $(this).find(".arrow").html("&#9650;");
            i = 1;
        }
        else{
            $(this).find(".arrow").html("&#9660;");
            i = 0;
        }
    });
    
};

$(document).ready(main);
