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


// Function to use TacoCat as a Palindrome

function palindrome(tacoCatString) {
    var tacoCatString = document.getElementById("word").value;

    // remove special characters, spaces and make lowercase
    var changeChar = tacoCatString.replace(/[^A-Z0-9]/ig, "").toLowerCase();

    // reverse removeChar for comparison
    var checkPalindrome = changeChar.split("").reverse().join('');

    // Check to see if tacoCatString is a Palindrome
    if (changeChar === checkPalindrome) {

        document.getElementById("tacoOuput").innerHTML = tacoCatString + " is a Palindrome!";
    }
    else {
        document.getElementById("tacoOuput").innerHTML = tacoCatString + " is not a Palindrome!";
    }
                                                                                                                    
}

// Clear and close button: can be used in all js files, just remember to change "click" selector and "output" selector
$("#closeTacoModal").on("click", function () {
    $(".clearMe").val("");
    $("#tacoOuput").html("");
});

// Clear and close button: can be used in all js files, just remember to change "click" selector and "output" selector
$("#closeTacoBtn").on("click", function () {
    $(".clearMe").val("");
    $("#tacoOuput").html("");
});

// Clear and close button: can be used in all js files, just remember to change "click" selector and "output" selector
$("#clearTacoCode").on("click", function () {
    $(".clearMe").val("");
    $("#tacoOuput").html("");
});


// Function to show/hide code
$("#tacoCode").hide();
$("#showTacoCode").on("click", function () {
    $("#tacoCode").toggle();
    //if ($(this).text() == "Show Code") {
    //    $(this).text("Hide Code");
    //} else {
    //    $(this).text("Show Code");
    //}
    // example of ternary operator
    let btnText = String($(this).text());
    $(this).text(btnText.startsWith("Show") ? btnText.replace("Show", "Hide") : btnText.replace("Hide", "Show"));
});

// Older code to Clear data 
function ClearData() {
    document.getElementById("word").value = "";

    document.getElementById("demo").innerHTML = "";

}