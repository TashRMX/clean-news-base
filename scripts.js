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
        { name: "CoinMarketCap", url: "https://coinmarketcap.com/", description: "Latest crypto market data" },
        { name: "CoinGecko", url: "https://www.coingecko.com/", description: "Crypto prices and data insights" },
        { name: "CoinDesk", url: "https://www.coindesk.com/", description: "Crypto news and analysis" },
        { name: "CryptoSlate", url: "https://cryptoslate.com/", description: "Latest cryptocurrency news" },
        { name: "BeInCrypto", url: "https://beincrypto.com/", description: "Crypto news and analysis" },
        { name: "DeCrypt", url: "https://decrypt.co/", description: "Crypto news and insights" },
        { name: "Bitcoin Magazine", url: "https://bitcoinmagazine.com/", description: "Bitcoin and crypto news" },
        { name: "The Block", url: "https://www.theblock.co/", description: "Blockchain and crypto news" },
        { name: "CoinTelegraph", url: "https://cointelegraph.com/", description: "Cryptocurrency news and analysis" },
        { name: "AdaPulse", url: "https://adapulse.com/", description: "News on Cardano and its ecosystem" },
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
