function getValues(){
    let messageInput = document.getElementById("message").value;
    let alertMessage = document.getElementById("alertMessage");
    let rewound = rewind(messageInput)
    let outputMessage = displayResults(messageInput, rewound, palindromeChecker(messageInput, rewound));
    alertMessage.innerHTML = outputMessage;

}
function rewind(string) {
    let rewound = "";
    for (let i = string.length - 1; i >= 0; i--) {
        rewound += string[i];
    }
    return rewound;
}
function palindromeChecker(input, rewound) {
    let cleaner = /[^a-z0-9]/gi;
    let inputClean = input.replace(cleaner, "").toLowerCase();
    let rewoundClean = rewound.replace(cleaner, "").toLowerCase();
    return (inputClean == rewoundClean);
}

function displayResults(input, output, palindrome) {
    document.getElementById("alertMessage").style.opacity = 1;
    let result = palindrome ? "Which is in fact a palindrome, congratulations!" : "Which I'm sorry to say isn't a palindrome"
    let message = `<div>Your message, <i>${input}</i> reversed is <i>${output}</i><br>${result}</div>`
    if (palindrome) {
        document.getElementById("alertMessage").classList.add("alert-success")
        document.getElementById("alertMessage").classList.remove("alert-danger")
    } else {
        document.getElementById("alertMessage").classList.add("alert-danger")
        document.getElementById("alertMessage").classList.remove("alert-success")
    }
    return message;
}