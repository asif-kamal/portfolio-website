console.log('Welcome to my portfolio site!')
$(document).ready(function() {
  $('.project').on('mouseenter', function () {
  $(this).find('.project-details').fadeIn();
    });
  $('.project').on('mouseleave', function () {
    $(this).find('.project-details').fadeOut();
  })
})
