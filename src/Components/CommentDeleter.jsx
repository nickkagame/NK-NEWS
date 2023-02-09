export const CommentDeleter = ({ usernameInput, comments }) => {
   for(let i = 0; i < comments.length; i++){
    if(comments[i].author === usernameInput){
        return (
            <section>
              <select>Options</select>
            </section>
          );
        } 
    }
    
  return null;
};
