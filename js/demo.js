$(function(){
    $(".list").mouseover(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var v = $(this).index();
        $(".yingji_images").eq(v).removeClass("hide").siblings().addClass("hide");

    });

    $(".songhuo").mouseover(function(){
        $(".hide_add").css("display","block");
    });
    $(".songhuo").mouseleave(function(){
        $(".hide_add").css("display","none");
    });
    $(".hide_add ul li").click(function(){
        $(this).addClass("selected").siblings().removeClass("selected");
        $(".hide_add").css("display","none");
    });

    $("aside ul li").mouseover(function(){
        $(this).addClass("color").siblings().removeClass("color");
        var v = $(this).index();
        $(".aside_hide").eq(v).show().siblings().hide();
    });
    $(".left").mouseleave(function(){
        $(".aside_hide").css("display","none");
    });
})