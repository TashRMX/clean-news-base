document.addEventListener('DOMContentLoaded', function () {
    const newsSources = [
        { name: 'CoinDesk', url: 'https://www.coindesk.com' },
        { name: 'CoinTelegraph', url: 'https://www.cointelegraph.com' },
        { name: 'CryptoSlate', url: 'https://www.cryptoslate.com' },
        { name: 'CryptoNews', url: 'https://www.cryptonews.com' },
        { name: 'The Block', url: 'https://www.theblockcrypto.com' },
        { name: 'Decrypt', url: 'https://www.decrypt.co' },
        { name: 'NewsBTC', url: 'https://www.newsbtc.com' },
        { name: 'Cardano Feed', url: 'https://www.cardanofeed.com' },
        { name: 'ADApulse', url: 'https://adapulse.io' },
        { name: 'Glassnode Insights', url: 'https://insights.glassnode.com' }
    ];

    const newsRow = document.getElementById('news-row');

    newsSources.forEach(source => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        
        // For demonstration purposes, we just display the source name.
        // In a real-world scenario, you'd fetch the latest news from each source's RSS feed or API.
        newsItem.innerHTML = `
            <h3>${source.name}</h3>
            <p>Latest story from ${source.name} will be displayed here.</p>
            <a href="${source.url}" target="_blank">Visit ${source.name}</a>
        `;
        
        newsRow.appendChild(newsItem);
    });

    // Fetch and display live stock values in the ticker
    const tickerInner = document.getElementById('ticker-inner');

    const fetchStockValues = async () => {
        try {
            const response = await fetch('https://api.example.com/stock-values'); // Replace with actual API URL
            const data = await response.json();
            data.forEach(stock => {
                const stockItem = document.createElement('span');
                stockItem.textContent = `${stock.name}: ${stock.value} `;
                tickerInner.appendChild(stockItem);
            });
        } catch (error) {
            console.error('Error fetching stock values:', error);
        }
    };

    fetchStockValues();
});
