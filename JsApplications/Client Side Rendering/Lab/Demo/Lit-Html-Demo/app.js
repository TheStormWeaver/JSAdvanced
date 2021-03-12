//load articles
//generate article html using template (article file)
//render html file on page

import {html, render} from 'https://unpkg.com/lit-html?module';

const articleTemplate = (article) => html`
<article>
  <header>
    <h3>${article.title}</h3>
  </header>
  <div class="article-content">
  <p>${article.content}</p>
  </div>
  <footer>Author: ${article.output}</footer>
</article>
`

async function start(){
  const articles =  await(await fetch("./articles.json")).json()
  const main = document.getElementById("content")

  const article = articleTemplate(articles[0])

  document.getElementById("button").addEventListener('click', onClick)

  function onClick(){
    render(article, main)
  }
}

start()
