/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
    // adds a yellow background for the sentence that has different colors
    $(".practice").css("background-color", "yellow");

    // setttings for accordion in (superHumans)
    $('#superHumans').accordion({header: "h3"});

    //adds color for each sentence 
    $("p:nth-child(1)").css("background-color", "cyan");

    $("p:nth-child(2)").css("background-color", "red");

    $("p:nth-child(3)").css("background-color", "green");

    $("p:nth-child(4)").css("background-color", "gray");

    $("p:nth-child(5)").css("background-color", "brown")


    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);

    // $('h1').bind('mouseover', mouseOverMe());

    $('h1').bind('click', mouseClick);

    // settings for (replaceWText),(randPara), and (removePara) to add, replace, or delete sentence
    $('#replaceWText').bind('click', replaceWText);

    $('#randPara').bind('click', addAPara);

    $('#removePara').bind('click', removeAPara);

// these 3 are settings below is for the page to hide
    $('#hide').bind('click', hideThePage);

    //$('#show').bind('click', showThePage);

    $('#show').bind('click', 'hidden');

});
//mouseover settings
function mouseOverMe() {
    $("h1").text('hey');
}

function mouseOutMe() {
    $('h1').text('sibling');
}

function mouseClick() {

    $('p').html('relatives');
}

//replace, add, and remove words
function replaceWText() {
    $('#replaceWText').text('Replaced!');
}

function addAPara() {
    $('#randPara').append('<p>ADDED</p>');
}

function removeAPara() {
    $('#randPara p:last').remove();
}
//hide the page settings
function hideThePage() {
    $('#show').css('visibility', 'visible');

    $('div').hide('slide', {}, 2500);

    $('#show').show('fold', {}, 2500);
}
// show the page settings
function ShowThePage() {
    $('div').show('fold', {}, 2500);
    $('#show').hide('puff', {}, 2500);
}
