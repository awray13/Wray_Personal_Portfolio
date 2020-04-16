$(document).ready(function () {

    $("#fizzbuzz").submit(function (event) {
        var start = parseInt($("#start").val());
        var finish = parseInt($("#finish").val());

        // check that the input values are numbers
        if (!isNaN(start) && !isNaN(finish)) {
            // loop through numbers
            var i;
            for (i = 1; i <= 100; i++) {

                if (i % start === 0 && i % finish === 0) {
                    $("#output").append("<span class='fizzbuzz'>FizzBuzz</span>");
                } else if (i % start === 0) {
                    $("#output").append("<span class='fizz'>Fizz</span>");
                } else if (i % finish === 0) {
                    $("#output").append("<span class='buzz'>Buzz</span>");
                } else {
                    $("#output").append("<span>" + i + "</span>");
                }
            }
            $("#output span").fadeIn(400);
        } else {
            // if the inputs are not valid numbers
            $("#error").append("<p class='error'>Please enter a valid number in both boxes</p>");
        }
        // prevent form submission
        return false;
    });

    // empty the output & error divs
    $('input').on('focus', function () {
        $("#output span").fadeOut(400, function () {
            $("#output").empty();
        });
        $("#error").empty();
    });

}); // end ready

// Traditional Solve for Fizz Buzz using a loop and vanilla JavaScript
function FizzBuzzA(value1, value2) {
    let returnValue = "";
    // defining the loop
    for (let i = 1; i <= 100; i++) {
        // what's happing inside of the loop
        // use modulous operator to check if there is a remainder
        if (i % value1 == 0 && i % value2 == 0) {
            returnValue += "FizzBuzz ";
        }
        else if (i % value1 == 0) {
            returnValue += "Fizz ";
        }
        else if (i % value2 == 0) {
            returnValue += "Buzz ";
        }
        else {
            returnValue += i + ' ';
        }
    }
    return returnValue;
}

// Solving FizzBuzz with switch case
// This function is testing the boolean
// instead of the modulous 
function FizzBuzzB(value1, value2) {
    let returnValue = "";
    let Fizz = false;
    let Buzz = false;
    for (let i = 1; i <= 100; i++) {
        Fizz = i % value1 == 0;
        Buzz = i % value2 == 0;
        switch (true) {
            case Fizz && Buzz: {
                returnValue += "FizzBuzz | ";
                break;
            }
            case Fizz: {
                returnValue += "Fizz | ";
                break;
            } case Buzz: {
                returnValue += "Buzz | ";
                break;
            }
            default: {
                returnValue += i + " | ";
                break;
            }
        }
    }
    return returnValue;
}

// Third way to solve FizzBuzz
// Shortest way to solve the not traditional approach
// Using a ternary function to solve
function FizzBuzzC(value1, value2) {
    let returnValue = "";
    for (let i = 1; i <= 100; i++) {
        returnValue += ((i % value1 == 0 ? "<b style='color: #18d26e;'>Fizz</b>" : "") + (i % value2 == 0 ? "<b style='color: #18d26e;'>Buzz</b>" : "") || i) + " ";
    }
    return returnValue;
}



// FizzBuzz the Meta Strategy
// Solving FizzBuzz using an Array
// Should be very impressive to a hiring manager
function FizzBuzzD(value1, value2) {
    let returnArray = [];
    for (let i = 1; i <= 100; i++) {
        returnArray[i] = ((i % value1 == 0 ? "<b style='color: #18d26e;'>Fizz</b>" : "") + (i % value2 == 0 ? "<b style='color: #18d26e;'>Buzz</b>" : "") || i);
    }
    return returnArray;
}

// Function to call and use our FizzBuzz function
function buzzIt() {
    let output = "";
    let val1 = document.getElementById("Fizzvalue").value;
    let val2 = document.getElementById("Buzzvalue").value;
    output = FizzBuzzC(val1, val2);
    document.getElementById("results").innerHTML = output;
}

// Call and use our template
function buzzItTemplate() {
    let output = [];
    let headTemplate = document.getElementById("template-header");
    let rowTemplate = document.getElementById("template-row-items");

    let templateHTML = rowTemplate.innerHTML;
    let resultsHTML = headTemplate.innerHTML;

    // Get the value the user entered
    let val1 = document.getElementById("Fizzvalue").value;
    let val2 = document.getElementById("Buzzvalue").value;

    // Call out fizzbuzz function
    output = FizzBuzzD(val1, val2);
    for (i = 1; i < output.length; i += 5) {
        resultsHTML += templateHTML.replace("{{val1}}", output[i])
            .replace("{{val2}}", output[i + 1])
            .replace("{{val3}}", output[i + 2])
            .replace("{{val4}}", output[i + 3])
            .replace("{{val5}}", output[i + 4]);
    }
    document.getElementById("results").innerHTML = resultsHTML;
}

// Function to clear all elements from modal
//function ClearFizzBuzzData() {
//    document.getElementById("Fizzvalue").value = "";
//    document.getElementById("Buzzvalue").value = "";

//    document.getElementById("results").innerHTML = "";

//}

// Clear and close button: can be used in all js files, just remember to change "click" selector and "output" selector
$("#btnHillsClose").on("click", function () {
    $(".clearMe").val("");
    $("#outputHills").html("");
});

// Function to show/hide code
$("#hillsCode").hide();
$("#showHillsCode").on("click", function () {
    $("#hillsCode").toggle();
    //if ($(this).text() == "Show Code") {
    //    $(this).text("Hide Code");
    //} else {
    //    $(this).text("Show Code");
    //}
    // example of ternary operator
    let btnText = String($(this).text());
    $(this).text(btnText.startsWith("Show") ? btnText.replace("Show", "Hide") : btnText.replace("Hide", "Show"));
});