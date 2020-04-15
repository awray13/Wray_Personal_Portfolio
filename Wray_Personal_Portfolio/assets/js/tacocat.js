﻿// initial tacocat function just to reverse user input
// wire funtion to button and output area
function displayWord() {
    // retrieve and stores user input in variable named txt
    var txt = document.getElementById("word").value;
    // turn txt variable into a string and store string in an array 
    var taco = Array.from(txt);
    // reverse user input
    taco.reverse();
    // display reversed user input in output area
    
    document.getElementById("demo").innerHTML = "<h5 style='color: #fff; background-color: #18d26e;'>TacoCat Results:</h5>" + taco.join("");
}

// Clear data 
function ClearData() {
    document.getElementById("word").value = "";

    document.getElementById("demo").innerHTML = "";

}

// Function to use TacoCat as a Palindrome

function palindrome(tacoCatString) {
    var tacoCatString = document.getElementById("word").value;

    // remove special characters, spaces and make lowercase
    var changeChar = tacoCatString.replace(/[^A-Z0-9]/ig, "").toLowerCase();

    // reverse removeChar for comparison
    var checkPalindrome = changeChar.split("").reverse().join('');

    // Check to see if tacoCatString is a Palindrome
    if (changeChar === checkPalindrome) {

        document.getElementById("demo").innerHTML = tacoCatString + " is a Palindrome!";
    }
    else {
        document.getElementById("demo").innerHTML = tacoCatString + " is not a Palindrome!";
    }
                                                                                                                    
}