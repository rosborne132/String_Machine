"use strict";

//A. Function that uses an if statement to check if a character is a vowel or not.
var isVowel1 = function(ch){

	ch = ch.toLowerCase();
	if ((ch == "a") || (ch == "e") || (ch == "o") || (ch == "i") || (ch == "y") || (ch == "u"))
		return true;
	else
		return false;

};

/* TEST CASES
console.log(isVowel1("e")); => true
console.log(isVowel1("I")); => true
console.log(isVowel1("x")); c
*/



//B. Function that uses RegExp to check is a character is a vowel or not.
const VOWELS = /[aeiouy]/i;

var isVowel2 = function(ch){

	return VOWELS.test(ch);

};

/* TEST CASES
console.log(isVowel2("e")); => true
console.log(isVowel2("I")); => true
console.log(isVowel2("x")); => false
*/




//C. Function that uses a loop to reverse the user given string.
var strReverse1 = function(string){

	var results = "";

	for (var i = string.length - 1; i >= 0; i--){

		results += string[i]
	}

	return results;
};

/* TEST CASES
console.log(strReverse1("abcde")); => edcba
console.log(strReverse1("ABCDE")); => EDCBA
*/



//D. Function that uses an array to reverse the user given string.
var strReverse2 = function(string){
	var strArr = string.split('');

	strArr.reverse();

	JSON.stringify(strArr);

	return strArr.join("");

};

/* TEST CASES
console.log(strReverse2("abcde")); => edcba
console.log(strReverse2("ABCDE")); => EDCBA
*/




//E. Function that accepts sentence and pulls the longest word
var getMaxWord = function(word){

	var senSplit = word.split(' ');

	var maxSoFar = senSplit[0];


	for (var i = 0; i < senSplit.length; ++i)
		if(senSplit[i].length > maxSoFar.length)
			maxSoFar = senSplit[i];

		return maxSoFar;

};

/* TEST CASES
console.log(getMaxWord("The ball was over there")); => there
console.log(getMaxWord("The quick brown fox jumped over the lazy dog")); => junmped
*/



//F. Function that accepts a sentence and filters out words greater than the value of n.
var filterWords = function(word, n){
	
	var senSplit = word.split(' ');

	var results = "";

	for (var i = 0; i < senSplit.length; ++i)
		if(senSplit[i].length > n)
			results += senSplit[i] + " ";

		return results;

};

/* TEST CASES
console.log(filterWords("The ball was over there", 3)); => ball over there 
console.log(filterWords("The albatross just ate your lunch", 4)); => albatross lunch 
*/











