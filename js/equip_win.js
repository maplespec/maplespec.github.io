$(document).ready(function() {
    var item_tooltip = function(e) {
        var x = e.clientX - 10;
        var y = e.clientY - 10;
        var width = 261;
        var left = $("#item_info_bg").offset().left;
        var height = $("#item_info_bg").height();
        var top = $("#item_info_bg").offset().top;
        var y_gap = height - (768 - top);
        var x_gap = width - (1366 - left);

        if(y_gap >= 0) {
            y = top - y_gap;
        }

        if(x_gap >= 0) {
            x = left - x_gap;
        }

        var item_name = ["반지", "모자", "엠블렘",                      // 모자 1, 엠블렘 2
                         "반지", "펜던트", "얼굴장식", "뱃지",           // 무기 13, 상의 14
                         "반지", "펜던트", "눈장식", "귀고리", "훈장",   // 보조 16, 포켓 17
                         "반지", "무기", "상의", "어깨장식", "보조무기", // 바지 19
                         "포켓 아이템", "벨트", "하의", "장갑", "망토",
                         "신발", "안드로이드", "하트"];
        var index = $(".item_img").index(this);
        var item_image = "image/equip_win/item_img/" + e.target.id + ".png";
        $("#item_info_item_name").text(item_name[index]);
        $("#equip_type_txt").text(item_name[index]);
        $("#item_info_item_img").css("background-image", "url('" + item_image + "')");
     
        $("#item_info_bg").css("left", x + "px");
        $("#item_info_bg").css("top", y + "px");
        $("#item_info_bg").css("display", "block");        
    }

    var item_tooltip_close = function() {
        $("#item_info_bg").css("display", "none");
    }

    $(".item_img").on("mousemove", item_tooltip);
    $(".item_img").on("mouseout", item_tooltip_close);
    $(".item_img").click(function() {
        $("#item_info_bg").css("pointer-events", "inherit");
        $(".item_img").off("mousemove");
        $(".item_img").off("mouseout");
    });
    
    $(".item_info_btn").click(function() {
        item_tooltip_close();
        $("#item_info_bg").css("pointer-events", "none");
        $(".item_img").on("mousemove", item_tooltip);
        $(".item_img").on("mouseout", item_tooltip_close);
    });

    $("#arcane_btn").click(function() {
        $("#arcane_bg").toggle();
    });
   
    
});

