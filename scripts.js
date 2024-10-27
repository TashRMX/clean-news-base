document.addEventListener('DOMContentLoaded', function() {
    console.log('Script Loaded'); // Check if script is running

    const newsSources = [
        { name: 'CoinDesk', url: 'https://www.coindesk.com', font: 'Open Sans' },
        { name: 'CoinTelegraph', url: 'https://www.cointelegraph.com', font: 'Roboto' },
        { name: 'CryptoSlate', url: 'https://www.cryptoslate.com', font: 'Lato' },
        { name: 'CryptoNews', url: 'https://www.cryptonews.com', font: 'Montserrat' },
        { name: 'The Block', url: 'https://www.theblockcrypto.com', font: 'Open Sans' },
        { name: 'Decrypt', url: 'https://www.decrypt.co', font: 'Roboto' },
        { name: 'NewsBTC', url: 'https://www.newsbtc.com', font: 'Lato' },
        { name: 'Cardano Feed', url: 'https://www.cardanofeed.com', font: 'Montserrat' },
        { name: 'ADAPulse', url: 'https://adapulse.io', font: 'Open Sans' },
        { name: 'Glassnode Insights', url: 'https://insights.glassnode.com', font: 'Roboto' }
    ];

    const newsListElement = document.getElementById('news-list');

    if (newsListElement) {
        newsSources.forEach(source => {
            const sourceElement = document.createElement('div');
            sourceElement.className = 'news-source';
            sourceElement.style.fontFamily = `${source.font}, sans-serif`;
            sourceElement.innerHTML = `<a href="${source.url}" target="_blank">${source.name}</a>`;
            newsListElement.appendChild(sourceElement);
        });
    } else {
        console.error('Element with ID "news-list" not found');
    }
});
