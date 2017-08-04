var imported = document.createElement('script')
imported.src = 'words.js'
document.head.appendChild(imported)

words.sort(function(a, b) { return a.length - b.length });

var myRec = new p5.SpeechRec();
myRec.continuous = true;
//myRec.interimResults = true

var foo = new p5.Speech();
foo.setRate(.8)
var randW;
var word = words[randW];
var ticker = 0;

// function score(){
    
// }

function randomWord() {
    console.log("go")
    // var lenWordsArr = words.length - 1;
    randW = Math.floor((Math.random() * 110100) + 133)
    console.log(words[randW])
    foo.speak(words[randW])
    foo.onStart = hit()
   // word = words[randW]
    myRec.onResult = checkLetterSpeech;
    myRec.start()
    return words[randW]
}

function newRandWord()
{
    randW = Math.floor((Math.random() * 110100) + 133)
    console.log(words[randW])
    foo.speak(words[randW])
    //word = words[randW]
    myRec.onResult = checkLetterSpeech()
    return words[randW]
}

function hit() {
    foo.setRate(.5)
    console.log("started")
}

function repeat() {
    foo.setRate(.4)
    foo.speak(word)
}
// have the string get one of the random words from the program
var string = randomWord().toLowerCase()

// split the string into its multiple characters
var wordToSpell = string.split("")

// begin with the first letter in the chosen word to spell
var letter = 0

var scorenow = 0

function submitLetter() {
    // have the computer read the letter that the user typed in
    var chosenLetter = document.getElementById("input").value
    console.log(chosenLetter)

    // a place to put everything will appear
    var trial = document.createElement("div")
    trial.setAttribute("id", "trial")
    document.body.appendChild(trial)

    if (chosenLetter == string[letter]) {
        // when the user types the correct letter
        // the letter will disappear and the user is free to sumbit a new letter
        document.getElementById("input").value = "";

        // have the computer display the letter that the user typed in
        var trial = document.getElementById('trial')
        var header = document.getElementById("word")
        var text = document.createTextNode(chosenLetter);
        header.style.fontSize = "60px";
        header.style.fontFamily = 'Abril Fatface', 'cursive';
        header.style.textAlign = "center"
        header.style.marginTop = "50px"
        header.appendChild(text);
        trial.appendChild(header);


        // check to see if this is the end of the word & you have finished spelling it correctly
        if (letter == string.length - 1) {
            // stop the user from typing more
            document.getElementById('input').disabled = true;

            var trial = document.getElementById('trial')

            // prints a congrats message on the screen
            var header2 = document.createElement("H2")
            var congratsMessage = document.createTextNode("Congratulations! You're a great speller!");
            header2.style.textAlign = "center"
            header2.style.fontFamily = 'Abril Fatface', 'cursive';
            header2.style.fontSize = "60px";
            header2.appendChild(congratsMessage);
            trial.appendChild(header2);

            //pop up a gif if you get the word correct!
            var congratsgif = document.createElement("img")
            congratsgif.setAttribute("src", "https://m.popkey.co/7aa178/kv4ol.gif");
            congratsgif.style.width = "600px"
            congratsgif.style.height = "450px"
            congratsgif.style.marginLeft = "43%"
            trial.appendChild(congratsgif);
            
            // //count this as an increased score
            // var myscore = document.getElementById("actualscore")
            // var currentscore = document.createTextNote(scorenow)
            // currentscore.appendChild(myscore)
            // scorenow++
            // console.log(scorenow)

            // get a next word button to appear
            var nextword = document.createElement("button")
            nextword.innerHTML = "Next Word"
            nextword.className = 'button'
            nextword.style.marginLeft = "45%"
            nextword.setAttribute("onClick", "newTry()")
            trial.appendChild(nextword)
        }
    }

    else {
        // the user typed the wrong letter
        document.getElementById("input").value = "";

        // stop the user from typing more
        document.getElementById('input').disabled = true;
        

        // a place to put everything will appear
        var trial = document.getElementById('trial')

        // the correctly spelled "real" world will appear on the screen
        var header3 = document.createElement("H3")
        var realWord = document.createTextNode("You were incorrect, the correct spelling is: " + string);
        header3.style.textAlign = "center"
        header3.style.fontFamily = 'Abril Fatface', 'cursive';
        header3.style.fontSize = "60px";
        header3.appendChild(realWord);
        trial.appendChild(header3);

        // a sad gif will appear on the screen
        var sadnessgif = document.createElement("img")
        sadnessgif.setAttribute("src", "https://media.giphy.com/media/10tIjpzIu8fe0/giphy.gif");
        sadnessgif.className = ""
        sadnessgif.style.width = "600px"
        sadnessgif.style.height = "450px"
        sadnessgif.style.marginLeft = "43%"
        trial.appendChild(sadnessgif)

        // get a next word button to appear
        var nextword = document.createElement("button")
        nextword.innerHTML = "Next Word"
        nextword.className = 'button'
        nextword.style.marginLeft = "45%"
        nextword.setAttribute("onClick", "newTry()")
        trial.appendChild(nextword)
    }

    // cycle to the next character in the spelling word
    letter++
}

function newTry() {
    console.log("we're done")
    var trial = document.getElementById('trial')
    trial.parentNode.removeChild(trial);
    string = newRandWord()//newRandWord
    console.log(string + " your new string")
    document.getElementById('input').disabled = false;
    letter = 0
}


// function showResult() {
//     if (myRec.resultValue == true) {
//         //background(192, 255, 192);
//         //text(myRec.resultString, width/2, height/2);
//         console.log(myRec.resultString);
//     }
// }


function checkLetterSpeech() {
    console.log("this is what you said " + myRec.resultString)
    console.log("this is the index of the letter " + string[ticker])
     //added + 1
    if (myRec.resultString == "hey") {
        myRec.resultString = "a"
    }
    if (myRec.resultString == "bee") {
        myRec.resultString = "b"
    }
    if (myRec.resultString == "be") {
        myRec.resultString = "b"
    }
    if (myRec.resultString == "see") {
        myRec.resultString = "c"
    }
    if (myRec.resultString == "sea") {
        myRec.resultString = "c"
    }
    if (myRec.resultString == "earth") {
        myRec.resultString = "f"
    }
    if (myRec.resultString == "eye") {
        myRec.resultString = "i"
    }
    if (myRec.resultString == "jay") {
        myRec.resultString = "j"
    }
    if (myRec.resultString == "kay") {
        myRec.resultString = "k"
    }
    if (myRec.resultString == "el") {
        myRec.resultString = "l"
    }
    if (myRec.resultString == "hello") {
        myRec.resultString = "l"
    }
    if (myRec.resultString == "oh") {
        myRec.resultString = "o"
    }
    if (myRec.resultString == "pee") {
        myRec.resultString = "p"
    }
    if (myRec.resultString == "queue") {
        myRec.resultString = "q"
    }
    if (myRec.resultString == "are") {
        myRec.resultString = "r"
    }
    if (myRec.resultString == "tea") {
        myRec.resultString = "t"
    }
    if (myRec.resultString == "tee") {
        myRec.resultString = "t"
    }
    if (myRec.resultString == "you") {
        myRec.resultString = "u"
    }
    if (myRec.resultString == "double you") { myRec.resultString = "w" }
    if (myRec.resultString == "why") { myRec.resultString = "y" }


    if (myRec.resultString == string[ticker]) {//.toLowerCase()
        ticker++
        //myRec.onResult = myRec.start()
        console.log(ticker)
        console.log("listening again")
    }

    else {
        console.log("u suck")
    }

    //words[randW].charAt(i)
    //         console.log(myRec.resultString)
    //         console.log("true")
    //         myRec.start()
    //         ticker++
    //     else {
    //         console.log("i am annoyed")
    //     }

    // }
    if(ticker == string.length)
    {
         // stop the user from typing more
            document.getElementById('input').disabled = true;

            var trial = document.createElement("div")
            trial.setAttribute("id", "trial")
            document.body.appendChild(trial)

            // prints a congrats message on the screen
            var header2 = document.createElement("H2")
            var congratsMessage = document.createTextNode("Congratulations! You're a great speller!");
            header2.style.textAlign = "center"
            header2.style.fontFamily = 'Abril Fatface', 'cursive';
            header2.style.fontSize = "60px";
            header2.appendChild(congratsMessage);
            trial.appendChild(header2);

            //pop up a gif if you get the word correct!
            var congratsgif = document.createElement("img")
            congratsgif.setAttribute("src", "https://m.popkey.co/7aa178/kv4ol.gif");
            congratsgif.style.width = "600px"
            congratsgif.style.height = "450px"
            congratsgif.style.marginLeft = "43%"
            trial.appendChild(congratsgif);
            
            // //count this as an increased score
            // var myscore = document.getElementById("actualscore")
            // var currentscore = document.createTextNote(scorenow)
            // currentscore.appendChild(myscore)
            // scorenow++
            // console.log(scorenow)

            // get a next word button to appear
            var nextword = document.createElement("button")
            nextword.innerHTML = "Next Word"
            nextword.className = 'button'
            nextword.style.marginLeft = "45%"
            nextword.setAttribute("onClick", "newTry()")
            trial.appendChild(nextword)
            //myRec.continuous = false;
    }
}
