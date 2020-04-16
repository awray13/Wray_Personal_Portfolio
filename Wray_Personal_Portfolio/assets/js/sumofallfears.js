        // given K = 8
        // given 5 integers: 4 6 4 9
    $("#btnSOAF").on("click", function () {
        let k = Number($("#inputK").val());

            let myArray = new Array();
            myArray.push(Number($("#soafInput1").val()));
            myArray.push(Number($("#soafInput2").val()));
            myArray.push(Number($("#soafInput3").val()));
            myArray.push(Number($("#soafInput4").val()));
            myArray.push(Number($("#soafInput5").val()));

            // k = 14
            // 15 6 8 9 4
            let target = 0;
            let found = false;

            // loop over each item in the array 1 at a time
            for (var index = 0; index <= myArray.length; index++) {
        // determine what number you need to slave for the given K...
        // find k - myArray[index]
        target = target - myArray[index];
                // myArray[0] = 15 : 15 > K continue on
                // find 14 -  3 or 11 in the remaining array members
                // myArray
                // arr.indexOf(searchElement[, fromIndex])
                if (myArray.indexOf(target, index + 1) > 0) {
        found = true;
                    break;
                }

            }
            if (found) {
        $("#output").html(`A K of ${k} was found in the array `);
            }
            else {
        $("#output").html(`A K value of ${k} was not found in the array`);
            }
    });

// Clear data with clear button 
//$("#btnClear").on("click", function () {
//    $("#inputK").val("");
//    $("#soafInput1").val("");
//    $("#soafInput2").val("");
//    $("#soafInput3").val("");
//    $("#soafInput4").val("");
//    $("#soafInput5").val("");
//    $("#btnSOAF").html("");

//});

//// Clear data with modal  x button 
//$("#modalClear").on("click", function () {
//    $("#inputK").val("");
//    $("#soafInput1").val("");
//    $("#soafInput2").val("");
//    $("#soafInput3").val("");
//    $("#soafInput4").val("");
//    $("#soafInput5").val("");
//    $("#btnSOAF").html("");

//});

// Clear and close button: can be used in all js files, just remember to change "click" selector and "output" selector
$("#closeFearsBtn").on("click", function () {
    $(".clearMe").val("");
    $("#soafOutput").html("");
});

$("#closeFearsModal").on("click", function () {
    $(".clearMe").val("");
    $("#soafOutput").html("");
});

$("#clearFearsCode").on("click", function () {
    $(".clearMe").val("");
    $("#soafOutput").html("");
});

// Function to show/hide code
$("#fearsCode").hide();
$("#showFearsCode").on("click", function () {
    $("#fearsCode").toggle();
    //if ($(this).text() == "Show Code") {
    //    $(this).text("Hide Code");
    //} else {
    //    $(this).text("Show Code");
    //}
    // example of ternary operator
    let btnText = String($(this).text());
    $(this).text(btnText.startsWith("Show") ? btnText.replace("Show", "Hide") : btnText.replace("Hide", "Show"));
});