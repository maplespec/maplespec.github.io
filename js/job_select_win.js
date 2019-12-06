var disable_arrow_cursor = function() {
    if($("#job_page_1").css("visibility") == "visible") {
        $("#left_btn").css("animation", "none");
    } else {
        $("#left_btn").css("animation", "button_over 0.75s infinite");
    }
    if($("#job_page_2").css("visibility") == "visible") {
        $("#right_btn").css("animation", "none");
    } else {
        $("#right_btn").css("animation", "button_over 0.75s infinite");
    }
}

var selected_job;

$(document).ready(function() {
    $("#job_popup_area").css("display", "none");
    $("#job_select_popup").css("display", "none");
    $("#xenon_select_popup").css("display", "none");
    $("#left_btn").css("animation", "none");

    $("#right_btn").hover(function() {
        $(this).css("background-image", job_img_path + "right_btn_over" + path_end);
    }, function() {
        $(this).css("background-image", job_img_path + "right_btn" + path_end);
    });

    $("#right_btn").click(function() {
        $("#job_page_1").css("visibility", "hidden");
        $("#job_page_2").css("visibility", "visible");
        $("#left_btn").css("background-image", job_img_path + "left_btn" + path_end);
        $("#left_btn").hover(function() {
            $(this).css("background-image", job_img_path + "left_btn_over" + path_end);
        }, function() {
            $(this).css("background-image", job_img_path + "left_btn" + path_end);
        });
        $(this).unbind("mouseenter mouseleave");
        $(this).css("background-image", job_img_path + "right_btn_disabled" + path_end);
    });

    $("#left_btn").click(function() {
        $("#job_page_2").css("visibility", "hidden");
        $("#job_page_1").css("visibility", "visible");
        $("#right_btn").css("background-image", job_img_path + "right_btn" + path_end);
        $("#right_btn").hover(function() {
            $(this).css("background-image", job_img_path + "right_btn_over" + path_end);
        }, function() {
            $(this).css("background-image", job_img_path + "right_btn" + path_end);
        });
        $(this).unbind("mouseenter mouseleave");
        $(this).css("background-image", job_img_path + "left_btn_disabled" + path_end);
    });

    $(".job_img").click(function() {
        selected_job = $(this).attr("id");
        /*if(selected_job == "xenon") {
            console.log(selected_job + "은 선택 불가능");
        } else {
            console.log(selected_job + "을 선택함");
        }*/
        $("#job_select_popup_title").css("background-image", job_title_img_path + selected_job + path_end);
        if(selected_job == "xenon") {
            $("#job_popup_area").css("display", "block");
            $("#xenon_select_popup").css("display", "block");
        } else {
            $("#job_popup_area").css("display", "block");
            $("#job_select_popup").css("display", "block");
        }
    });

    $("#job_select_btn").click(function() {
        $("#job_select_win").css("display", "none");
        $("#equip_arcane_win").css("display", "block");
    });

    $("#job_cancel_btn, #job_ok_btn").click(function() {
        $("#job_popup_area").css("display", "none");
        $("#job_select_popup").css("display", "none");
        $("#xenon_select_popup").css("display", "none");
    });

    /*var item_img_exception = [1, 2, 13, 14, 16, 17, 19];
        var item_img = $(".item_img").eq(i);
        if (item_img_exception.indexOf(i) != -1) {
            continue;
        }*/
    // 엠블, 모자+상의+하의, 무기, 보조, 포켓
    setInterval(function() {
        // 엠블렘
        var adventurer_warrior = ["hero", "paladin", "darknight"];
        var adventurer_magician = ["bishop", "arch_mage_fire", "arch_mage_ice"];
        var adventurer_bowman = ["bow_master", "marksman", "pathfinder"];
        var adventurer_thief = ["night_lord", "shadower", "dual_blade"];
        var adventurer_pirate = ["captain", "viper", "cannon_shooter"];
        var cygnus = ["mikhail", "soul_master", "flame_wizard", "wind_breaker", "night_walker", "striker"];
        var hero = ["aran", "luminous", "evan", "mercedes", "phantom", "eunwol"];
        var resistance = ["blaster", "battlemage", "wild_hunter", "mechanic"];
        var demon = ["demon_slayer", "demon_avenger"];
        var nova = ["kaiser", "cadena", "angelic_burster"];
        var lef = ["illium", "ark"];
        //"zero", "kinesis", "ho_young"은 따로 / "xenon"은 미지원
        
        if(selected_job == "aran") {
            $(".item_img").eq(17).css("background-image", item_img_path + "poket_str" + path_end);
        }
    }, 10);

});