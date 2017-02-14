// JavaScript Document


//jquery 实现图片切换
$(function(){
    $(".mid .picBox .littlePic li").each(function(index){
        $(this).hover(function(){
            $(this).addClass("hong").siblings().removeClass("hong");
            $(".mid .picBox .bigPic ul:first li").eq(index).show().siblings().hide()
        })
    })

    $(".text .buy li").each(function(index){
        $(this).hover(function(){
           $(this).addClass("bbc").siblings().removeClass("bbc");
        },
            function(){
                $(".text .buy li").removeClass("bbc");
            }
        );
    });

    $(".tuijian .top ul li").each(function(index){
        $(this).hover(function(){
            $(this).addClass("bchong").siblings().removeClass("bchong");
            $(".tuijian .icon ul").eq(index).show().siblings().hide();
        });
    })

    $(".zzbz span").hover(
        function(){
            $(".zzbz .bztxt").show();
        },
        function(){
            $(".zzbz .bztxt").hide();
        }

    )
    $(".btfq span").hover(
        function(){
            $(".btfq .bttxt").show();
        },
        function(){
            $(".btfq .bttxt").hide();
        }

    );
    //console.log($(".int1").val())
    var a=1;
    //if($(".int1").val()==0){$(".int1").val(0)};
    $(".btn1").on("click",function(){
        $(".btn2").attr("disabled",false)
        $(".int1").val(a);
        a++;
    });
    $(".btn2").on("click",function(){

        if(a<1){
            $(this).attr("disabled",true)
        }else{
            $(this).attr("disabled",false)
        }
        $(".int1").val(a);
        a--;
    });

    $(".tishi p").on("click",function(){
        $(".number").html($(".tishi input").val());
        //$(".tishi input").val("0");
    })

});

