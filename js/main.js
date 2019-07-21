var home_txt = `<h1>QUEM SOMOS NÓS</h1>
<p>Comprometimento com a excelência</p>
<p>A Santos Filho Advogados é um moderno escritório de advocacia situado na região nobre de Belo Horizonte, equipado com uma estrutura dinâmica e eficiente, capaz de atender as particularidades de cada um dos seus clientes.</p>
<p>Nossos profissionais têm extensa formação jurídica e experiência eclética, de maneira a atender às necessidades de seus clientes, ajustando-se às tendências da economia globalizada.</p>
<p> A união dessas qualidades faz com que a Santos Filho Advogados esteja preparada para criar planejamentos estratégicos, resolver os desafios jurídicos, com criatividade, rapidez e inteligência. O nosso maior compromisso é a satisfação de nossos clientes.</p>`;

var equipe_txt = `<h1>CELSO ARAÚJO</h1>
<p>Bacharel em Direito pela SEUNE - Sociedade de Ensino Universitário do Nordeste desde 2012.</p>
<p>Bacharel em Direito pela SEUNE - Sociedade de Ensino Universitário do Nordeste desde 2012.</p>
<p>Graduando em Sistemas de Informação pelo IFAL - Instituto Federal de Educação, Ciência e Tecnologia de Alagoas.</p>`;

var atuacao_txt = `<h1>DIREITO TRIBUTÁRIO</h1>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda iure quod quasi, facilis vero mollitia quos qui iste totam minus cum nam ex veniam illum, delectus provident ducimus quidem natus.</p>`;

var contato_txt = `<div>
<h1>FALE CONOSCO</h1>
<p>Entre em contato pelo telefone +55 82 9 9911.78684</p>
<p>Se preferir, você pode enviar uma mensagem para o escritório utilizando o formulário abaixo. </p>
<form action="mailto:celsopa@msn.com" method="post" autocomplete="off">
    <fieldset>
        <label for="id_nome">Nome (*)</label>
        <input type="text" name="nome" id="id_nome" placeholder="Nome Completo" required>
    </fieldset>
    <fieldset>
        <label for="id_telefone">Telefone (*)</label>
        <input type="text" name="telefone" id="id_telefone" placeholder="(DDD) 9 9999-9999" required>
    </fieldset>
    <fieldset>
        <label for="id_email">e-Mail</label>
        <input type="text" name="email" id="id_email" placeholder="seunome@mail.com.br" >
    </fieldset>
    <fieldset>
        <label for="id_mensagem">Mensagem (*)</label>
        <textarea name="mensagem" id="id_mensagem" cols="30" rows="10" placeholder="Sua mensagem aqui" required></textarea>
    </fieldset>
    <div class="btn_enviar">
        <button type="submit" id="id_enviar">ENVIAR</button>
    </div>
</form>
</div>`;



function home(){
    $("#conteudo").html(home_txt);
    $("#home").css("background-color", "rgba(218, 165, 32, 0.1)");
    $("li").not("#home").css("background-color", "unset");
}

function equipe(){
    $("#conteudo").html(equipe_txt);
    $("#equipe").css("background-color", "rgba(218, 165, 32, 0.1)");
    $("li").not("#equipe").css("background-color", "unset");
}

function atuacao(){
    $("#conteudo").html(atuacao_txt);
    $("#atuacao").css("background-color", "rgba(218, 165, 32, 0.1)");
    $("li").not("#atuacao").css("background-color", "unset");
}


function contato(){
    $("#conteudo").html(contato_txt);
    $("#contato").css("background-color", "rgba(218, 165, 32, 0.1)");
    $("li").not("#contato").css("background-color", "unset");
}


