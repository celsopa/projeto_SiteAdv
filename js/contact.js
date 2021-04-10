$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                nome: {
                    required: true,
                    minlength: 2
                },
                telefone: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 9
                },
                email: {
                    required: true,
                    email: true
                },
                mensagem: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                nome: {
                    required: "Você precisa informar seu nome!",
                    minlength: "Nome muito curto!"
                },
                telefone: {
                    required: "Você precisa informar seu telefone!",
                    minlength: "Número inválido."
                },
                number: {
                    required: "Você precisa informar seu telefone!",
                    minlength: "your Number must consist of at least 5 characters"
                },
                email: {
                    required: "Você precisa informar seu e-mail!"
                },
                mensagem: {
                    required: "A mensagem não pode ficar em branco!",
                    minlength: "Mensagem muito curta."
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})