/**
 * Created by shaochenlu on 16/8/24.
 */

$('#login-btn').on('click', function () {
  var $this = $(this);
  if (!$this.hasClass('active')) {
    $this.addClass('active');
    $('#signup-form').addClass('hidden');
    $('#signup-btn').removeClass('active');
    $('#login-form').removeClass('hidden')
  }
});
$('#signup-btn').on('click', function () {
  var $this = $(this);
  if (!$this.hasClass('active')) {
    $('#login-btn').removeClass('active');
    $('#login-form').addClass('hidden');
    $this.addClass('active');
    $('#signup-form').removeClass('hidden')
  }
});