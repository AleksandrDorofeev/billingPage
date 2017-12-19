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
});
// });
  // $('.none, .half-year, .nine-month, .one-year, .two-years').on('click', function() {
  //   if ($('.choose').hasClass('active_none')) {
  //   $('.none-check-mark').css('display', 'block');
  //   }else{
  //   $('.none-check-mark').css('display', 'none');
  //   }
  //
  //   if ($('.choose').hasClass('active_half-year')) {
  //   $('.half-year-check-mark').css('display', 'block');
  //   }else{
  //   $('.half-year-check-mark').css('display', 'none');
  //   }
  //
  //   if ($('.choose').hasClass('active_nine-month')) {
  //   $('.nine-month-check-mark').css('display', 'block');
  //   }else{
  //   $('.nine-month-check-mark').css('display', 'none');
  //   }
  //
  //   if ($('.choose').hasClass('active_one-year')) {
  //   $('.one-year-check-mark').css('display', 'block');
  //   }else{
  //   $('.one-year-check-mark').css('display', 'none');
  //   }
  //
  //   if ($('.choose').hasClass('active_two-years')) {
  //   $('.two-years-check-mark').css('display', 'block');
  //   }else{
  //   $('.two-years-check-mark').css('display', 'none');
  //   }
  // })
  // })
  // var parent = document.querySelector('.month-sub');
  // parent.addEventListener("click", check, false);
  //
  // function check(e) {
  //   e.preventDefault()
  //   if (e.target !== e.currentTarget) {
  //     var clickedItem = e.target.className;
  //     for(var i = 0; i < clickedItem.length; i++) {
  //       clickedItem[i].addEventListener('click', function(e) {
  //         e.preventDefault()
  //         if($('.choose').hasClass('active_' + clickedItem)) {
  //           $('.check-mark').css('display', 'block');
  //         }else{
  //           $('.check-mark').css('display', 'none');
  //         }
  //       }, false)
  //     }
  //     console.log('choose active_' + clickedItem);
  //     // if($('.choose').hasClass('active_' + clickedItem)) {
  //     //   $('.check-mark').css('display', 'block');
  //     // }else{
  //     //   $('.check-mark').css('display', 'none');
  //     // }
  //   }
  // }
// })
