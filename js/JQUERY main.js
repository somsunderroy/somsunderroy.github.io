$(document).ready(function(){
    $("ul li:nth-child(1)").hover(function(){
        $("#line").css("margin-left","3px");
    });
    $("ul li:nth-child(2)").hover(function(){
        $("#line").css("margin-left","110px");
    });
    $("ul li:nth-child(3)").hover(function(){
        $("#line").css("margin-left","220px");
    });
});