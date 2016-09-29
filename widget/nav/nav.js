require.async('jquery', function($) {
    var fun = {
        init: function() {
            this.bindevent();
        },
        bindevent: function() {
            var _this=this;
            $('.J_nav_folder').bind('click', function() { 
                if(!$(this).parent().find('ul').length){ 
                    _this.getMenu($(this).attr('data-url'),$(this).parent());
                } 
            })
        },
        getMenu:function(url,$obj){
            this.ajaxService('/doc/ajax/menu'+url,'GET',{},function(data){
                if(data.code==0){
                    $obj.append('<ul class="nav collapse in"></ul>');
                    $ul=$obj.find('ul');
                    data.data.forEach(function(item,i){ 
                        if(item.type=='dir'){
                            $('<li><a class="J_nav_folder" href="javascript:;" data-url="'+item.url+'>"><i class="fa fa-folder"></i> <span class="nav-label">'+item.name+'</span><span class="fa arrow"></span></a></li>').appendTo($ul);
                        }
                        else{
                            $('<li><a class="J_nav_file" href="javascript:;" data-url="'+item.url+'>"><i class="fa fa-file-o"></i> <span class="nav-label">'+item.name+'</span></a></li>').appendTo($ul);
                        } 
                    })
                } 
            })

        },
        ajaxService: function(url, type, data, success, always) {
            $.ajax({
                url: url,
                type: type,
                dataType: "json",
                data: data,
                success: function(res) {
                    success && success(res);
                },
                error: function() {
                    console.log(arguments[1]);
                }
            }).always(function() {
                always && always();
            });
        } 
    }
    fun.init();




    // var fun = {
    //     server: function() {
    //         $.ajax('/ajax/doc/')
    //     }
    // }
});
