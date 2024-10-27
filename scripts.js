document.addEventListener('DOMContentLoaded', function() {
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

    // Function to fetch headlines from a news source
    async function fetchHeadlines(source) {
        try {
            const response = await fetch(source.url);
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            // This selector might need to be adjusted based on the specific website structure
            const headlines = doc.querySelectorAll('h2, h3');
            return Array.from(headlines).slice(0, 3).map(h => h.textContent);
        } catch (error) {
            console.error(`Error fetching headlines from ${source.name}:`, error);
            return [];
        }
    }

    // Function to create a news item element
    function createNewsItem(source, headlines) {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';

        const title = document.createElement('h3');
        title.textContent = source.name;
        newsItem.appendChild(title);

        const list = document.createElement('ul');
        headlines.forEach(headline => {
            const item = document.createElement('li');
            item.textContent = headline;
            list.appendChild(item);
        });
        newsItem.appendChild(list);

        return newsItem;
    }

    // Fetch and display headlines for each news source
    async function displayNews() {
        for (const source of newsSources) {
            const headlines = await fetchHeadlines(source);
            if (headlines.length > 0) {
                const newsItem = createNewsItem(source, headlines);
                newsRow.appendChild(newsItem);
            }
        }
    }

    // Call the function to display news
    displayNews();

    // Your existing code for other functionalities...
});
