import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleComments } from "../Utils/Api";
import '../App.css';

export const Comments = () => {

    const { id } = useParams();
  
    const [comments, setComments] = useState([]);
  

    useEffect(() => {
        getArticleComments(id).then((commentsFromApi) => {
          setComments(commentsFromApi);
        });
      }, []);
    
      console.log(comments)

    return (
    <section className="comments">
    <h4>Your Comments</h4>
    {comments.map((comment) => { 
        return(<section key = {comment.comment_id}> 
            <h5>{comment.author} says:</h5>
            <p>{comment.body}</p>
        </section>)
    })}
  </section>
    )
}