async function getQuote() {
    try {
        let res = await fetch('https://kimiquotes.herokuapp.com/quote');
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderQuote() {
    let quote = await getQuote();
    let year = 0;
    if (quote.year === undefined) {
        year = 'Sometime';
    } else {
        year = quote.year;
    }
    let html = quote.quote + '  (' + year + '). Kimi Räikkönen.';
    
    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderQuote();

//TODO: impelement onload function to automatically load phrase
/*window.onload = generateRandomQuote() {
    yourFunction(param1, param2);
  };*/