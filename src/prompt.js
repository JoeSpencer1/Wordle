function submitText() {
    var inputElement = document.getElementById("textInput");
    console.log(inputElement)
    var enteredText = inputElement.value;
    
    // Send the word to the server for processing
    fetch("/check-word", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ word: word })
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
    // Process the response from the server
        if (data.isValid) {
            document.getElementById("result").textContent = "Valid word!";
        } 
        else {
            document.getElementById("result").textContent = "Invalid word!";
        }
    })
    .catch(function(error) {
        console.error("Error:", error);
    });

    // Process the entered text as needed
    document.getElementById("result").textContent = "Your last entry was: " + enteredText;
    document.getElementById("next").textContent = "The next-best word is: " + enteredText;
    // Clear the input field
    inputElement.value = "";
}

var button = document.getElementById("refresh");
    button.addEventListener("click", function() {
    // Perform actions when the button is clicked
    fetch("/refreshwords", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ scriptName: "Refresh.py"})
    })
    .catch(function(error) {
        console.error("Error:", error);
    })
    console.log("Button clicked!");
});

// Log to console
console.log(result)
