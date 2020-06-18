$(document).ready(function(){
    var path = window.location.pathname;
    var current_state = path.substring(1, (path.length - 5));

    $("#"+current_state).css({"color": "white", "background-color": "green"})
    $("#current_nav_menu").text($("li#"+current_state+" > span").text());


    console.log(current_state);
});