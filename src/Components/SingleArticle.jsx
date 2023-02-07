import Vote from "./Vote";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../Utils/Api";

const SingleArticle = () => {
  const { id } = useParams();

  const [article, setArticle] = useState({});

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
        <Vote article ={article} />
      </section>
      <section></section>
    </section>
  );
};

export default SingleArticle;
