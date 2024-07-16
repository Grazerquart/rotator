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
    let cleaner = /[\s\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g;
    let inputClean = input.replace(cleaner, "").toLowerCase();
    let rewoundClean = rewound.replace(cleaner, "").toLowerCase();
    let palindrome = (inputClean == rewoundClean);
    return palindrome;
}

function displayResults(input, output, palindrome) {
    document.getElementById("alertMessage").style.opacity = 1;
    let result = palindrome ? "Which is in fact a palindrome, congratulations!" : "Which I'm sorry to say isn't a palindrome"
    let message = `<div>Your message, <i>${input}</i> reversed is <i>${output}</i><br>${result}</div>`
    return message;
}