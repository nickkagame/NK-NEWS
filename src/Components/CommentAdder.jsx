import { useState } from "react";
import { postComment } from "../Utils/Api";
import { CommentStatus } from "./CommentStatus";

const CommentAdder = ({ article, comments, setComments }) => {
  const [commentInput, setCommentInput] = useState("");
  const [usernameInput, setUsernameInput] = useState("");
  const [submitted, isSubmitted] = useState(false);
  const [commentSubmitting, isSubmitting] = useState(false);
  const [commentErr, setCommentErr] = useState(false);
  const [validComment, setValidComment] = useState();
  const [validUsername, setValidUsername] = useState();
  

  const commentSubmit = (event) => {
    event.preventDefault();
  
    isSubmitting(true);
    if(commentInput.length >= 10){
      setValidComment(true)
    } else if (commentInput.length < 10){
      setValidComment(false)
    }
    if(usernameInput !== "Username options"){
      setValidUsername(true)
    } else {
      setValidUsername(false)
    }
    postComment(article.article_id, usernameInput, commentInput)
      .then(({ data }) => {
        setComments((currComments) => {
          return [data.commentAdded, ...currComments];
        });
        isSubmitting(false);
        isSubmitted(true);
      })
      .catch((err) => {
        setCommentErr(true);
        console.log(err);
      });
  };

  

  return (
    <section>
      <h3>Post comment</h3>
      <form type="submit" className="comment-form">
        <label className="comment-username-label">
          Username
          <select
            type="text"
            onChange={(event) => {
              setUsernameInput(event.target.value);
            }}
          >
            <option>Username options</option>
            <option>tickle122</option>
            <option>cooljmessy</option>
            <option>weegembump</option>
          </select>
        </label>
        <label className="comment-box-label">
          Post Comment:
          <textarea minLength={10}
            className="comment-box"
            type="text"
            onChange={(event) => {
              setCommentInput(event.target.value);
            }}
          ></textarea>
        </label>
        <button onClick={commentSubmit}> Post </button>
        <CommentStatus
          validComment = {validComment}
          validUsername = {validUsername}
          commentSubmitting={commentSubmitting}
          submitted={submitted}
          commentErr={commentErr}
          isSubmitting = {isSubmitting}
        />
      </form>
    </section>
  );
};

export default CommentAdder;