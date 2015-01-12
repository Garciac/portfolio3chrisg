/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function(){ 
    $(".practice").css("background-color", "yellow");
    
    $("p:nth-child(1)").css("background-color", "cyan");
    
    $("p:nth-child(2)").css("background-color", "red");
    
    $("p:nth-child(3)").css("background-color", "green");
    
    $("p:nth-child(4)").css("background-color", "gray");
    
    
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
            
    $('h1').bind('mouseover', mouseOverMe());
    
    $('h1').bind('click', mouseClick);
    
    $('#replaceWHtml').bind('click', replaceWHtml);
    $('#replaceWText').bind('click', replaceWText);
    $('#addAPARA').bind('click', addAPara);
    $('#removeAPara').bind('click', removeAPara);
    
});

function mouseOverMe(){
    $("p").html("yahoo");
}

function mouseOutMe(){
    $('h1').html('google');
}

function mouseClick(){
    
    $('p').html('sankjnnn[djaknjdnjasdnjsdakjdknda');
}

function replaceWHtml(){
    $('#h3Tag').html('<h6>Now I\'m an h6</h6');
}

function replaceWText(){
    $('#h3Tag').text('<h6>Now I\'m an h6</h6>');
}

function addAPara(){
    $('#randPara').append('<p>Another paragraph</p>');
}

function removeAPara(){
    $('#randPara p:last').remove();
}