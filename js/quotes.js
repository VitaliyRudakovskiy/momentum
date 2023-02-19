const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuoteButton = document.querySelector('.change-quote');
let randomQuote = Math.floor(Math.random() * 15);

async function getQuotes() {
    const quotes = 'quotes.json';
    const res = await fetch(quotes);
    const data = await res.json();

    quote.textContent = data[randomQuote].text;
    author.textContent = data[randomQuote].author;
}
getQuotes();

function updateQuotes() {
    if(randomQuote === 14) randomQuote = 0;
    else randomQuote++;
    getQuotes();
}

let angle = 180;
changeQuoteButton.addEventListener('click', () => {
    changeQuoteButton.style.transform = `rotate(${angle}deg)`;
    angle += 180;
    updateQuotes();
});