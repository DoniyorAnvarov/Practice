$('.ask').on('click', function () {
    
    $('.ask').not(this).removeClass('active').next().slideUp(500)
    $(this).toggleClass('active').next().slideToggle(500)
    
})


let txt = $('h1').html()
let a = $('h1').html('')

function getWords(x = 0) {
  
  $('h1').html(a.html() + txt[x])
  x++
  
  if (x < txt.length) {
    setTimeout(() => {
      getWords(x)
    }, 150);
  }
  
}

getWords()


$('.js-modal-show').on('click', function () {
  
  $('.modal').fadeIn()
  
})

$('.close').on('click', function () {
  
  $('.modal').fadeOut()
  
})

$('.modal').on('click', function (e) {
  
  if (e.target === e.currentTarget) {
    $('.modal').fadeOut()
  }
  
})


$('.nav').css({
  position: 'fixed',
  zIndex: 999,
  top: sticky(),
  width: '100%'
})

function sticky() {
  
  if ($(window).height() - $(window).scrollTop() - $('.nav').outerHeight() >= 0) {
    $('.nav').css({
      top: $(window).height() - $(window).scrollTop() - $('.nav').outerHeight() + 'px'
    })
  } else {
    $('.nav').css({
      top: 0
    })
  }
}

$(window).on('scroll', sticky)
$(window).on('resize', sticky)



$('.read-more').on('click', function () {
  
  $('.text-hidden').toggleClass('hidden')
  
  if ($('.text-hidden').hasClass('hidden')) {
    $('.read-more').html('Read More')
  } else {
    $('.read-more').html('Hidden')
  }
  
})


$(window).on('scroll', function () {
  
  if ($(window).scrollTop() >= 300) {
    $('.js-btn-top').addClass('show')
  } else {
    $('.js-btn-top').removeClass('show')
  }
  
})

$('.js-btn-top').on('click', function () {
  
  $('html').animate({
    
    scrollTop: 0
    
  }, 1500)
  
})


$('.js-filter').on('click', function () {
  
  let attr = $(this).attr('data-filter')
  
  // console.log(attr);
  
  $(`div[data-filter="${attr}"]`).slideDown()
  
  if (attr == 'all') {
    $('div[data-filter]').slideDown()
  } else {
    $('div[data-filter]').not($(`div[data-filter="${attr}"]`)).slideUp()
  }
  
})