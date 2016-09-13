var main = function(){

    var i = 0;

    $(".event-info").click(function(){
        
        //toggle hide event description
        $(this).find(".desc-hide").toggle();
        
        //toggle arrow
        if( i === 0){
            $(this).find(".arrow").html("&#9650;");
            i = 1;
        }
        else{
            $(this).find(".arrow").html("&#9660;");
            i = 0;
        }
    });
    
    //move the navbar with scroll
        $(window).scroll(function(){
            var height = $("#heading").outerHeight(true);
            var win_height = $(window).scrollTop();
            if(win_height > height){
                $("nav").addClass("navbar-fixed-top");
                $(".navbar").css("opacity", "0.6");
            }
            else{
                $("nav").removeClass("navbar-fixed-top");
                $(".navbar").css("opacity", "1");
            }
        });
    
};

$(document).ready(main);
