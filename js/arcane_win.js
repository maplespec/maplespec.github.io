var symbol_edit_btn_click = function() {
    var index = $(".symbol_edit_btn").index(this);
    console.log(index);
}

$(document).ready(function() {
    $(".symbol_edit_btn").click(symbol_edit_btn_click);
});
