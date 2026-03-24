document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        {
            quote: "The only limit to our realization of tomorrow is our doubts of today.",
            author: "Franklin D. Roosevelt"
        },
        {
            quote: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt"
        },
        {
            quote: "Do not wait to strike till the iron is hot; but make it hot by striking.",
            author: "William Butler Yeats"
        },
        {
            quote: "Life is what happens when you’re busy making other plans.",
            author: "John Lennon"
        },
        {
            quote: "The best way to predict the future is to create it.",
            author: "Peter Drucker"
        },
        {
            quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
            author: "Mother Teresa"
        },
        {
            quote: "The mind is everything. What you think you become.",
            author: "Buddha"
        },
        {
            quote: "Strive not to be a success, but rather to be of value.",
            author: "Albert Einstein"
        },
        {
            quote: "The question isn't who is going to let me; it's who is going to stop me.",
            author: "Ayn Rand"
        },
        {
            quote: "Your time is limited, don't waste it living someone else's life.",
            author: "Steve Jobs"
        }
    ];

    const quoteButton = document.getElementById('quoteButton');
    const quoteDisplay = document.getElementById('quoteDisplay');
    const quoteAuthor = document.getElementById('quoteAuthor');

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    function displayNewQuote() {
        const selectedQuote = getRandomQuote();
        quoteDisplay.textContent = `"${selectedQuote.quote}"`;
        quoteAuthor.textContent = `- ${selectedQuote.author}`;
    }

    quoteButton.addEventListener('click', displayNewQuote);

    displayNewQuote();
});
