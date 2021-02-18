var i = 0;
var randomIndex = Array();

window.onload = () => {
    initApp();
    keyDownAction();
}

// init app
function initApp() {
    const appRoute = document.getElementById('typing-app');

    // element create
    const container = create('div', 'container');
    const wordHead = create('div', 'word-head');
    const wordFurigana = create('div', 'word-furigana');
    const word = create('div', 'word-text')
    const enterdSpan = create('span', 'enterd');
    const notEnterdSpan = create('span', 'not-enterd');
    const hiddenText = create('span', 'hidden-text');

    // contains build
    appRoute.append(container);
    container.append(wordHead);
    container.append(wordFurigana);
    container.append(word);
    container.append(hiddenText);
    word.append(enterdSpan);
    word.append(notEnterdSpan);
    hiddenText.setAttribute('type', 'hidden');

    for (let i = 0; i < wordArray.length; i++) {
        randomIndex.push(i);
    }
    randomIndex = shuffle(randomIndex);

    setWord();
}

function keyDownAction() {
    const hiddenText = document.getElementById('hidden-text');

    const notEnterd = document.getElementById('not-enterd');
    const enterd = document.getElementById('enterd');
    document.addEventListener('keydown', (event) => {
        if (event.key.toUpperCase() === notEnterd.textContent.charAt(0)) {
            enterd.textContent += notEnterd.textContent.charAt(0);
            notEnterd.textContent = notEnterd.textContent.slice(1);

            if (enterd.textContent === hiddenText.textContent) {
                setWord();
            }
        }

    })
}

function create(tagName, idName) {
    const element = document.createElement(tagName);
    element.id = idName;
    return element;
}

function setWord() {
    const wordHead = document.getElementById('word-head');
    const wordFurigana = document.getElementById('word-furigana');
    const hiddenText = document.getElementById('hidden-text');
    const notEnterd = document.getElementById('not-enterd');
    const enterd = document.getElementById('enterd');

    if (i < 5) {
        wordHead.textContent = wordArray[randomIndex[i]].kanji;
        wordFurigana.textContent = wordArray[randomIndex[i]].furigana;
        notEnterd.textContent = wordArray[randomIndex[i]].inputWord;
        enterd.textContent = '';
        hiddenText.textContent = wordArray[randomIndex[i]].inputWord;
        i++;
    } else {
        wordHead.textContent = '';
        wordFurigana.textContent = '';
        notEnterd.textContent = '';
        enterd.textContent = '';
        hiddenText.textContent = '';
        setTimeout(() => { alert('終了!!') }, 10);
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]]
    }
    return array;
}