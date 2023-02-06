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

if(articles.length === 0) {
    return (<section>

        <h3>Latest News:</h3>
        <h4>...articles loading</h4>
        </section>)
}

    return(<section>
        <section>

         <h3>Latest News:</h3>
         {articles.map((article) => {
             return (
                <section key = {article.article_id} className='articles-container'>
                    <div className='articles-box'>
                  <h4>{article.title}</h4>
                  <h5>Written by: {article.author}</h5>
                  <img alt={`${article.title} cover image`} className="articles-img" 
                 src={article.article_img_url}
                  /> 
                    </div>
             </section>
                 
                 )
         })}
       
        </section>
     </section>)

 
}

export default Articles 