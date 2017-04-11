
//HELPER FUNCTIONS   
//For test cases of each function check functions.js
"use strict";

//A. Function that uses an if statement to check if a character is a vowel or not.
var isVowel1 = function(ch){

    ch = ch.toLowerCase();
    if ((ch == "a") || (ch == "e") || (ch == "o") || (ch == "i") || (ch == "y") || (ch == "u"))
        return true;
    else
        return false;

};

//B. Function that uses RegExp to check is a character is a vowel or not.
const VOWELS = /[aeiouy]/i;

var isVowel2 = function(ch){

    return VOWELS.test(ch);

};

//C. Function that uses a loop to reverse the user given string.
var strReverse1 = function(string){

    var results = "";

    for (var i = string.length - 1; i >= 0; i--){

        results += string[i]
    }

    return results;
};

//D. Function that uses an array to reverse the user given string.
var strReverse2 = function(string){
    var strArr = string.split('');

    strArr.reverse();

    JSON.stringify(strArr);

    return strArr.join("");

};

//E. Function that accepts sentence and pulls the longest word
var getMaxWord = function(word){

    var senSplit = word.split(' ');

    var maxSoFar = senSplit[0];


    for (var i = 0; i < senSplit.length; ++i)
        if(senSplit[i].length > maxSoFar.length)
            maxSoFar = senSplit[i];

        return maxSoFar;

};

//F. Function that accepts a sentence and filters out words greater than the value of n.
var filterWords = function(word, n){
    
    var senSplit = word.split(' ');

    var results = "";

    for (var i = 0; i < senSplit.length; ++i)
        if(senSplit[i].length > n)
            results += senSplit[i] + " ";

        return results;

};

//--------------------------------------------------------------------------------------------------------
//------------------------------------MAIN FUNCTION!------------------------------------------------------
//--------------------------------------------------------------------------------------------------------

//1. define the onclick handler
var main = function() {
    var str, len; //user inputs



    //dispatch on button id
    if (this.id == "btn1"){
        //get user input
        str = $("#inBox1").val();
        console.log(str)
        $("#outDiv").text(isVowel1(str));
    }

    if (this.id == "btn2"){
        //get user input
        str = $("#inBox1").val();
        console.log(str)
        $("#outDiv").text(isVowel2(str));
    }

    if (this.id == "btn3"){
        //get user input
        str = $("#inBox1").val();
        console.log(str)
        $("#outDiv").text(strReverse1(str));
    }

     if (this.id == "btn4"){
        //get user input
        str = $("#inBox1").val();
        console.log(str)
        $("#outDiv").text(strReverse2(str));
    }   

    if (this.id == "btn5"){
        //get user input
        str = $("#inBox1").val();
        console.log(str)
        $("#outDiv").text(getMaxWord(str));
    } 

     if (this.id == "btn6"){
        //get user input
        str = $("#inBox1").val();
        len = $("#inBox2").val();
        console.log(len);
        console.log(str);
        $("#outDiv").text(filterWords(str,len));
    } 


};

//2. register the onclick 
$(document).ready(function() {
    //register the handler for all of the buttons
    $("button").on("click", main);
});