$(document).ready(function () {
    $("#maint").on('click', function (event) {
        $("#maintData").fadeIn(200);
        $("#bswTeam").fadeOut(200);
        $("#NSSteam").fadeOut(200);
    });
    $("#NSS").click(function () {
        $("#maintData").fadeOut(200);
        $("#bswTeam").fadeOut(200);
        $("#NSSteam").fadeIn(200);
    });
    $("#bsw").click(function () {
        $("#maintData").fadeOut(200);
        $("#bswTeam").fadeOut(200);
        $("#NSSteam").fadeIn(200);
    });
});
