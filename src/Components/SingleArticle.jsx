
import Vote from "./Vote";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../Utils/Api";
import CommentAdder from "./CommentAdder";
import { Comments } from "./Comments";


const SingleArticle = () => {
  const { id } = useParams();

  const [article, setArticle] = useState({});
  const [error, setError] = useState(false)
  const [usernameInput, setUsernameInput] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getArticleById(id).then((articleFromApi) => {
      setArticle(articleFromApi);
    }).catch((err) => {
      console.log(err)
      setError(true)
    });
  }, [id]);

if(error){
  return (
  <section>
    <h2>Article Not Found</h2>
  </section>)
}


  return (
    <section>
      <article className="single-article">
        <h2>{article.title}</h2>
        <h3>Written by {article.author}</h3>
        <div className="article-container">
          <p className="article-body">{article.body}</p>
          <img
            className="article-image"
            alt="to accompany the article"
            src={article.article_img_url}
          />
        </div>
      </article>

      <section>
        <Vote article ={article} setArticle={setArticle} />
      </section>
      <section>
        <CommentAdder setComments ={setComments} comments = {comments} article = {article} usernameInput = {usernameInput} setUsernameInput = {setUsernameInput}/>
      </section>


     
      <section></section>

      <section className= 'comments-window'>
      <Comments setComments ={setComments} comments = {comments} usernameInput = {usernameInput} setUsernameInput = {setUsernameInput}/>

      </section>

    </section>
  );
};

export default SingleArticle;
