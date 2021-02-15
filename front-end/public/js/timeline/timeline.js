$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        console.log('Eu cliquei nele');
    });


    //AJAX para envio de requisicoes do APP

    //Remover mutira
    $('.btn-remove').on('click',function(){
        let value = $(this).val()
        console.log(value)
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/removeMutira',
            data: `mutira=${value}`,
            success: location.reload(),
            error: erro => {console.log(erro)}
        })

        
    })
    //Salvar Mutira
    $('#btn-salvar').on('click',function(){
        
        let text = $('.texto-mutira').val()
       
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/salvarMutira',
            data: `textmutira=${text}`,
            success: location.reload(),
            error: erro => {console.log(erro)}
        })


    })

    /*Passando id dos mutiroes para controllers itens-mutiroes */
     
    $('.item-mutirao').on('click',function(){
        let itemMutirao = $(this).val()     
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/AppItemMutirao',
            data: `itemMutira=${itemMutirao}`,
            success:console.log('Sucesso!'),
            error: erro => {console.log(erro)}
        })

        
    })

})