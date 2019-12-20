//navbar toggler
$(document).ready(function () {

  //dropdown hover
  function toggleDropdown(e) {
    const _d = $(e.target).closest('.dropdown'),
      _m = $('.dropdown-menu', _d);
    setTimeout(function () {
      const shouldOpen = e.type !== 'click' && _d.is(':hover');
      _m.toggleClass('show', shouldOpen);
      _d.toggleClass('show', shouldOpen);
      $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
    }, e.type === 'mouseleave' ? 100 : 0);
  }

  $('body')
    .on('mouseenter mouseleave', '.dropdown', toggleDropdown)
    .on('click', '.dropdown-menu a', toggleDropdown);


  //toggler button
  $('.navbar-toggler').click(function () {
    $('.navbar-toggler').toggleClass('change')
  })

  //view more
  $("#toggle-vm").click(function () {
    var elem = $("#toggle-vm").text();
    if (elem == "Daha çox") {
      //Stuff to do when btn is in the read more state
      $("#toggle-vm").text("Daha az");
      $("#menu-displaynone").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle-vm").text("Daha çox");
      $("#menu-displaynone").hide();

    }
  });

  //bg video
  var bgVideo = function () {
    $(".player").mb_YTPlayer();
  };
  bgVideo();

  $(".carousel-testimony").owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    items: 1,
    margin: 0,
    stagePadding: 0,
    nav: false,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  $(".carousel-blog").owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    margin: 0,
    stagePadding: 0,
    nav: true,
    dots: false,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      485: {
        items: 1
      },
      728: {
        items: 3
      },
      960: {
        items: 4
      },
      1200: {
        items: 4
      }
    }
  });

  // about team 
  // default state of bio
  var bioActive = false;

  // toggle bio with animations/timing relative to its state
  // if closed, expand width first, then height
  // if open, expand height first, then width
  function toggleBioA() {
    if (bioActive == false) {
      firstClass = 'expand-width';
      secondClass = 'expand-height';
      bioActive = true;
    } else {
      firstClass = 'expand-height';
      secondClass = 'expand-width';
      bioActive = false;
    }
    $(".wrap-center-a").toggleClass("bio-active").toggleClass(firstClass).delay(500).queue(function () {
      $(this).toggleClass(secondClass).dequeue();
    });
  }

  function toggleBioB() {
    if (bioActive == false) {
      firstClass = 'expand-width';
      secondClass = 'expand-height';
      bioActive = true;
    } else {
      firstClass = 'expand-height';
      secondClass = 'expand-width';
      bioActive = false;
    }
    $(".wrap-center-b").toggleClass("bio-active").toggleClass(firstClass).delay(500).queue(function () {
      $(this).toggleClass(secondClass).dequeue();
    });
  }

  function toggleBioC() {
    if (bioActive == false) {
      firstClass = 'expand-width';
      secondClass = 'expand-height';
      bioActive = true;
    } else {
      firstClass = 'expand-height';
      secondClass = 'expand-width';
      bioActive = false;
    }
    $(".wrap-center-c").toggleClass("bio-active").toggleClass(firstClass).delay(500).queue(function () {
      $(this).toggleClass(secondClass).dequeue();
    });
  }

  // run bio toggle on click
  $(".btn-about, .close-team-about, .team-a").on("click", toggleBioA);
  $(".btn-about, .close-team-about, .team-b").on("click", toggleBioB);
  $(".btn-about, .close-team-about, .team-c").on("click", toggleBioC);

  //contact form validation
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);

  // gallery filter 
  $(".gallery__filter--button").click(function () {
    var value = $(this).attr('data-filter');

    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $('.filter').show('1000');
    }
    else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter").not('.' + value).hide('1000');
      $('.filter').filter('.' + value).show('7000');

    }
  });

  if ($(".gallery__filter--button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");


  $(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: "scroll"
  });
});



//aos animation 
AOS.init({
  duration: 3000,
  easing: 'ease-out-back',
  delay: 600,
  once: true,
  disable: 'mobile',
});