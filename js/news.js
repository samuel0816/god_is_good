document.addEventListener('DOMContentLoaded', function() {
    fetch('./data/news.json')
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('news-container');
            data.forEach(newsItem => {
                const article = document.createElement('article');
                article.innerHTML = `
                    <h3>${newsItem.title}</h3>
                    <p>${newsItem.content}</p>
                `;
                newsContainer.appendChild(article);
            });
        })
        .catch(error => console.error('Error cargando noticias:', error));
});
