import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getArticleComments } from "../Utils/Api";
import CommentAdder from "./CommentAdder";
import { Comments } from "./Comments";

const SingleArticle = () => {
  const { id } = useParams();

  const [article, setArticle] = useState({});

  const [comments, setComments] = useState([]);

  useEffect(() => {
    getArticleById(id).then((articleFromApi) => {
      setArticle(articleFromApi);
    });
  }, []);


  return (
    <section>
      <article className="single-article">
        <h2>{article.title}</h2>
        <h3>Written by {article.author}</h3>
        <div className="article-container">
          <p className="article-body">{article.body}</p>
          <img
            className="article-image"
            alt="an image to accompany the article"
            src={article.article_img_url}
          />
        </div>
      </article>
      <section>
        <CommentAdder setComments ={setComments} comments = {comments} article = {article}/>
      </section>
      <section className= 'comments-window'>
      <Comments />
      </section>
    </section>
  );
};

export default SingleArticle;
