require.async('jquery', function($) {
    $('.doc-preview').bind('click', function() { 
        $('#tablerow').hide();
        $('#previewrow').show();
    })

    $('.back').bind('click',function(){
        $('#tablerow').show();
        $('#previewrow').hide();
    })

    var fun={
        server:function(){
            $.ajax('/ajax/doc/')
        }
    }
});
