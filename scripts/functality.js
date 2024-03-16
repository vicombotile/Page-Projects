const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
        if (display.value == "NaN") {
            display.value = "Invalid Number"
        }
    }
    catch(error) {
        display.value = "Error (clear)"
    }
}