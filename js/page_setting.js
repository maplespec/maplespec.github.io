$(document).ready(function() {
    $(document).contextmenu(function() {
        return false;
    });

    $(document).bind("selectstart dragstart", function(e) {
        e.preventDefault();
        return false;
    });

    $(document).mousedown(function() {
        $(".symbol_edit_btn, .item_info_btn").css("animation", "none");
        $('html').css("cursor", "url('image/cursor/click.png'), auto");
    });

    $(document).mouseup(function() {
        $(".symbol_edit_btn, .item_info_btn").css("animation", "button_over 0.75s infinite");
        $('html').css("cursor", "url('image/cursor/default.png'), auto");
    });

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
});