import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../Utils/Api";
import { useParams } from "react-router-dom";
import { Sort } from "./Sort";

const Articles = () => {
  const { topic } = useParams();

  const [error, setError] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles()
      .then((articlesFromAPI) => {
        setArticles(articlesFromAPI);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, []);

  if (error) {
    return (
      <section>
        <h2>404 NOT FOUND</h2>
      </section>
    );
  }

  if (articles.length === 0) {
    return (
      <section>
        <h3>Latest News:</h3>
        <h4>...articles loading</h4>
      </section>
    );
  }

  if (topic) {
    const filteredArticles = articles.filter(
      (article) => article.topic === topic
    );

    if (filteredArticles.length < 1) {
      return (
        <section>
          <h1>TOPIC NOT FOUND</h1>
        </section>
      );
    }
    return (
      <section>
        <h3 className="latest-news">{topic} articles:</h3>
        <Sort
          articles={articles}
          setArticles={setArticles}
          setError={setError}
        />
        <section className="articles-container">
          {filteredArticles.map((article) => {
            return (
              <Link
                to={`/articles/${article.article_id}`}
                key={article.article_id}
              >
                <div className="articles-box">
                  <h4 className="articles-box-header">{article.title}</h4>
                  <h5>Written by: {article.author}</h5>
                  <img
                    alt={`${article.title}`}
                    className="articles-img"
                    src={article.article_img_url}
                  />
                  <div>
                    <p>
                      likes: {article.votes} Comments: {article.comment_count}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </section>
      </section>
    );
  }

  return (
    <section>
      <h3 className="latest-news">Latest News:</h3>
      <Sort articles={articles} setArticles={setArticles} />
      <section className="articles-container">
        {articles.map((article) => {
          return (
            <Link
              to={`/articles/${article.article_id}`}
              key={article.article_id}
            >
              <div className="articles-box">
                <h4>{article.title}</h4>
                <h5>Written by: {article.author}</h5>
                <img
                  alt={`${article.title}`}
                  className="articles-img"
                  src={article.article_img_url}
                />
                <div>
                  <p>
                    likes: {article.votes} Comments: {article.comment_count}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </section>
  );
};

export default Articles;
