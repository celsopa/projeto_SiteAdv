function home(){
    $("#caixa_home").css("display", "block");
    $("#caixa_atuacao").css("display", "none");
    $("#caixa_contato").css("display", "none");
    $("#home").css("background-color", "rgba(218, 165, 32, 0.1)");
    $("li").not("#home").css("background-color", "unset");
}

function atuacao(){
    $("#caixa_home").css("display", "none");
    $("#caixa_contato").css("display", "none");
    $("#caixa_atuacao").css("display", "block");
    $("#atuacao").css("background-color", "rgba(218, 165, 32, 0.1)");
    $("li").not("#atuacao").css("background-color", "unset");
}

function contato(){
    $("#caixa_home").css("display", "none");
    $("#caixa_atuacao").css("display", "none");
    $("#caixa_contato").css("display", "block");
    $("#contato").css("background-color", "rgba(218, 165, 32, 0.1)");
    $("li").not("#contato").css("background-color", "unset");
}

function esconder(){
    $("#caixa_home").css("display", "none");
    $("#caixa_atuacao").css("display", "none");
    $("#caixa_contato").css("display", "none");
    $("li").css("background-color", "unset");
}

function slide1(){
document.getElementById('slide1').checked=true;
setTimeout("slide2()", 5000)

}
  
function slide2(){
    document.getElementById('slide2').checked=true;
setTimeout("slide3()", 5000)
}
  
function slide3(){
document.getElementById('slide3').checked=true;
setTimeout("slide4  ()", 5000)
}

function slide4(){
    document.getElementById('slide4').checked=true;
    setTimeout("slide1()", 5000)
}

