$(document).ready(() => {
    $("#menu").click(() => {
        $("#sidenav").css("width", "305px");
        $("#menu").fadeOut(200);
    });
    $("#close-btn").click(function () {
        $("#sidenav").css("width", "0px");
        $("#menu").fadeIn(200);
    });
});