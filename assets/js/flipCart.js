$(".flip-card").mouseover(function (){
    $(this).find(".flip-card-text").addClass('flip-active');
}
)
$(".flip-card").mouseout(function (){
    $(this).find(".flip-card-text").removeClass('flip-active');
}
)