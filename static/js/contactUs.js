$(document).on('submit', '#contact-form', function (e) {
    e.preventDefault();
    console.log("Submitted ...");

    let full_name = $("#full_name").val();
    let email = $("#email").val();
    let phone = $("#phone").val();
    let subject = $("#subject").val();
    let message = $("#message").val();



    let data = {
        'full_name': full_name,
        'email': email,
        'phone': phone,
        'subject': subject,
        'message': message,
    }


    $.ajax({
        type: "POST",
        url: "/ajax_contact_us_form/",
        data: data,
        dataType: "json",

        beforeSend: function (data) {
            console.log("Sending data to server...");
        },

        success: function (response) {
            console.log("Sent data to server...");
            console.log(response);
        }
    });

    console.log(data);

})