import { useState } from "react";
import { patchArticle } from "../Utils/Api";
import VotesErrorMsg from "./VotesErrorMsg";

const Vote = ({ article }) => {


  const [votes, setVotes] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  const upVote = () => {
    article.votes += 1;
    patchArticle(article.article_id)
      .then(({ article }) => {
        setVotes(article.votes);
      })
      .catch((err) => {
        const errResponse = err.response.data.msg;
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
