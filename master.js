
$(document).ready(function () {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
    $(".select2").select2();
    $(".select2-container .select2-selection__arrow b").remove();
    // console.log($("#datepicker").length);
    
    if($("#datepicker").length){
        $("#datepicker").datepicker({ 
            autoclose: true, 
            todayHighlight: true,
            clearBtn: true
        });
    }
    

    $(".show-more-menu").on("click", function () {
        const check = $(this).hasClass("icon-double-down");
        if (check) {
            $(".more-menu").show();
            $(this).addClass("icon-double-up").removeClass("icon-double-down");
        } else {
            $(".more-menu").hide();
            $(this).addClass("icon-double-down").removeClass("icon-double-up");
        }
    });
    $(".detail .close").on("click", function () {
        $(".customer-detail").hide();
    });

    for(let i=1 ; i<= 12; i++) {
        $(`.dropdown${i} .item`).on("click", function (e) {
            $(`.dropdown${i} .item`).removeClass("active");
            $(this).addClass("active");
            $(`#dropdown${i}`).text($(this).text());
        });
    }
    $(".customer__info").on("click",function() {
        $(".customer-detail").show();
    });


    let elm = $(".content__table thead th");
    let totalWidth = 0;
    elm.each(function( index ) {
        totalWidth += elm[index].offsetWidth;
    });
    if(totalWidth > 0) {
        $(".content__table table").css("width",totalWidth);
    }
    $(".notification .close").on("click", function() {
        $(".notification").hide();
    });

    $('.toast').toast({ 
        animation: true, 
        autohide:false,
        delay: 2000 
    }); 
    $('.toast').toast('show'); 



 
    
});


