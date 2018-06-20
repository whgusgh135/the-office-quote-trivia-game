/*global $*/
$(document).ready(function(){
    $.getJSON("/api/quotes")
    .then(getQuote);
    
    $("button").on("click", function(){
        checkAnswer($(this));
    })
});

var quoteChar = "";
var correctNum = 0;
var quizNum = 15;

function getQuote(quotes){
    var quoteIndex = Math.floor(Math.random() * quotes.length);
    $("#quote").text(quotes[quoteIndex].quote);
    quoteChar = quotes[quoteIndex].name;
}

function checkAnswer(button){
    if(button.attr("id") == quoteChar){
        $("#displayAns").text("Correct!");
        $.getJSON("/api/quotes")
        .then(getQuote);
    } else {
        
        $("#displayAns").text("Wrong!");
    }
}