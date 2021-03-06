// disabling form submissions if there are invalid fields and highlight input validation and submitAjaxForm
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                phoneValidation(form)
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                    // invalid
                    scrollToInvalid(form)
                } else {
                    event.preventDefault();
                    event.stopPropagation();
                    // valid
                    let formParams = new FormEventParams

                    //captcha
                    let idCaptcha = $("[name='captcha']",$(form)).val()

                    grecaptcha.execute(window[idCaptcha]) // todo: check window[idCaptcha]
                        .then(function (token) {
                            //do your ajax submition here
                            submitAjaxForm(form, formParams.callbackSuccess, formParams.callbackFail, token);
                        });

                    return true;
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();


class FormEventParams{
     callbackSuccess(form){
         //show modal
         var modal1 = document.getElementById("myModal");
         modal1.style.display = "block";
         $(form)[0].reset();
         closeModal()
    }

    callbackFail(){
         // console.log('fail')
    }
}

$(document).ready(function () {
   if (window.location.hash === "#form") { //modal show form if has hash
    openModal();
   }
});

function submitAjaxForm(form, callbackSuccess, callbackFail, gToken) {
    $(document).ready(function () {
        let action = form.getAttribute("action")
        let formData = $(form).serializeArray().reduce(function (obj, item) {
            obj[item.name] = item.value;
            return obj;
        }, {});
        try{
        formData['g-recaptcha-response'] = gToken;

        $("body").removeClass("loaded");
        $('#loader').fadeIn();

        $.ajax({
            type: "POST",
            url: action,
            data: formData,
            dataType: "json",
            encode: true,
        }).done(function (data) {
            callbackSuccess(form)
            $("body").addClass("loaded"); //loader
            $('#loader').fadeOut(); //end loader
        })
        //     .error(function() {
        //     callbackFail() //todo: check
        // })
        }
        catch (e){
            alert(e);
        }


    })
}

function scrollToInvalid(form) {
    const invalidInputs = Array.from($(':invalid',form));    // set up so you can use any custom invalid classes you're adding to your elements, as well
    invalidInputs.sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);                      // sort inputs by offset from top of viewport (handles issues with multi-column layouts, where the first element in the markup isn't necessarily the highest on the page)
    invalidInputs[0].scrollIntoView({ block: 'center', behavior: 'smooth' });                                         // scroll first (top) input into center of view, using smooth animation
}

function phoneValidation(form) {
    // let form = $(this).get(0);
    $(form).addClass('was-validated');
 
    //Need to display invalid feedback explicitly on submit for input fields due to plugin changing structure
    $('.tel-input', form).each(function() {
        let telInput = $(this).get(0);
        if($(this).prop('required') && !telInput.checkValidity()) {
          $(this).parents('.form-row').find('.invalid-feedback').show();
        }
      });
}