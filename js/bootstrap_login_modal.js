(function ($) {
  Drupal.behaviors.bootstrap_login_modal = {
      attach: function (context) {
        $("#login-modal", context).appendTo("body");
        $("#register-modal", context).appendTo("body");
     //   $("a[href*='/user/register'], a[href*='?q=user/register']", context).once('bootstrap-login-modal', function () {
    //  this.href = this.href.replace(/user\/register/,'modal_forms/nojs/register');
  //  });
      }
  };
})(jQuery);
