// var tor = 1;
$(".main li,.down").hover(function () {
    $(this).children('.down').stop(true, false, true).slideToggle(300);
});
$(".menu").click(function () {
    $(".main-xs").animate({
        "right": "0px"
    });
    $("html").css("overflow", "hidden");
    $(".opacitys").css("right", "0px");
});
$(".close").click(function () {
    $(".main-xs").animate({
        "right": "-253px"
    }, 800);
    $("html").removeAttr("style");
    $(".opacitys").css("right", "-100%");
    $(".click-close").css("right", "100%");
});

$(".opacitys").click(function () {
    $("html").removeAttr("style");
    $(this).css("right", "-100%");
    $(".main-xs").animate({
        "right": "-253px"
    }, 800);
});
var sel = 1;

$(".select").click(function () {
    if (sel == 1) {
        $(".select").attr("class", "select pointer glyphicon glyphicon-menu-up");
        $(".click-close").css("right", "0%");
        $(".option").css("height", "auto");
        sel = 2;
    } else if (sel == 2) {
        $(".select").attr("class", "select pointer glyphicon glyphicon-menu-down");
        $(".option").css("height", "0px");
        sel = 1;
    }
})
$(".click-close,.titr-xs,.titr-xs").click(function () {
    $(".select").attr("class", "select pointer glyphicon glyphicon-menu-down");
    $(".option").css("height", "0px");
    sel = 1;
    $(".box-search").css("display", "none");
    $(".click-close").css("right", "100%");
    ico = 1;
    $(".select-xs").attr("class", "col-xs-6 select-xs glyphicon glyphicon-menu-down");
    $(".option-xs").css("display", "none");
    selxs = 1;

    $(".down-main").css('height', '0px');
    w = 1;
});
$(".option").click(function () {
    $(".click-close").css("right", "100%")
})
$("#input2").click(function () {
    $(".select-xs").attr("class", "col-xs-6 select-xs glyphicon glyphicon-menu-down");
    $(".option-xs").css("display", "none");
    selxs = 1;
})
$(".option ul li").click(function () {
    if ("ul>li") {
        $("#span").text($(this).text());
        $("#cat").val('2');
    }
});
var ico = 1;
$(".search-icon").click(function () {
    if (ico == 1) {
        $(".click-close").css("right", "0%");
        $(".box-search").css("display", "block");
        ico = 2;
    } else if (ico == 2) {
        $(".click-close").css("right", "100%");
        $(".box-search").css("display", "none");
        ico = 1;
    }
})
/*-------------------------------select-----------------------------*/
var selxs = 1;
$(".select-xs").click(function () {
    if (selxs == 1) {
        $(this).attr("class", "col-xs-6 select-xs glyphicon glyphicon-menu-up");
        $(".option-xs").css("display", "block");
        selxs = 2;
    } else if (selxs == 2) {
        $(this).attr("class", "col-xs-6 select-xs glyphicon glyphicon-menu-down");
        $(".option-xs").css("display", "none");
        selxs = 1;
    }
});
$(".option-xs li").click(function () {
    if ("ul>li") {
        $("#span1").text($(this).text());
        $("#cat-xs").val($(this).text());
    }
});
$("#icon-search-btn").click(function (e) {
    e.preventDefault();
    var txt = $("#input1").val();
    $("#search-text").val(txt);
    $("#searchform").submit();
});
$("#icon-search-btnxs").click(function (e) {
    e.preventDefault();
    var txt = $("#input2").val();
    $("#search-text-xs").val(txt);
    $("#searchform-xs").submit();
});
$(window).scroll(function () {
    var re = $(window).scrollTop();
    if (re > 200) {
        $(".to-top").fadeIn()
    } else {
        $(".to-top").fadeOut()
      
    }

    if (re > 80) {
        $(".logo").prependTo($(".main-fixed"));
        $(".search-md").prependTo($(".main-fixed"));
        $(".search-md").addClass("search-md-add");
        $(".logo a").css("margin", "0px 0px 0px 40px");
        $(".logo a").css("font-size", "21px");
        $("#aa").addClass("main-add");
        $(".main-fixed").addClass("container");
        $(".select").attr("class", "select pointer glyphicon glyphicon-menu-down");
        $(".option").css("height", "0px");
        sel = 1;
    } else {
        $("#aa").removeAttr("class");
        $(".main-fixed").removeClass("container");
        $(".logo").prependTo($(".top-header"));
        $(".logo a").removeAttr("style");
        $(".search-md").insertAfter($(".top-header"));
        $(".search-md").removeClass("search-md-add");
    }
});
$(document).ready(function () {
    $(".to-top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000)
    })
})
/*
 ----------------------------isslider------------
 */
$(function () {
    var tmb = $(".ch div"), sn = st = 0, sL = $(".slids .hot").length;

    function setSlide(i) {
        $('.slids').css('margin-top', -i * $('.slids').height());
        tmb.removeClass("active").eq(i).addClass("active");
        st = (new Date).getTime();
        sn = i;
    }

    tmb.click(function () {
        setSlide($(this).index());
    });
    setInterval(function () {
        setSlide((sn < sL - 1) ? 1 + sn : 0)
    }, 6000);
    $(".menu-icon").click(function () {
        $("nav>ul").toggleClass("hide-in-small");
    });
});
/*
 ----------------------------endslider------------box-archive
 */
$(".last-ch").click(function () {
    $(".big-archive").attr("class", "col-md-12 col-sm-12 col-xs-12 big-archive");
    $(".big-archive img").attr("class", "col-md-2 col-sm-2 col-xs-2");
    $(".big-archive img").css({
        "height": "100px",
        "padding-right": "0px",
        "padding-left": "10px"
    });
    $(".big-archive-inline").attr("class", "big-archive-inline col-md-10 col-sm-10 col-xs-10");
    $(".big-archive-inline").css("margin", "0px");
    $(".big-archive").css({
        "padding-right": "15px",
        "padding-left": "15px"
    });
    $(".little").attr("class", "col-md-12 col-sm-12 col-xs-12 little");
    $(".little").css("margin-top", "0px")
    $(".little img").attr("class", "col-md-2 col-sm-2 col-xs-12");
    $(".little img").css({
        "padding-right": "0px",
        "padding-left": "8px",
        "height": "100px"
    });
    $(".big-archive-inline-big").attr("class", "big-archive-inline-big col-md-10 col-sm-10 col-xs-10");
    $(".big-archive-inline-big").css({
        "margin": "0px",
        "padding-right": "17px"
    });
    $(".hr-archive").css("display", "inline-block");
    $(".hr").css("display", "none");


    $(".big-archive-inline p").css("display", "block")
    $(".big-archive-inline-big p").css("display", "block")
});





$(".box-archive").click(function () {


    $(".big-archive-inline p").css("display", "none")
    $(".big-archive-inline-big p").css("display", "none")

    $(".little").css("margin-top", "8px")
    $(".big-archive").attr("class", "col-md-6 col-sm-6 col-xs-6 big-archive");
    $(".big-archive img").attr("class", "col-md-12 col-sm-12 col-xs-12 big-archive");
    $(".big-archive").removeAttr("style")
    $(".big-archive-inline").attr("class", "big-archive-inline col-md-12 col-sm-12 col-xs-12");
    $(".big-archive-inline").css("margin", "10px 0px 0px 0px");
    $(".little").attr("class", "col-md-2 col-sm-2 col-xs-2 little");
    $(".little img").attr("class", "col-md-12 col-sm-12 col-xs-12");
    $(".little img").css({
        "padding-right": "0px",
        "padding-left": "0px",
        "height": "116px"
    });
    $(".big-archive-inline-big").css({
        "margin": "10px 0px",
        "padding-right": "0px"
    });
    $(".hr-archive").css("display", "none");
    $(".hr").css("display", "inline-block");
});
$(".xs-hover span").click(function () {
    var rto = $(this).attr('data-state');
    if (rto == 1) {
        $(this).attr("class", "glyphicon glyphicon-minus");
        $(this).parents('.my-main li').children(".drop-xs").slideDown(200);
        $(this).attr('data-state', 2);
    } else if (rto == 2) {
        $(this).attr("class", "glyphicon glyphicon-plus");
        $(this).closest('.my-main li').children(".drop-xs").slideUp(300);
        $(this).attr('data-state', 1);

    }
});

//$(".lower span").click(function () {
//    var rtu = $(this).attr('data-state');
//    if (rtu == 1) {
//        $(this).attr("class", "glyphicon glyphicon-minus");
//        $(this).parents('.drop-xs li').children(".last-main-xs").slideDown(200);
//        $(this).attr('data-state', 2);
//    } else if (rtu == 2) {
//        $(this).attr("class", "glyphicon glyphicon-plus");
//        $(this).parents('.drop-xs li').children(".last-main-xs").slideUp(200);
//        $(this).attr('data-state', 1);
//    }
//});