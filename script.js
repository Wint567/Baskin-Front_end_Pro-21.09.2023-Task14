const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
    let newString = '';

    while(newString.length < length) {
        newString += characters[Math.floor(Math.random() * characters.length)];
    }

    return newString;
}

const key = generateKey(16, characters);
console.log("Result:", key);

