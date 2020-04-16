// alert/error message function
function SunsetHills(buildings) {

    var errorMsg = "";
    for (var index = 0; index < buildings.length; index++) {
        if (isNaN(buildings[index])) {
            var value = $(`#hillsInput${index + 1}`).val();
            $(`#hillsInput${index + 1}`).val("");
            errorMsg += `Your input in position ${index + 1}: ${value} is bad and needs to be fixed.\n\r `;
        }
    }
    if (errorMsg !== "") {
        alert(errorMsg);
        // blank out the bad data for the user if I wanted...

        return;
    } 
}

// function for Sunset Hills
    $("#btnHills").on("click", function () {
        // grab user input and push to an array called myArray
        let myArray = new Array();
            myArray.push(Number($("#sunsetInput1").val()));
            myArray.push(Number($("#sunsetInput2").val()));
            myArray.push(Number($("#sunsetInput3").val()));
            myArray.push(Number($("#sunsetInput4").val()));
            myArray.push(Number($("#sunsetInput5").val()));
            myArray.push(Number($("#sunsetInput6").val()));

            // do something with it
            var tallestBuildings = myArray[0];
            var Seesun = [tallestBuildings];
            var compare = myArray[0];

            for (var i = 1; i <= myArray.length; i++) {
                if (myArray[i] > tallestBuildings) {
        tallestBuildings = myArray[i];
                    Seesun.push(tallestBuildings);

                }
            }
            // output
            $("#outputHills").html(`The building that can see the sun are ${Seesun}`)
    });



// Clear data with clear button 
$("#closeHillsModal").on("click", function () {
    $("#sunsetInput1, #sunsetInput2, #sunsetInput3, #sunsetInput4, #sunsetInput5, #sunsetInput6").val("");
    $("#outputHills").html("");

});

// Clear data with modal  x button 
$("#clearHillsCode").on("click", function () {
    $("#sunsetInput1, #sunsetInput2, #sunsetInput3, #sunsetInput4, #sunsetInput5, #sunsetInput6").val("");
    $("#outputHills").html("");

});

// Clear data with close button 
$("#closeHillsBtn").on("click", function () {
    $("#sunsetInput1, #sunsetInput2, #sunsetInput3, #sunsetInput4, #sunsetInput5, #sunsetInput6").val("");
    $("#outputHills").html("");

});

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
