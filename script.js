var imported = document.createElement('script')
imported.src = 'words.js'
document.head.appendChild(imported)

function randomWord()
{
    var lenWordsArr = words.length-1;
    var randW = Math.floor(Math.random() * lenWordsArr) + 1
    console.log(words[randW])
    return words[randW]
}


