$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.row-offcanvas').toggleClass('active')
  })

  $('a').on('click', function(){
    let alink_id = $(this).attr('id');
    $("#"+alink_id).toggleClass("active");
    // Show the selected one:
    let atask_id = "task-".concat(alink_id.slice(-3));
    $("#"+atask_id).toggleClass("hidden");
  })

})
