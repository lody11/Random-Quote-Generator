var array = [
    {
        name: 'Jim Rohn',
        paragraph: 'Beware of what you become in pursuit of what you want.'
    },
    {
        name: 'Epictetus',
        paragraph: 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {
        name: 'Frank Sinatra',
        paragraph: 'The best revenge is massive success.'
    },
    {
        name: 'Wayne Gretzy',
        paragraph: 'You miss 100% of the shots you don\'t take.'
    },
    {
        name: 'Nelson Mandela',
        paragraph: 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {
        name: 'Elbert Hubbard',
        paragraph: 'Do not take life too seriously. You will not get out alive.'
    },
];

function generateQuote() {
    var random = Number.parseInt(Math.random() * array.length + 1);
    document.querySelector('#paragraphOutput').textContent = `"${array[random].paragraph}"`
    document.querySelector('#nameOutput').textContent = `--${array[random].name}`
};
