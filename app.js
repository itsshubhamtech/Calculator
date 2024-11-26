let output = document.getElementById('output');
let string = " ";
let buttons = document.querySelectorAll('button');
let operators = ['+', '-', '*', '/'];


buttons.forEach((el) => {
    el.addEventListener("click", function (data) {
        try {
            if (data.target.innerHTML == '=') {
                string = eval(string);
                output.value = string;
            }
            else if (data.target.innerHTML == "C") {
                string = " "
                output.value = " ";0
            }
            else if (operators.includes(data.target.innerHTML)) {
                if (operators.includes(string.slice(-1))) {
                    return; // Do nothing
                } else {
                    string = string + data.target.innerHTML;
                    output.value = string;
                }
            } 
            else {
                string = string + data.target.innerHTML;
                output.value = string;
            }
        }
        catch {
            alert("plz enter correct syntax");
        }
    })
})