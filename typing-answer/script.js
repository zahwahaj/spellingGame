var imported = document.createElement('script')
imported.src = 'words.js'
document.head.appendChild(imported)

var foo = new p5.Speech();

function randomWord() {
    console.log("go")
    var lenWordsArr = words.length - 1;
    var randW = Math.floor(Math.random() * lenWordsArr) + 1
    console.log(words[randW])
    foo.speak(words[randW])
    return words[randW]
}

// have the string get one of the random words from the program
var string = randomWord()

// split the string into its multiple characters
var wordToSpell = string.split("")

// begin with the first letter in the chosen word to spell
var letter = 0

function submitLetter() {
    // have the computer read the letter that the user typed in
    var chosenLetter = document.getElementById("input").value
    if (chosenLetter == string[letter]) {
        // when the user types the correct letter
        // the letter will disappear and the user is free to sumbit a new letter
        document.getElementById("input").value = "";

        // have the computer display the letter that the user typed in
        var header = document.getElementById("word")
        var text = document.createTextNode(chosenLetter);
        header.style.fontSize = "40px";
        header.appendChild(text);

        // check to see if this is the end of the word and print a congrats message if you're done
        if (letter == string.length - 1) {
            var header2 = document.createElement("H2")
            var congratsMessage = document.createTextNode("Congratulations! You're a great speller!");
            header2.style.fontSize = "40px";
            header2.appendChild(congratsMessage);
            document.body.appendChild(header2);

            // stop the user from typing more
            document.getElementById('input').disabled = true;
        }
    }

    else {
        // the user typed the wrong letter
        document.getElementById("input").value = "";

        // the correctly spelled "real" world will appear on the screen
        var header2 = document.createElement("H2")
        var realWord = document.createTextNode("You were incorrect, the correct spelling is: " + string);
        header2.style.fontSize = "40px";
        header2.appendChild(realWord);
        document.body.appendChild(header2);

        // stop the user from typing more
        document.getElementById('input').disabled = true;


    }

    // cycle to the next character in the spelling word
    letter++
}
