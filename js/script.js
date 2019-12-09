//navbar toggler
$(document).ready(function () {/*ancaq doc yuklenende, hazir olanda ready olsun*/
  //toggler button
  $('.navbar-toggler').click(function () {
    $('.navbar-toggler').toggleClass('change')
  })
});

//view more
$("#toggle-vm").click(function () {
  var elem = $("#toggle-vm").text();
  if (elem == "View More") {
    //Stuff to do when btn is in the read more state
    $("#toggle-vm").text("View Less");
    $("#menu-displaynone").slideDown();
  } else {
    //Stuff to do when btn is in the read less state
    $("#toggle-vm").text("View More");
    $("#menu-displaynone").hide();

  }
});

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


//aos animation 
AOS.init({
  duration: 3000,
  easing: 'ease-out-back',
  delay: 600,
  once: true,
  disable: 'mobile',
});