// Botao do sidebar
$(document).ready(function(){
    
    $('#btnOpen').click(function(){
            $('.barraferramentas').css("left","0");
    });
    $('#btnClose').click(function(){
        $('.barraferramentas').css("left","-240px");
});
});

