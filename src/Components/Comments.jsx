import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleComments } from "../Utils/Api";
import "../App.css";
import { CommentDeleter } from "./CommentDeleter";

export const Comments = ({comments, setComments, usernameInput}) => {


const [isDeleteable, setDeleteable] = useState(false)

  const { id } = useParams();
  useEffect(() => {
    getArticleComments(id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, []);

if(comments.length === 0) { 
  return (<section>
    <h4>Your Comments</h4>
    <h5>...loading</h5>
  </section>)
}

const deleteHandler = (event) => {  
 event.preventDefault();
 console.log()

}

  return (
    <section className="comments">
      <h4>Your Comments</h4>
      {comments.map((comment) => {
        return (
          <section key={comment.comment_id}>
            <h5 value={comment.author}>{comment.author} says:</h5>
            <p>{comment.body}</p>
            <form type='submit'>
            <select>
              <option value=''>options</option>
              <option value={comment.author}>delete comment</option>
            </select>
            <button>go!</button>
            </form>
           
        
          
            {/* <CommentDeleter comments = {comments} usernameInput = {usernameInput}/> */}
          </section>
        );
      })}
    </section>
  );
};
