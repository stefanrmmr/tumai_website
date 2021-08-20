var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active-accordion");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else { 
      panel.style.display = "block";
    }
  });
};

$(".accordion").click(function () {
    var iconPlus = $(this).find('.fa-plus-circle');
    var iconMinus = $(this).find('.fa-minus-circle');
    if(iconPlus.length){
        iconPlus.removeClass('fa-plus-circle').addClass("fa-minus-circle");
    } else if(iconMinus.length){
        iconMinus.removeClass('fa-minus-circle').addClass("fa-plus-circle");
    }
});
