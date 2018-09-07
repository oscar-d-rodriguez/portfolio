// Scroll Reveal
ScrollReveal().reveal('#about, #work, #contact', {delay:0, duration: 3000, reset: false });
ScrollReveal().reveal('#intro img, #work img, #about img, #contact .flower-wrapper', {delay: 500, interval: 200, scale: 0.75, reset: false });

//Document Ready
$(document).ready(function() {

    var form = $('#form'),
        email = $('#email'),
        subject = $('#subject'),
        message = $('#message'),
        info = $('#info'),
        submit = $("#submit");

    form.on('input', '#email, #subject, #message', function() {
        $(this).css('border-color', '');
        info.html('').slideUp();
    });

    submit.on('click', function(e) {
        e.preventDefault();
        if(validate()) {
            $.ajax({
            type: "POST",
            url: "../form.php",
            data: form.serialize(),
            dataType: "json"
            }).done(function(data) {
                if(data.success) {
                    email.val('');
                    subject.val('');
                    message.val('');
                    info.html('Message sent!').css('color', 'black').slideDown();
                } else {
                    info.html('Could not send mail! Sorry!').css('color', 'red').slideDown();
                }
            });
        }
    });

    function validate() {
        var valid = true;
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email.val())) {
            email.css('border-color', 'red');
            valid = false;
        }
        if($.trim(subject.val()) === "") {
            subject.css('border-color', 'red');
            valid = false;
        }
        if($.trim(message.val()) === "") {
            message.css('border-color', 'red');
            valid = false;
        }
        return valid;
    }
});
