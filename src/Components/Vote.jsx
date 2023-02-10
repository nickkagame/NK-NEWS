import { useState } from "react";
import { patchArticle } from "../Utils/Api";
import VotesErrorMsg from "./VotesErrorMsg";

const Vote = ({ article, setArticle }) => {


  const [errorMsg, setErrorMsg] = useState("");

  const upVote = () => {
    let incVotes = article.votes;
    incVotes++
    setArticle({...article,
    votes: incVotes})
    patchArticle(article.article_id)
      .catch((err) => {
        setErrorMsg("something went wrong");
      });
  };

  return (
    <section>
      <button
        className="vote-button"
        aria-label="like this article"
        onClick={upVote}
      >
        {" "}
        Like this 👍 {article.votes}
      </button>
      <VotesErrorMsg errorMsg = {errorMsg}/>
    </section>
  );
};

export default Vote;
