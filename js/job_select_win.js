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

    setInterval(function() {
        var cap_img = $(".item_img").eq(1);
        var emblem_img = $(".item_img").eq(2);
        var weapon_img = $(".item_img").eq(13);
        var clothes_img = $(".item_img").eq(14);
        var sub_weapon_img = $(".item_img").eq(16);
        var poket_img = $(".item_img").eq(17);
        var pants_img = $(".item_img").eq(19);
        
        var adventurer_warrior = ["hero", "paladin", "darknight"];
        var adventurer_magician = ["bishop", "arch_mage_fire", "arch_mage_ice"];
        var adventurer_bowman = ["bow_master", "marksman", "pathfinder"];
        var adventurer_thief = ["night_lord", "shadower", "dual_blade"];
        var adventurer_pirate = ["captain", "viper", "cannon_shooter"];
        var cygnus = ["mikhail", "soul_master", "flame_wizard", "wind_breaker", "night_walker", "striker"];
        var hero = ["aran", "luminous", "evan", "mercedes", "phantom", "eunwol"];
        var resistance = ["blaster", "battlemage", "wild_hunter", "mechanic"];
        var demon = ["demon"]; // "demon_avenger"은 아직 미지원, 지원 전까지 "demon_slyaer" = "demon"
        var nova = ["kaiser", "cadena", "angelic_burster"];
        var lef = ["illium", "ark"];
        //"zero", "kinesis", "ho_young" / "xenon"은 아직 미지원

        var emblem_adventurer = adventurer_warrior.concat(adventurer_magician, adventurer_bowman, adventurer_thief, adventurer_pirate);
        var armor_warrior = adventurer_warrior.concat(cygnus[0], cygnus[1], hero[0], resistance[0], demon[0], nova[0], "zero");
        var armor_magician = adventurer_magician.concat(cygnus[2], hero[1], hero[2], resistance[1], lef[0], "kinesis");
        var armor_bowman = adventurer_bowman.concat(cygnus[3], hero[3], resistance[2]);
        var armor_thief = adventurer_thief.concat(cygnus[4], hero[4], nova[1], "ho_young");
        var armor_pirate = adventurer_pirate.concat(cygnus[5], hero[5], resistance[3], nova[2], lef[1]);
        
        var poket_str = adventurer_warrior.concat(adventurer_pirate[1], adventurer_pirate[2], cygnus[0], cygnus[1], cygnus[5], hero[0],
                                                  hero[5], resistance[0], demon[0], nova[0], lef[1], "zero");
        var poket_dex = adventurer_bowman.concat(adventurer_pirate[0], cygnus[3], hero[3], resistance[2], resistance[3], nova[2]);
        var poket_int = adventurer_magician.concat(cygnus[2], hero[1], hero[2], resistance[1], lef[0], "kinesis");
        var poket_luk = adventurer_thief.concat(cygnus[4], hero[4], nova[1], "ho_young");

        // 무기, 보조

        if(emblem_adventurer.indexOf(selected_job) != -1) {
            emblem_img.css("background-image", item_img_path + "emblem_adventurer" + path_end);
        } else if(cygnus.indexOf(selected_job) != -1) {
            emblem_img.css("background-image", item_img_path + "emblem_cygnus" + path_end);
        } else if(resistance.indexOf(selected_job) != -1) {
            emblem_img.css("background-image", item_img_path + "emblem_resistance" + path_end);
        } else if(demon.indexOf(selected_job) != -1) {
            emblem_img.css("background-image", item_img_path + "emblem_demon" + path_end);
        } else if(selected_job == "aran") {
            emblem_img.css("background-image", item_img_path + "emblem_aran" + path_end);
        } else if(selected_job == "luminous") {
            emblem_img.css("background-image", item_img_path + "emblem_luminous" + path_end);
        } else if(selected_job == "evan") {
            emblem_img.css("background-image", item_img_path + "emblem_evan" + path_end);
        } else if(selected_job == "mercedes") {
            emblem_img.css("background-image", item_img_path + "emblem_mercedes" + path_end);
        } else if(selected_job == "phantom") {
            emblem_img.css("background-image", item_img_path + "emblem_phantom" + path_end);
        } else if(selected_job == "eunwol") {
            emblem_img.css("background-image", item_img_path + "emblem_eunwol" + path_end);
        } else if(selected_job == "kaiser") {
            emblem_img.css("background-image", item_img_path + "emblem_kaiser" + path_end);
        } else if(selected_job == "cadena") {
            emblem_img.css("background-image", item_img_path + "emblem_cadena" + path_end);
        } else if(selected_job == "angelic_burster") {
            emblem_img.css("background-image", item_img_path + "emblem_angelic_burster" + path_end);
        } else if(selected_job == "illium") {
            emblem_img.css("background-image", item_img_path + "emblem_illium" + path_end);
        } else if(selected_job == "ark") {
            emblem_img.css("background-image", item_img_path + "emblem_ark" + path_end);
        } else if(selected_job == "zero") {
            emblem_img.css("background-image", item_img_path + "emblem_zero" + path_end);
        } else if(selected_job == "kinesis") {
            emblem_img.css("background-image", item_img_path + "emblem_kinesis" + path_end);
        } else if(selected_job == "ho_young") {
            emblem_img.css("background-image", item_img_path + "emblem_ho_young" + path_end);
        } 

        if(armor_warrior.indexOf(selected_job) != -1) {
            cap_img.css("background-image", item_img_path + "warrior_cap" + path_end);
            clothes_img.css("background-image", item_img_path + "warrior_clothes" + path_end);
            pants_img.css("background-image", item_img_path + "warrior_pants" + path_end);
        } else if(armor_magician.indexOf(selected_job) != -1) {
            cap_img.css("background-image", item_img_path + "magician_cap" + path_end);
            clothes_img.css("background-image", item_img_path + "magician_clothes" + path_end);
            pants_img.css("background-image", item_img_path + "magician_pants" + path_end);
        } else if(armor_bowman.indexOf(selected_job) != -1) {
            cap_img.css("background-image", item_img_path + "bowman_cap" + path_end);
            clothes_img.css("background-image", item_img_path + "bowman_clothes" + path_end);
            pants_img.css("background-image", item_img_path + "bowman_pants" + path_end);
        } else if(armor_thief.indexOf(selected_job) != -1) {
            cap_img.css("background-image", item_img_path + "thief_cap" + path_end);
            clothes_img.css("background-image", item_img_path + "thief_clothes" + path_end);
            pants_img.css("bacskground-image", item_img_path + "thief_pants" + path_end);
        } else if(armor_pirate.indexOf(selected_job) != -1) {
            cap_img.css("background-image", item_img_path + "pirate_cap" + path_end);
            clothes_img.css("background-image", item_img_path + "pirate_clothes" + path_end);
            pants_img.css("background-image", item_img_path + "pirate_pants" + path_end);
        }

        if(poket_str.indexOf(selected_job) != -1) {
            poket_img.css("background-image", item_img_path + "poket_str" + path_end);
        } else if(poket_dex.indexOf(selected_job) != -1) {
            poket_img.css("background-image", item_img_path + "poket_dex" + path_end);
        } else if(poket_int.indexOf(selected_job) != -1) {
            poket_img.css("background-image", item_img_path + "poket_int" + path_end);
        } else if(poket_luk.indexOf(selected_job) != -1) {
            poket_img.css("background-image", item_img_path + "poket_luk" + path_end);
        }
    }, 10);

});