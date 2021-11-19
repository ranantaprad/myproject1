$(window).scroll(function () {
  $('.arrow').each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 300) {
      $(this).addClass('pulsate-bck');
    }
  });
});

$(window).scroll(function () {
  $('.jumbo').each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 1500) {
      $(this).addClass('fade-in');
    }
  });
});

$(window).scroll(function () {
  $('.button1').each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 1550) {
      $(this).addClass('bounce-in-fwd');
    }
  });
});

$(window).scroll(function () {
  $('.blog_title').each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 1700) {
      $(this).addClass('swing-in-top-fwd');
    }
  });
});

$(window).scroll(function () {
  $('.content_main').each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 1750) {
      $(this).addClass('fade-in-bottom');
    }
  });
});

$(window).scroll(function () {
  $('.button2').each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 1800) {
      $(this).addClass('bounce-in-fwd2');
    }
  });
});

$(window).scroll(function () {
  $('.footer').each(function () {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 1800) {
      $(this).addClass('text-flicker-in-glow');
    }
  });
});
