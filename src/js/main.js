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

  $('.sub').click(function() {
      $('input[name="mark"]', this).prop("checked",true);
  });
  $('input[type=radio]:not(:checked)').hide();
    $('.sub').on('click', function () {
      $('input[type=radio]').show();
      $('input[type=radio]:not(:checked)').hide();
  });

  // var number = $('.number');
  // $('.plus').on('click' , function() {
  //   count += 1;
  //   return number.html(count);
  // });
  //
  // $('.minus').on('click' , function() {
  //   count -= 1;
  //   number.html(count);
  //   if(number.html(count) > 3){ // if the new number is >0
  //       $(".minus").prop("disabled", false); // remain enable of - button
  //     }else{
  //       $(".minus").prop("disabled", true); // otherwise disable - button
  //     }
  // });

  var count = 3;
  var number = $('.number');
  $(".minus").prop("disabled", true);

  $(document).on("click", "button", function(e) {

  var inputButton = $(this).data("change");

  if (inputButton === "plus") {
    count = count + 1;
  } else {
    count = count - 1;
  }

  number.html(count);
  $('.summary-count').html(count);

  if (count > 3) {
    $(".minus").prop("disabled", false);
  } else {
    $(".minus").prop("disabled", true);
  }
});

});
