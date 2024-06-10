let translateNumbers = (message) => {
    let partiallyDecodedMessage = "";

    for (let i = 0; i < message.length; i++) {
        let currentChar = message[i];

        if (currentChar == '3') {
            partiallyDecodedMessage += 'w';
        }

        else if (currentChar == '7') {
            partiallyDecodedMessage += 'l';
        }

        else {
            partiallyDecodedMessage += currentChar;
        }
    }

    return partiallyDecodedMessage;
}

let button = document.getElementById('decodeButton');

button.addEventListener("click", 
    (e) => {
        let secretMessage = document.getElementById('encodedInput').value;
        let final = translateNumbers(secretMessage);
        document.getElementById('decodedOutput').innerText = final;
    }
)