/**
 * Created by Shaochen on 10/27/2016.
 */
jQuery(function ($) {
  /*
  * Add subscriber with mailchimp
  * */
  var mailchimpUrl = "https://us-12.api.mailchimp.com/3.0/lists/e64e0fdf51/members";
  var newsletterForm = $('#newsletter-form');
  var newsletterAddress = newsletterForm.find('#email');
  /*var newsletterSubscribeEventHandler = function (e) {
    e.preventDefault();
    var emailData = {
      "email_address": newsletterAddress.val(),
      "status": "subscribed"
    };
    console.log(emailData);
    $.ajax({
      url: mailchimpUrl,
      method: 'POST',
      data: emailData
    }).done(function (data) {
      console.log("success");
      console.log(data);
    }).fail(function (error) {
      console.log("fail");
      console.log(error);
    });
  };
  newsletterForm.find("[type='submit']")
  .click(newsletterSubscribeEventHandler());*/
});