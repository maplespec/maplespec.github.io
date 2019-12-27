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

var set_equip_img = function() {
    var cap_img = $(".item_img").eq(1);
    var emblem_img = $(".item_img").eq(2);
    var weapon_img = $(".item_img").eq(13);
    var clothes_img = $(".item_img").eq(14);
    var sub_weapon_img = $(".item_img").eq(16);
    var poket_img = $(".item_img").eq(17);
    var pants_img = $(".item_img").eq(19);
    var arcane_stat_txt_img = $("#stat_txt");
    
    var adventurer_warrior = ["hero", "paladin", "dark_night"];
    var adventurer_magician = ["bishop", "arch_mage_fire", "arch_mage_ice"];
    var adventurer_bowman = ["bow_master", "marksman", "pathfinder"];
    var adventurer_thief = ["night_lord", "shadower", "dual_blade"];
    var adventurer_pirate = ["captain", "viper", "cannon_shooter"];
    var cygnus = ["mikhail", "soul_master", "flame_wizard", "wind_breaker", "night_walker", "striker"];
    var hero = ["aran", "luminous", "evan", "mercedes", "phantom", "eunwol"];
    var resistance = ["blaster", "battle_mage", "wild_hunter", "mechanic"];
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
    /*
    히어로 : 한손검, 한손도끼, 두손검, 두손도끼
    팔라딘 : 한손검, 한손둔기, 두손검, 두손둔기
    다크나이트 : 창, 폴암
    비숍, 불독, 썬콜, 플레임위자드, 에반 : 스태프, 완드
    보우마스터, 윈드브레이커 : 활
    신궁, 와일드헌터 : 석궁
    패스파인더 : 에인션트보우
    나이트로드, 나이트워커 : 아대
    섀도어, 듀얼블레이드 : 단검
    캡틴, 메카닉 : 건
    바이퍼, 스트라이커, 은월, 아크 : 너클
    캐논슈터 : 핸드캐논
    미하일 : 한손검
    소울마스터 : 한손검, 두손검
    아란 : 폴암
    루미너스 : 샤이닝로드
    메르세데스 : 듀얼보우건
    팬텀 : 케인
    블래스터 : 건틀렛리볼버
    데몬어벤져 : 데스페라도
    데몬슬레이어 : 한손도끼, 한손둔기
    배틀메이지 : 스태프
    카이저 : 두손검
    엔젤릭버스터 : 소울슈터
    카데나 : 체인
    일리움 : 매직건틀렛
    키네시스 : ESP리미터
    호영 : 부채
    제로 : 태도/대검
    */

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
        arcane_stat_txt_img.css("background-image", "url('image/arcane_win/str.png')");
    } else if(poket_dex.indexOf(selected_job) != -1) {
        poket_img.css("background-image", item_img_path + "poket_dex" + path_end);
        arcane_stat_txt_img.css("background-image", "url('image/arcane_win/dex.png')");
    } else if(poket_int.indexOf(selected_job) != -1) {
        poket_img.css("background-image", item_img_path + "poket_int" + path_end);
        arcane_stat_txt_img.css("background-image", "url('image/arcane_win/int.png')");
    } else if(poket_luk.indexOf(selected_job) != -1) {
        poket_img.css("background-image", item_img_path + "poket_luk" + path_end);
        arcane_stat_txt_img.css("background-image", "url('image/arcane_win/luk.png')");
    }
}

var selected_job;
var isJobSelected;

$(document).ready(function() {
    
    $('select').each(function(){
        var $this = $(this), numberOfOptions = $(this).children('option').length;
      
        $this.addClass('select-hidden'); 
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');
    
        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());
      
        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);
      
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }
      
        var $listItems = $list.children('li');
      
        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function(){
                $(this).removeClass('active').next('ul.select-options').hide();
            });
             $(this).toggleClass('active').next('ul.select-options').toggle();           
        });
      
        $listItems.click(function(e) {
            e.stopPropagation();
            if($(this).text() == "아크메이지(불,독)") {
                $styledSelect.text("아크메이지(불..").removeClass('active');
            } else if($(this).text() == "아크메이지(썬,콜)") {
                $styledSelect.text("아크메이지(썬..").removeClass('active');
            } else {
                $styledSelect.text($(this).text()).removeClass('active');
            }
            $this.val($(this).attr('rel'));
            $list.hide();
            selected_job = $this.val();
            isJobSelected = true;

            switch(selected_job) {
                case "warrior":
                    $(".hide_selectbox").css("display", "none");
                    $("#adventurer_selectbox_warrior").css("display", "block");
                    $(".select-styled").eq(1).text("- 직업 -");
                    isJobSelected = false;
                    break;
                case "magician":
                    $(".hide_selectbox").css("display", "none");
                    $("#adventurer_selectbox_magician").css("display", "block");
                    $(".select-styled").eq(2).text("- 직업 -");
                    isJobSelected = false;
                    break;
                case "bowman":
                    $(".hide_selectbox").css("display", "none");
                    $("#adventurer_selectbox_bowman").css("display", "block");
                    $(".select-styled").eq(3).text("- 직업 -");
                    isJobSelected = false;
                    break;
                case "thief":
                    $(".hide_selectbox").css("display", "none");
                    $("#adventurer_selectbox_thief").css("display", "block");
                    $(".select-styled").eq(4).text("- 직업 -");
                    isJobSelected = false;
                    break;
                case "pirate":
                    $(".hide_selectbox").css("display", "none");
                    $("#adventurer_selectbox_pirate").css("display", "block");
                    $(".select-styled").eq(5).text("- 직업 -");
                    isJobSelected = false;
                    break;
                case "soul_master":
                case "blaster":
                    $(".select_disabled").text("전사");
                    break;
                case "flame_wizard":
                case "battle_mage":
                    $(".select_disabled").text("마법사");
                    break;
                case "wind_breaker":
                case "wild_hunter":
                    $(".select_disabled").text("궁수");
                    break;
                case "night_walker":
                    $(".select_disabled").text("도적");
                    break;
                case "striker":
                case "mechanic":
                    $(".select_disabled").text("해적");
                    break;
            }
        });
      
        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });

        $(".etc_cancel_btn").click(function() {
            $styledSelect.text($this.children('option').eq(0).text());
        });
    
    });

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
        } else if(selected_job == "adventurer") {
            $("#job_select_popup_title").css("background-image", job_title_img_path + "adventurer" + path_end);
            $("#job_popup_area").css("display", "block");
            $("#adventurer_select_popup").css("display", "block");
        } else if(selected_job == "cygnus") {
            $("#job_select_popup_title").css("background-image", job_title_img_path + "cygnus" + path_end);
            $("#job_popup_area").css("display", "block");
            $("#cygnus_select_popup").css("display", "block");
        } else if(selected_job == "resistance") {
            $("#job_select_popup_title").css("background-image", job_title_img_path + "resistance" + path_end);
            $("#job_popup_area").css("display", "block");
            $("#resistance_select_popup").css("display", "block");
        } else {
            $("#job_popup_area").css("display", "block");
            $("#job_select_popup").css("display", "block");
        }
    });

    $("#job_select_btn").click(function() {
        set_equip_img();
        $("#job_select_win").css("display", "none");
        $("#equip_arcane_win").css("display", "block");
    });
    
    $("#adventurer_select_btn").click(function() {
        if(isJobSelected == true) {
            $("#job_select_popup").css("display", "block");
        } else if(isJobSelected == false) {
            alert("직업을 선택해주세요.");
        } else {
            alert("직업군을 선택해주세요.");
        }
    });

    $(".etc_select_btn").click(function() {
        if(isJobSelected == true) {
            $("#job_select_popup").css("display", "block");
        } else {
            alert("직업을 선택해주세요.");
        }
    });

    $("#job_cancel_btn, #xenon_ok_btn").click(function() {
        if($("#adventurer_select_popup").css("display") == "block") {
            $("#job_select_popup").css("display", "none");
        } else if($("#cygnus_select_popup").css("display") == "block") {
            $("#job_select_popup").css("display", "none");
        } else if($("#resistance_select_popup").css("display") == "block") {
            $("#job_select_popup").css("display", "none");
        } else {
            $("#job_popup_area").css("display", "none");
            $("#job_select_popup").css("display", "none");
            $("#xenon_select_popup").css("display", "none");
        }
    });

    $(".etc_cancel_btn").click(function() {
        $(".select_disabled").text("- 직업군 -");
        $("#job_popup_area").css("display", "none");
        $(".etc_select_popup").css("display", "none");
        $(".hide_selectbox").css("display", "none");
    });

});