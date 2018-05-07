const apiKey = `4523ce389261406a84e5e0b523425900`;
const newsArticles = document.querySelector("main");
const newsCategory = document.querySelector("#selectCategory");
const defaultSource = 'techcrunch';

newsCategory.addEventListener('change', (event) => {
  updateNews(event.target.value);
})

window.addEventListener('load', (event) => {
  updateNewsSources().then(res => {
    newsCategory.value = defaultSource;
    updateNews();
  });
})



async function updateNews(source = defaultSource) {
  newsArticles.innerHTML = '';
  let response = await fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`)
  let json = await response.json();
  newsArticles.innerHTML = json.articles.map(createArticle).join('\n');
  // console.log(json);
}


async function updateNewsSources() {
  const response = await fetch(`https://newsapi.org/v2/sources?apiKey=${apiKey}`);
  const json = await response.json();

  newsCategory.innerHTML = json.sources.map(source => `<option value=${source.id} >${source.name}</option>`)
    .join("\n");
}


function createArticle(article) {
  return `
    <div class="article">
      <a href="${article.url}">
        <h2>${article.title}</h2>
        <img src="${article.urlToImage}" alt="${article.title}">
        <p>${article.description}</p>
      </a>
    </div>
  `;
}