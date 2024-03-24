$(document).ready(function() {
    let turn = 0;
    $("div.original>button").click() = function() {
        this = turn ? "O" : "X";
        turn = turn ? null : 1;
    }
});