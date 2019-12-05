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
        if(selected_job == "aran") {
            $(".item_img").eq(17).css("background-image", item_img_path + "poket_str" + path_end);            
        }
        $("#equip_arcane_win").css("display", "block");
    });

    $("#job_cancel_btn, #job_ok_btn").click(function() {
        $("#job_popup_area").css("display", "none");
        $("#job_select_popup").css("display", "none");
        $("#xenon_select_popup").css("display", "none");
    });


});