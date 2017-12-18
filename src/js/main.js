$(document).ready(function() {
$('.none, .half-year, .nine-month, .one-year, .two-years').on('click', function() {
  $('.choose')
    .removeClass()
    .addClass('choose active_' + $(this).attr('class'))

    if($('.active_sub').hasClass('none')) {
      $('.active_sub').addClass('active_none')
    }
    if($('.active_sub').hasClass('half-year')) {
      $('.active_sub').addClass('active_half-year')
    }
    if($('.active_sub').hasClass('nine-month')) {
      $('.active_sub').addClass('active_nine-month')
    }
    if($('.active_sub').hasClass('one-year')) {
      $('.active_sub').addClass('active_one-year')
    }
    if($('.active_sub').hasClass('two-years')) {
      $('.active_sub').addClass('active_two-years')
    }
  })
})
