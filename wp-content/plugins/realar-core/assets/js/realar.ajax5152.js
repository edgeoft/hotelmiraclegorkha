/*

[Main Script]

Project: Realar
Version: 1.0
Author : Themeholy

*/
;(function($){
    "use strict";
/* ------------------------------------------------------------------------- *

    * Mail Chimp ajax

    * ------------------------------------------------------------------------- */

    var $widgetsubscribeForm = $('form.newsletter-form');

    // Subscribe Shortcode MailChimp ajax
    $widgetsubscribeForm.on('submit',function(e){
        let $emailAdd = $(this).find('input[type="email"]').val();
        $.ajax({
            type: 'POST',
            url: realarajax.action_url,
            data:{
                sectsubscribe_email: $emailAdd,
                security: realarajax.nonce,
                action: 'realar_subscribe_ajax'
            },

            success: function(data){
                $('form.newsletter-form input[type="email"]').val('');
                $('.newsletter-form').append(data);
            },

            error: function(){
                $('.newsletter-form').append('<div class="alert alert-danger mt-2" role="alert">Something Goes Wrong</div>');

            }
        });
        e.preventDefault();
    });

})(jQuery);