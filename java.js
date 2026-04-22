function acionarbotao() {
 
    let input = document.getElementById ("input")
    let txtfinal = input.value.trim()
    let mensagem = document.getElementById ('mensagem')

    if (txtfinal === "") {
        let mensagemErro = 'Por favor, Digíte um nome antes de confirmar!'
        document.getElementById('mensagem').textContent = mensagemErro  
       document.getElementById('mensagem').style.color =  '#8a4343'

    } else {
         let mensagemFinal = txtfinal + ', Clique no Link para acessar o Portifolio!'
         document.getElementById('mensagem'). textContent = mensagemFinal
        document.getElementById ('mensagem').style.color = '#ffffff'

        lista.innerHTML = ""

       let link = document.createElement ("a");
       link.href = "novo-portf";
       link.target = "";
       link.textContent = "Meu Portfólio aqui!";
       lista.appendChild(link);
    } 

    
    input.value = ""
}
