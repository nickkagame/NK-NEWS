import {useState, useEffect} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { getArticles } from '../Utils/Api';

const Articles = () => { 

    const [articles, setArticles] = useState([])

    useEffect(() => {
    getArticles().then((articlesFromAPI) => {
        setArticles(articlesFromAPI)
    })
}, [])

console.log(articles)

if(articles.length === 0) {
    return (<section>

        <h3>Latest News:</h3>
        <h4>...articles loading</h4>
        </section>)
}

    return(<section>
        <h3 className='latest-news'>Latest News:</h3>
        <section className = 'articles-container'>
         {articles.map((article) => {
             return (
                <Link to ={`/articles/${article.article_id}`} key = {article.article_id}>
                    <div className='articles-box'>
                  <h4>{article.title}</h4>
                  <h5>Written by: {article.author}</h5>
                  <img alt={`${article.title} cover image`} className="articles-img" 
                 src={article.article_img_url}
                  /> 
                    </div>
             </Link>
                 
                 )
         })}
       
        </section>
     </section>)

 
}

export default Articles 