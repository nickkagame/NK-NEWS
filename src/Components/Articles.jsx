import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getArticles } from '../Utils/Api';
import { useParams } from "react-router-dom";
import { Sort } from './Sort';

const Articles = () => { 


    const { topic } = useParams();

    const [articles, setArticles] = useState([])

    useEffect(() => {
    getArticles().then((articlesFromAPI) => {
        setArticles(articlesFromAPI)
    })
}, [])


if(articles.length === 0) {
    return (<section>

        <h3>Latest News:</h3>
        <h4>...articles loading</h4>
        </section>)
}

if(topic) {
   const filteredArticles = articles.filter((article) => article.topic === topic)
   return (<section>
    <h3 className='latest-news'>{topic} articles:</h3>
    <Sort articles = {articles} setArticles = {setArticles}/>
    <section className = 'articles-container'>
     {filteredArticles.map((article) => {
         return (
            <Link to ={`/articles/${article.article_id}`} key = {article.article_id}>
                <div className='articles-box'>
              <h4>{article.title}</h4>
              <h5>Written by: {article.author}</h5>
              <img alt={`${article.title}`} className="articles-img" 
             src={article.article_img_url}
              /> 
                </div>
         </Link>
             
             )
     })}
   
    </section>
 </section>)
}

    return(<section>
        <h3 className='latest-news'>Latest News:</h3>
        <Sort articles = {articles} setArticles = {setArticles}/>
        <section className = 'articles-container'>
         {articles.map((article) => {
             return (
                <Link to ={`/articles/${article.article_id}`} key = {article.article_id}>
                    <div className='articles-box'>
                  <h4>{article.title}</h4>
                  <h5>Written by: {article.author}</h5>
                  <img alt={`${article.title}`} className="articles-img" 
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