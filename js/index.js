const WORDS = {
    kanji: '東京特許許可局',
    furigana: 'とうきょうとっきょきょかきょく',
    inputWord: 'TOUKYOUTOKKYOKYOKAKYOKU',
}


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

    // contains build
    appRoute.append(container);
    container.append(wordHead);
    container.append(wordFurigana);
    container.append(word);
    word.append(enterdSpan);
    word.append(notEnterdSpan);

    wordHead.textContent = WORDS.kanji;
    wordFurigana.textContent = WORDS.furigana;
    notEnterdSpan.textContent = WORDS.inputWord;
}

function keyDownAction() {
    const notEnterd = document.getElementById('not-enterd');
    const enterd = document.getElementById('enterd');
    document.addEventListener('keydown', (event) => {
        if (event.key.toUpperCase() === notEnterd.textContent.charAt(0)) {
            enterd.textContent += notEnterd.textContent.charAt(0);
            notEnterd.textContent = notEnterd.textContent.slice(1);
        }
    })
}

function create(tagName, idName) {
    const element = document.createElement(tagName);
    element.id = idName;
    return element;
}