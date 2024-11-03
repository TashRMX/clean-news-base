document.addEventListener("DOMContentLoaded", () => {
    const newsContainer = document.getElementById("news-container");
    const themeToggle = document.getElementById("theme-toggle");
    const searchBar = document.getElementById("search-bar");

    // Theme Toggle
    themeToggle.addEventListener("click", () => {
        const isLightMode = document.body.classList.toggle("light-mode");
        themeToggle.querySelector("#theme-icon").textContent = isLightMode ? "☀️" : "🌙"; // Sun/Moon icon toggle
    });

    // News Sources
    const newsSources = [
        { name: 'CoinDesk', url: 'https://www.coindesk.com/', description: "Crypto news and analysis", font: 'Open Sans' },
        { name: 'CoinTelegraph', url: 'https://www.cointelegraph.com/', description: "Crypto news and analysis", font: 'Roboto' },
        { name: 'CryptoSlate', url: 'https://www.cryptoslate.com/', description: "Latest cryptocurrency  news", font: 'Lato' },
        { name: 'CryptoNews', url: 'https://www.cryptonews.com/', font: 'Montserrat' },
        { name: 'The Block', url: 'https://www.theblockcrypto.com/', description: "Blockchain and crypto news", font: 'Open Sans' },
        { name: 'Decrypt', url: 'https://www.decrypt.co/', description: "Crypto news and insight", font: 'Roboto' },
        { name: 'NewsBTC', url: 'https://www.newsbtc.com/', font: 'Lato' },
        { name: 'Cardano Feed', url: 'https://www.cardanofeed.com/', font: 'Montserrat' },
        { name: 'ADAPulse', url: 'https://adapulse.io/', font: 'Open Sans' },
        { name: 'Glassnode Insights', url: 'https://insights.glassnode.com/', font: 'Roboto' }
    ];

    // Populate Recent News
    newsSources.forEach(source => {
        const newsItem = createNewsItem(source);
        newsContainer.querySelector(".news-grid").appendChild(newsItem);
    });

    // Filter News by Search
    searchBar.addEventListener("input", () => {
        const query = searchBar.value.toLowerCase();
        document.querySelectorAll(".news-item").forEach(item => {
            const title = item.querySelector("h2").textContent.toLowerCase();
            item.style.display = title.includes(query) ? "block" : "none";
        });
    });

    // Helper function to create a news item
    function createNewsItem(source) {
        const newsItem = document.createElement("div");
        newsItem.className = "news-item";

        const newsTitle = document.createElement("h2");
        newsTitle.textContent = source.name;

        const newsDescription = document.createElement("p");
        newsDescription.textContent = source.description;

        const newsLink = document.createElement("a");
        newsLink.href = source.url;
        newsLink.textContent = "Read more";
        newsLink.target = "_blank";

        newsItem.appendChild(newsTitle);
        newsItem.appendChild(newsDescription);
        newsItem.appendChild(newsLink);
        return newsItem;
    }
});
