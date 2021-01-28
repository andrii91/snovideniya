$(document).ready(function () {
  $(window).scroll(function () {
    return $('.nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });
  $('.scroll').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 10
    }, 1500);

  });


  var slickOpts = {
    slidesToShow: 1,
    slidesToScroll: 1,
    //centerMode: true,
    easing: 'swing', // see http://api.jquery.com/animate/
    speed: 700,
    adaptiveHeight: false,
    dots: true,
    prevArrow: '<div class="sl_btn slick-prev"><svg width="42" height="27" viewBox="0 0 42 27" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="-1" x2="17.9008" y2="-1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 14.6577 2)" stroke="#D2D2D2" stroke-width="2"/><line x1="13.9506" y1="25.7071" x2="1.29283" y2="13.0493" stroke="#D2D2D2" stroke-width="2"/><line y1="-1" x2="38.8987" y2="-1" transform="matrix(1 0 0 -1 2.43457 12.5947)" stroke="#D2D2D2" stroke-width="2"/></svg></div>',
    nextArrow: '<div class="sl_btn slick-next"><svg width="42" height="27" viewBox="0 0 42 27" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="28.1886" y1="1.29289" x2="40.8463" y2="13.9507" stroke="#D2D2D2" stroke-width="2"/><line y1="-1" x2="17.9008" y2="-1" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 27.4814 25)" stroke="#D2D2D2" stroke-width="2"/><line x1="39.7046" y1="13.5947" x2="0.805885" y2="13.5947" stroke="#D2D2D2" stroke-width="2"/></svg></div>',
    customPaging: function (slick, index) {
      return '<a>0' + (index + 1) + '</a>';
    },
    
    responsive: [
     
        {
          breakpoint: 1200,
          settings: {
            arrows: false,
             adaptiveHeight: false,
          }
    },
       
     
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            adaptiveHeight: false,
          }
    },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            adaptiveHeight: true,
          }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    
  };
  $('#reviews-slider').slick(slickOpts);


  $('#reviews-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('#curent').text($('#reviews-slider .slick-dots .slick-active a').text())
  });


  if ($(window).width() < 1200) {
    $('.mob-slider1').slick({
      infinite: true,
      arrows: false,
      dots: true,
      adaptiveHeight: true,
      customPaging: function (slick, index) {
        return '<a>0' + (index + 1) + '</a>';
      },
      responsive: [
     
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
    },
       
     
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
    },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    })

    $('.mob-slider2').slick({
      infinite: true,
      arrows: false,
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      adaptiveHeight: true,
      customPaging: function (slick, index) {
        return '<a>0' + (index + 1) + '</a>';
      }
    })

    $('#menu li a').click(function () {
      $('#menu').hide();
    })
  }

  $('input').on('keyup', function () {
    var $this = $(this),
      val = $this.val();

    if (val.length >= 1) {
      $(this).parent().find('.label-text').hide()
    } else {
      $(this).parent().find('.label-text').show()
    }
  });


  $('.agree').change(function () {
    if ($(this).prop("checked")) {
      $(this).parents('form').find('.order-btn').removeAttr('disabled');
    } else {
      $(this).parents('form').find(".order-btn").attr('disabled', 'disabled');
      window.alert('Дайте свое согласие на обработку данных!');
    }
  })

  $('[href="#reg"]').click(function () {
    $('#reg .title').text($(this).data('title'))
    $('#reg input[name="order_type"]').val($(this).data('title'))
  })

  $('input[name="phone"]').inputmask("+38(099) 99 999 99");
  /* form valid*/
  var alertImage = '<svg style="width: 20px; position:absolute;top: 10px;right: 10px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.1 286.1"><path d="M143 0C64 0 0 64 0 143c0 79 64 143 143 143 79 0 143-64 143-143C286.1 64 222 0 143 0zM143 259.2c-64.2 0-116.2-52-116.2-116.2S78.8 26.8 143 26.8s116.2 52 116.2 116.2S207.2 259.2 143 259.2zM143 62.7c-10.2 0-18 5.3-18 14v79.2c0 8.6 7.8 14 18 14 10 0 18-5.6 18-14V76.7C161 68.3 153 62.7 143 62.7zM143 187.7c-9.8 0-17.9 8-17.9 17.9 0 9.8 8 17.8 17.9 17.8s17.8-8 17.8-17.8C160.9 195.7 152.9 187.7 143 187.7z" fill="#E2574C"/></svg>';
  var error;
  $('.submit').click(function (e) {
    e.preventDefault();
    var ref = $(this).closest('form').find('[required]');
    $(ref).each(function () {
      if ($(this).val() == '') {
        var errorfield = $(this);
        if ($(this).attr("type") == 'email') {
          var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
          if (!pattern.test($(this).val())) {
            $("input[name=email]").val('');
            $(this).addClass('error').parent('.label').append('<div class="allert">' + alertImage + '</div>');
            error = 1;
            $(":input.error:first").focus();
            return false;
          }
        } else if ($(this).attr("type") == 'tel') {
          var patterntel = /^()[- +()0-9]{9,18}/i;
          if (!patterntel.test($(this).val())) {
            $("input[name=phone]").val('');
            $(this).addClass('error').parent('.label').append('<div class="allert">' + alertImage + '</div>');
            error = 1;
            $(":input.error:first").focus();
            return false;
          }
        } else {
          $(this).addClass('error').parent('.label').append('<div class="allert">' + alertImage + '</div>');
          error = 1;
          $(":input.error:first").focus();
          return false;
        }
        error = 1;
        return false;
      } else {
        error = 0;
        $(this).addClass('error').parent('.label').find('.allert').remove();
      }
    });
    if (error !== 1) {
      $(this).unbind('submit').submit();
    }
  });

  function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
      vars[key] = value;
    });
    return vars;
  }
  $('input[name="utm_source"]').val(getUrlVars()["utm_source"]);
  $('input[name="utm_campaign"]').val(getUrlVars()["utm_campaign"]);
  $('input[name="utm_medium"]').val(getUrlVars()["utm_medium"]);
  $('input[name="utm_term"]').val(getUrlVars()["utm_term"]);
  $('input[name="utm_content"]').val(getUrlVars()["utm_content"]);
  $('input[name="click_id"]').val(getUrlVars()["aff_sub"]);
  $('input[name="affiliate_id"]').val(getUrlVars()["aff_id"]);
  $('input[name="user_agent"]').val(navigator.userAgent);
  $('input[name="ref"]').val(document.referrer);

  $.get("https://ipinfo.io", function (response) {
    $('input[name="ip_address"]').val(response.ip);
    $('input[name="city"]').val(response.city);
    $('input[name="country"]').val(response.country);
    $('input[name="region"]').val(response.region);
  }, "jsonp");

  function readCookie(name) {
    var n = name + "=";
    var cookie = document.cookie.split(';');
    for (var i = 0; i < cookie.length; i++) {
      var c = cookie[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(n) == 0) {
        return c.substring(n.length, c.length);
      }
    }
    return null;
  }
  setTimeout(function () {
    $('.gclid_field').val(readCookie('gclid'));
    if ($('.gclid_field').val() == '') {
      $('.gclid_field').val(readCookie('_gid'));
    }
  }, 2000);




  $('form').on('submit', function (e) {
    e.preventDefault();
    var $form = $(this);
    $form.find('.submit').addClass('inactive');
    $form.find('.submit').prop('disabled', true);



    $.ajax({
      type: 'POST',
      url: 'db/reg.php',
      dataType: 'json',
      data: $form.serialize(),
      success: function (response) {}
    });


    setTimeout(function () {
      window.location.href = "success.html";
    }, 800);

  });



  $('#nav-icon').click(function () {
    $('img[data-src]').each(function () {
      $(this).attr('src', $(this).data('src'));
    })

    $(this).toggleClass('open');
    $(this).parents('nav').toggleClass('open');
    $('#menu').slideToggle(200);
  });

  $('.menu').hover(function () {
    $('img[data-src]').each(function () {
      $(this).attr('src', $(this).data('src'));

    })
  })
  
  
    
    var observer = lozad();
  observer.observe();
  

});