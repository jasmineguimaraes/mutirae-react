// JQuery
//
//
$(document).ready(function(){
        $('#entrar').on('click', () =>{
            $('#telaLogin').css('display', 'block');
            $('#telaLogin').css('position', 'absolute');
            $('#telaLogin').css('z-index', '2');


    })

        $('#icoIMG').on('click', () =>{
            $('#telaLogin').css('display','none')
        })

        //Efeito menu navegacao com scroll

       

        //Efeitos scroll index
        //Right
        $(window).scroll(function(){
            var windowTop = $(this).scrollTop();
            $('.animeRight').each(function(){
                if(windowTop > $(this).offset().top - 400){
                    $(this).addClass('animeRight-init')
                }else{
                    
                }
            })
        })

        //Left
        $(window).scroll(function(){
            var windowTop = $(this).scrollTop();
            $('.animeLeft').each(function(){
                if(windowTop > $(this).offset().top - 400){
                    $(this).addClass('animeLeft-init')
                }else{
                    
                }
            })
        })

        //TOP
        $(window).scroll(function(){
            var windowTop = $(this).scrollTop();
            $('.animeTop').each(function(){
                if(windowTop > $(this).offset().top -700){
                    $(this).addClass('animeTop-init')
                }else{
                    
                }
            })
        })
})


