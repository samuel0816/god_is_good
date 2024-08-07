document.addEventListener('DOMContentLoaded', function() {
    fetch('js/data/news.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const newsContainer = document.getElementById('news-container');
            data.forEach(news => {
                const article = document.createElement('article');
                article.innerHTML = `
                    <h3>${news.title}</h3>
                    <p><em>${news.date}</em></p>
                    <p>${news.content}</p>
                `;
                newsContainer.appendChild(article);
            });
        })
        .catch(error => console.error('Error al cargar las noticias:', error));
});
