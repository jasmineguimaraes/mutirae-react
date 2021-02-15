$(document).ready(function(){


    $('.btn-mutiroesRemove').on('click',function(){
        let mutiroes = $(this).val()
        
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/removeMutiroes',
            data: `id_mutirao=${mutiroes}`,
            success: location.reload(),
            error: erro => {console.log(erro)}
        })
        
    })

})