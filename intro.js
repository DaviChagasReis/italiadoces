$(document).ready(function () {
    // Função para abrir imagens em uma modal
    $('.img-produto').on('click', function () {
        // Cria o elemento da modal
        const $modal = $('<div>')
            .css({
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: '1000',
            })
            .appendTo('body'); // Adiciona ao corpo da página

        // Cria a imagem dentro da modal
        const $modalImg = $('<img>')
            .attr('src', $(this).attr('src')) // Define o mesmo caminho da imagem clicada
            .css({
                maxWidth: '90%',
                maxHeight: '90%',
                borderRadius: '10px',
            })
            .appendTo($modal); // Adiciona a imagem à modal

        // Fecha a modal ao clicar fora da imagem
        $modal.on('click', function (event) {
            if (event.target === this) {
                $modal.remove(); // Remove a modal da página
            }
        });
    });
});


$(document).ready(function () {
    // Evento de clique no botão de envio
    $('form button').on('click', function (event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Mostra uma mensagem de sucesso
        alert('E-mail enviado com sucesso!');

        // Opcional: Limpar os campos do formulário após o envio
        $('form input, form textarea').val('');
    });
});


$(document).ready(function () {
    let quantidadeTotal = 0;
    let valorTotal = 0;

    // Evento para o botão "Comprar"
    $('.btn-comprar').on('click', function () {
        // Incrementa a quantidade total
        quantidadeTotal++;

        // Obtém o preço do produto
        const precoTexto = $(this).siblings('.preco').text(); // Exemplo: "R$ 10,00"
        const precoNumerico = parseFloat(precoTexto.replace('R$', '').replace(',', '.'));

        // Soma o preço ao valor total
        valorTotal += precoNumerico;

        // Atualiza os valores no menu flutuante
        $('#quantidade-total').text(quantidadeTotal);
        $('#valor-total').text(valorTotal.toFixed(2).replace('.', ','));

        // Exibe o menu flutuante
        $('#menu-flutuante').fadeIn();
    });

    // Evento para o botão "Fechar"
    $('#fechar-menu').on('click', function () {
        $('#menu-flutuante').fadeOut();
    });
});
