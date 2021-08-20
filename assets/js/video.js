$('#playbutton').bind("click", function(e) {
    if($(this).find('#play-icon').hasClass('fa-play-circle')){
      console.log("lets play the video"); 
    $('.hideOnPlay').addClass('play');
    $('.fa-play-circle').removeClass('fa-play-circle').addClass('fa-pause-circle'); 
    $('.teaser-video').addClass('active');
    $('#video-overlay').removeClass('overlay');
    document.getElementById('teaser-video').play();  
    } else if ($(this).find('#play-icon').hasClass('fa-pause-circle')){
        document.getElementById('teaser-video').pause();  
        $('.fa-pause-circle').removeClass('fa-pause-circle').addClass('fa-play-circle'); 
        $('.hideOnPlay').removeClass('play');
        $('#video-overlay').addClass('overlay');

        console.log("stop the video");
    }
});

$('#video-overlay').bind("mouseout mouseleave", function(e) {
   $('.fa-pause-circle').hide(); 
});

function toggleIcon(){
    
}
