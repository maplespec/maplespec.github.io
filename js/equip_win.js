var item_tooltip = function(e) {
    var x = e.clientX - 10;
    var y = e.clientY - 10;
    var width = 261;
    var height = $("#item_info_bg").height();
    var left = $("#item_info_bg").offset().left;
    var top = $("#item_info_bg").offset().top;
    $("#item_info_bg").css("display", "block");
    if (x > 1366 - width) {
        x = 1366 - width;
    }
    if (y > 768 - height) {
        y = 768 - height;
    }
    $("#item_info_bg").css("left", x + "px");
    $("#item_info_bg").css("top", y + "px");

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
}

var item_tooltip_close = function() {
    $("#item_info_bg").css("display", "none");
}

var itemimgClicked = false;
var item_img_click = function() {
    itemimgClicked = true;
    $("#item_info_bg").css("pointer-events", "inherit");
    $(".item_img").off("mousemove");
    $(".item_img").off("mouseout");
}

var iteminfobtnClicked = false;
var item_info_btn_click = function() {
    iteminfobtnClicked = true;
    item_tooltip_close();
    $("#item_info_bg").css("pointer-events", "none");
    $(".item_img").on("mousemove", item_tooltip);
    $(".item_img").on("mouseout", item_tooltip_close);
}

var arcane_btn_click = function() {
    $("#arcane_bg").toggle();
}

$(document).ready(function() {
    $(".item_img").on("mousemove", item_tooltip);
    $(".item_img").on("mouseout", item_tooltip_close);
    $(".item_img").click(item_img_click);
    $(".item_info_btn").click(item_info_btn_click);
    $("#arcane_btn").click(arcane_btn_click);
});

