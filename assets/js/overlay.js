$('.registration-tab').on('click', function(e) {
    $('.active-registration-tab').removeClass('active-registration-tab');
    $(this).addClass('active-registration-tab');
    var currentTabIndex = $(this).index();
    $('.tab-pane:eq('+currentTabIndex+')').addClass('active').parents('.tab-content').find('.tab-pane').not($('.tab-pane:eq('+currentTabIndex+')')).removeClass('active'); 
});

$('.registration-select-item').on('click', function(e) {
    console.log('clicked');
    var $selectItem = $(this).parent('.registration-select-items');
    console.log($selectItem);
    $selectItem.find('.selected').removeClass('selected');
    $(this).addClass('selected');

});