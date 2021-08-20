$(".toggleChallengeExampleButton").click(function (){
    if($(this).siblings(".challengeExample").is(":visible")){
        $(this).siblings(".challengeExample").fadeOut('slow', function() {
              $(this).siblings(".toggleChallengeExampleButton").text("Show examples");
              $(this).siblings(".challengeDescription").fadeIn('slow');
            $(this).siblings(".exampleSplit")[0].style.marginLeft = "0%";
        });
    } else if($(this).siblings(".challengeExample").is(":hidden")){
            $(this).siblings(".challengeDescription").fadeOut('slow', function() {
            $(this).siblings(".toggleChallengeExampleButton").text("Show description");
            $(this).siblings(".challengeExample").fadeIn('slow');
            $(this).siblings(".exampleSplit")[0].style.marginLeft = "50%";
        });
    }
}
)