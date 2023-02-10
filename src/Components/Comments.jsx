import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleComments } from "../Utils/Api";
import "../App.css";
import { deleteComment } from "../Utils/Api";
import { CommentDeleteFeedback } from "./CommentDeleteFeedback";

export const Comments = ({ comments, setComments, usernameInput }) => {
  const [isDeletable, setDeletable] = useState();
  const [isDeleted, setDeleted] = useState(false);
  const [isDeleting, setDeleting] = useState();

  const { id } = useParams();
  useEffect(() => {
    getArticleComments(id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [isDeleted, id, setComments]);

  if (comments.length === 0) {
    return (
      <section>
        <h4>Your Comments</h4>
        <h5>...loading</h5>
      </section>
    );
  }

  const deleteHandler = (event, comment) => {
    event.preventDefault();
    if (comment.author !== usernameInput) {
      setDeletable(false);
    }

    if (comment.author === usernameInput) {
      setDeletable(true);
      setDeleting(true)
      deleteComment(comment.comment_id).then((response) => {
        setDeleting(false)
        setDeleted(true);
        console.log(isDeleted);
      });
    }
  };

  return (
    <section className="comments">
      <h4>Your Comments</h4>
      {comments.map((comment) => {
        return (
          <section key={comment.comment_id}>
            <h5>{comment.author} says:</h5>
            <p>{comment.body}</p>
            <form onSubmit={(event) => deleteHandler(event, comment)}>
              <select>
                <option value="">options</option>
                <option>delete comment</option>
              </select>
              <button>go!</button>
            </form>
          </section>
        );
      })}
      <CommentDeleteFeedback isDeleted={isDeleted} isDeletable={isDeletable} isDeleting = {isDeleting} />
    </section>
  );
};
