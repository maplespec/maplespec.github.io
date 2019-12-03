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
        if(selected_job == "xenon") {
            console.log(selected_job + "은 선택 불가능");
        } else {
            console.log(selected_job + "을 선택함");
        }
    });


});