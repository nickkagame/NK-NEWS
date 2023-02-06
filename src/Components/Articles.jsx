import {useState, useEffect} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Articles = () => { 

    const [articles, setArticles] = useState([])

    useEffect(() => {
    axios.get("https://nk-news.onrender.com/api/articles")
    .then(({data})=> {
        setArticles(data.articles)
    })
    }, [])

console.log(articles)



    return(<section>
        <section>

         <h3>Latest News:</h3>
         {articles.map((article) => {
             return (
                <section key = {article.article_id}>
                  <h4>{article.author}: {article.title}</h4>
                  <img alt={`${article.title} cover image`} className="article-image" 
                 src={article.article_img_url}
                  /> 
             </section>
                 
                 )
         })}
       
        </section>
     </section>)

 
}

export default Articles 