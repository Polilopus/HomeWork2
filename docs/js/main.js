$(function () {
 
    $("#header-img__rateYo").rateYo({
      rating: 4.5,
      readOnly: true
    });
  });

  $(function () {
  var mixer = mixitup('.blog-list');
 
  $('.blog-button__filter').on('click', function () {
  $('.blog-button__filter').removeClass('blog-button__filter--active')
  $(this).addClass('blog-button__filter--active')
  })


  $('.customers-slider').slick ({
    arrows: false,
    dots: true,
    appendDots: $('.customers-dots'),
    waitForAnimate: false,

  })

  $('.customers-prev').on('click', function (e) {
    e.preventDefault()
    $('.customers-slider').slick('slickPrev')
  })
  $('.customers-next').on('click', function (e) {
    e.preventDefault()
    $('.customers-slider').slick('slickNext')
  })


  $('.questions-acc__link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('questions-acc__link--active')) {
      $(this).removeClass('questions-acc__link--active')
      $(this).children('.questions-acc__text').slideUp()
    } else {
      $('.questions-acc__link').removeClass('questions-acc__link--active')
      $('.questions-acc__text').slideUp()
      $(this).addClass('questions-acc__link--active')
      $(this).children('.questions-acc__text').slideDown()
    }
  })


 })

