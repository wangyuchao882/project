//轮播图
$(function () {
    var timer;
    var n = 0;
    function run() {
        //clearInterval(timer);
        timer = setInterval(function () {
            //$(".page1 .mid ol").find("li").each(function (index) {
            n++;
            if (n == 5)n = 0;
            $(".page1 .mid ul").find("li").eq(n).fadeIn().siblings().fadeOut();//对应的图片显示 其他的隐藏
            $(".page1 .mid ol").find("li").eq(n).addClass("ac").siblings().removeClass("ac");//对应的按钮加上ac类 其他的去掉ac类
            // });
        }, 2000);
    };
    run();
    $(".page1 .mid").on("mouseenter", function () {//鼠标移入
        clearInterval(timer);
    });
    $(".page1 .mid").on("mouseleave", function () {//鼠标移出
        run();
    });
    $(".page1 .mid ol").find("li").each(function (index) {
        $(".page1 .mid ol").find("li").eq(index).on("click", function () {
            $(".page1 .mid ul").find("li").eq(index).fadeIn().siblings().fadeOut();
            $(".page1 .mid ol").find("li").eq(index).addClass("ac").siblings().removeClass("ac");
        });
    });
    var j = 0;
    //$(".page1 .mid >a:last").each(function (j) {
    $(".page1 .mid >a:last").on("click", function () {
        j++;
        if (j >= 5)j = 0;
        $(".page1 .mid ul").find("li").eq(j).fadeIn().siblings().finish().fadeOut();
        $(".page1 .mid ol").find("li").eq(j).addClass("ac").siblings().removeClass("ac");
    });
    // });
    // var i = 4;
    // $(".page1 .mid >a:first").each(function () {
    $(".page1 .mid >a:first").on("click", function () {
        j--;
        if (j < 0)j = 4;
        $(".page1 .mid ul").find("li").eq(j).fadeIn().siblings().finish().fadeOut();
        $(".page1 .mid ol").find("li").eq(j).addClass("ac").siblings().removeClass("ac");

    });
    //});
});

//弹窗
$(function () {
    var timer;
    $(".page1 .left ul").find("li").each(function (index) {
        var _this = this;
        $(this).hover(
            function () {
                clearTimeout(timer);
                $(".popup").show();
                $(".popup .s1").eq(index).show().siblings().hide();
                $(this).addClass("aabg").siblings().removeClass("aabg");
            },
            function () {//定时器 自动轮播
                clearTimeout(timer);
                timer = setTimeout(function () {
                    $(".page1 .popup").hide();
                    $(_this).removeClass("aabg");
                }, 100)
            }
        );
        $(".page1 .popup").hover( //鼠标进入停止
            function () {
                clearTimeout(timer);
                $(this).show();
            },
            function () {//鼠标移出开始
                $(this).hide();
                $(_this).removeClass("aabg");
            }
        )
    });
});

//楼层
$(function () {
    //console.log($(".page").offset().top)
    $(window).on("scroll", function () {
        //判断document滚动的距离，是否达到了导航栏的top值
        if ($(document).scrollTop() >= 500) {
            $(".LocationFloorList").fadeIn();
            $(".page").each(function (index) {
                if ($(document).scrollTop() > $(this).offset().top - 300) {
                    $(".floorBian .LocationFloorList li").eq(index).addClass("ac").siblings().removeClass("ac");
                }
            });
        } else {
            $(".LocationFloorList").fadeOut();
        }
        ;
    });
    //找到所有带有内部链接的a标签

    $(".floorBian .LocationFloorList a").on("click", function () {
        //取出找到的a标签的哈希值
        $(this).parent().addClass("ac").siblings().removeClass("ac");
        var id = this.hash; //以哈希值作为ID选择器
        $("html,body").animate({
            //距离浏览器顶部的距离
            scrollTop: $(id).offset().top
        }, 600)
    });
    //1楼选项卡切换
    $("#f1 .title ul li").each(function (index) {
        $("#f1 .title ul li").eq(index).on("mouseover", function () {
            $("#f1 .con").css("display", "none");
            $("#f1 .con").eq(index).css("display", "block")
        })
    })
    //回到顶部
    $(function () {
        $(".gogogogo").on("click", function () {
            var id = this.hash;
            console.log(id)
            $("html,body").animate({
                scrollTop: $(id).offset().top
            }, 600);
        });
        $(".gogogogo").hover(
            function () {
                $(this).addClass("gogobc");
            },
            function () {
                $(this).removeClass("gogobc");
            }
        )
    });
});
$(function () {
    function getIcon(weather) {
        var weatherIcon = {
            "晴": "day_qing.png",
            "多云": "day_duoyun.png",
            "小雨": "day_xiaoyu.png",
            "霾": "yin.png"
        };
        return weatherIcon[weather];
    };
    function rungo() {
        var url = "http://wthrcdn.etouch.cn/weather_mini?city=" + $("select").val();
        var oDate=new Date();
        var hour=oDate.getHours();
        var mint=oDate.getMinutes();
        $.getJSON(url, function (data) {
            var content = data.data.wendu + "℃ ";
            var conn = data.data.forecast[0].type;
            var date = data.data.forecast[0].date;
            $("#tianqi ul li").html(content + " " + conn + " " + date+" "+hour+":"+mint);
            $("#tianqi span").html('<img src="images/' + getIcon(data.data.forecast[0].type) + '">');
        });
    };
    rungo();
    $("select").on("change", function () {
        rungo();
    });
});