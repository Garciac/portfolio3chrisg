/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function(){ 
    $(".practice").css("background-color", "yellow");
    
    $('#superHumans').accordion({header: "h3"});
    
    $("p:nth-child(1)").css("background-color", "cyan");
    
    $("p:nth-child(2)").css("background-color", "red");
    
    $("p:nth-child(3)").css("background-color", "green");
    
    $("p:nth-child(4)").css("background-color", "gray");
    
    
//    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
//            
//    $('h1').bind('mouseover', mouseOverMe());
//    
//    $('h1').bind('click', mouseClick);
    
    $('#replaceWText').bind('click', replaceWText);
    
    $('#randPara').bind('click', addAPara);
    
    $('#removePara').bind('click', removeAPara);
    
    $('#hide').bind('click', hideThePage);
    
    $('#show').bind('click', showThePage);
    
    $('#show').bind('click', 'hidden');
    
});

//function mouseOverMe(){
//    $("p").html("yahoo");
//}
//
//function mouseOutMe(){
//    $('h1').html('google');
//}
//
//function mouseClick(){
//    
//    $('p').html('sankjnnn[djaknjdnjasdnjsdakjdknda');
//}

function replaceWText(){
    $('replaceWText').text('Replaced!');
}

function addAPara(){
    $('#randPara').append('<p>ADDED</p>');
}

function removeAPara(){
    $('#randPara p:last').remove();
}

function hideThePage(){
    $('#show').css('visibility', 'visible');
    
    $('div').hide('slide', {}, 2500);
    
    $('#show').show('fold', {}, 2500);
}

function ShowThePage(){
    $('div').show('fold', {}, 2500);
    $('#show').hide('puff', {}, 2500);
}