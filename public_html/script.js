/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function(){ 
    // adds a yellow background for the sentence that has different colors
    $(".practice").css("background-color", "yellow");
    
    // setttings for accordion in (superHumans)
    $('#superHumans').accordion({header: "h3"});
    
    //adds color for each sentence 
    $("p:nth-child(1)").css("background-color", "cyan");
    
    $("p:nth-child(2)").css("background-color", "red");
    
    $("p:nth-child(3)").css("background-color", "green");
    
    $("p:nth-child(4)").css("background-color", "gray");
    
    
//    $("h1").bind('mouseover', mouseOverMe).bind('mouseOut', mouseOutMe);
//            
//    $('h1').bind('mouseover', mouseOverMe());
//    
//    $('h1').bind('click', mouseClick);
    
    // settings for (replaceWText),(randPara), and (removePara) to add, replace, or delete sentence
    $('#replaceWText').bind('click', replaceWText);
    
    $('#randPara').bind('click', addAPara);
    
    $('#removePara').bind('click', removeAPara);
    
// these 3 are settings below is for the page to hide
    $('#hide').bind('click', hideThePage);
    
    $('#show').bind('click', showThePage);
    
    $('#show').bind('click', 'hidden');
    
    //settings for animation
    
    $('#hideLogo').bind('click', hideTheImage);
    $('#showLogo').bind('click', showTheImage);
    $('#toggleText').bind('click', toggleTheText);
    $('#fadeLogo').bind('click', fadeTheImage);
    $('#fadeALittle').bind('click', fullALittle);
    $('#fullOpacity').bind('click', fullOpacityImage);
    $('#slideAway').bind('click', slideTheImage);
    $('#slideBack').bind('click', unslideTheImage);
    $('#customAnim').bind('click', customAnimate);
    $('#shakeLogo').bind('click', shakeLogo);
    $('#bounceLogo').bind('click', bounceLogo);
    $('#highlightLogo').bind('click', highlightLogo);
    $('#pulsateLogo').bind('click', pulsateLogo);
    $('#sizeLogo').bind('click', sizeLogo);
    
    
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

function hideTheImage(){
    $('#logo').hide('puff', {}, 2500);
}

function showTheImage(){
    $('#logo').show('fold', {}, 2500);
}

function toggleTheText(){
    $('h4').toggle(2500);
}

function fadeTheImage(){
    $('#logo').fadeOut(2500);
}

function fadeALittle(){
    $('#logo').fadeTo(2500, .30);
}


function fullOpacityImage(){
    $('#logo').fadeTo(2500, 1);
}

function slideTheImage(){
    $('#second').slideUp(2500);
}

function unslideTheImage(){
    $('#second').slideDown(2500);
}

function customAnimate(){
    $('#logo').animate({opacity: 0.25, height:'150px'}, 2000, 'swing');
}

function shakeLogo(){
    $('#logo').effect('shake', {time: 5, direction: 'down', distance: 10}, 200);
}

function bounce(){
    $('#logo').effect('bounce', {times: 5, direction:'down', distance: 10}, 200);
}

function highlightLogo(){
    $('h3').effect('highlight', {color: 'purple'}, 500);
}

function pulsateLogo(){
    $('#logo').effect('pulsate', {times: 5}, 200);
}

function sizeLogo(){
    $('#logo').effect('size',{to: {height: 350, width:350}}, 200);
}

