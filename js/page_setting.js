function range(start, end) {
    var array = new Array();
    for(var i = start; i < end; i++) {
        array.push(i);
    }
    return array;
}

var win_width = function() {
    if($("#arcane_bg").is(":visible")) {
        $("#equip_arcane_win").css("width", "421px");
        for (var i = 946; i <= 1143; i++) {
            if($("#equip_arcane_win").css("left") == i + "px") {
                $("#equip_arcane_win").css("left", "945px");
            }
        }
    } else {
        $("#equip_arcane_win").css("width", "232px");
    }
}

var win_block_drag = function() {
    if($("#item_info_bg").is(":visible")) {
        $("#equip_arcane_win").draggable("disable");
    } else {
        $("#equip_arcane_win").draggable("enable");
    }
}

var disable_cursor = function() {
    if($("#item_info_bg").is(":visible") && itemimgClicked == true) {
        $(".item_img").css("animation", "none");
        $("[cursor=button_over]").css("animation", "none");
        itemimgClicked = false;
        $("#arcane_btn").off("click", arcane_btn_click);
        //$(".symbol_edit_btn").off("click", );
        $(".symbol_edit_btn, #arcane_btn").addClass("no-hover");
        $(".symbol_edit_btn, #arcane_btn").addClass("no-active");
    }
    if(iteminfobtnClicked == true) {
        $(".item_img").css("animation", "item_over 0.65s infinite");
        $("[cursor=button_over]").css("animation", "button_over 0.75s infinite");
        iteminfobtnClicked = false;
        $("#arcane_btn").on("click", arcane_btn_click);
        //$(".symbol_edit_btn").on("click", );
        $(".symbol_edit_btn, #arcane_btn").removeClass("no-hover");
        $(".symbol_edit_btn, #arcane_btn").removeClass("no-active");
    }
}

$(document).ready(function() {
    $(document).contextmenu(function() {
        return false;
    });

    $(".item_img").css("animation", "item_over 0.65s infinite");
    $("[cursor=button_over]").css("animation", "button_over 0.75s infinite");
    $("[cursor=btn_button_over]").css("animation", "button_over 0.75s infinite");

    /* 내일 mousedown mouseup 이용해보자...  */

    setInterval(function() {
        win_width();
        win_block_drag();
        disable_cursor();
    }, 10);

    var equip_slot_path = "url('image/equip_win/";
    var item_img_path = "url('image/equip_win/item_img/";
    var symbol_img_path = "url('image/arcane_win/";
    var path_end = ".png')";
    
    for(var i = 0; i < 25; i++) {
        var equip_slot = $(".equip_slot").eq(i);
        equip_slot.css("background-image", equip_slot_path + equip_slot.attr("id").slice(0,-5) + path_end);
    }

    for(var i = 0; i < 25; i++) {
        var item_img = $(".item_img").eq(i);
        item_img.css("background-image", item_img_path + item_img.attr("id") + path_end);
    }

    for(var i = 0; i < 6; i++) {
        var symbol_img = $(".symbol_img").eq(i);
        symbol_img.css("background-image", symbol_img_path + symbol_img.attr("id").replace("_img","") + path_end);
    }

    $("#equip_arcane_win").draggable({
        handle: $("#equip_win_title"),
        containment: $("#bg"),
        start: function(event, ui) {
            $(".item_img").off("mousemove");
            $(".item_img").off("mouseout");
        },
        stop: function(event, ui) {
            $("body").css("cursor", "url('image/cursor/default.png'), auto");
            $(".item_img").on("mousemove", item_tooltip);
            $(".item_img").on("mouseout", item_tooltip_close);
        }
    });
    /*
    function getContainment($box, $drag) {
        var x1 = $box.offset().left - 1220;
        var y1 = $box.offset().top;
        //var x2 = $box.offset().left + $box.width() - $drag.width();
        //var y2 = $box.offset().top + $box.height() - $drag.height();
        var x2 = $box.offset().left + $box.width();
        var y2 = $box.offset().top + $box.height() + 768;
        return [x1, y1, x2, y2];
    }
    $("#window_frame").draggable({
        handle: $("#window_title"),
        containment: getContainment($("#body"), $("#windo_frame"))
        
    });*/
});
