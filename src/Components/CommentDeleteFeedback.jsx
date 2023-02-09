export const CommentDeleteFeedback = ({ isDeleted, isDeletable, isDeleting }) => {

  if(isDeleting === true) {
    return (<section>
     <p>...loading</p>
    </section>)
  }
  
  if(isDeleted) {
    return (<section>
     <p>Comment Deleted!</p>
    </section>)
  }

  if(isDeletable === false) {
    return (<section>
     <p>You cannot delete other user's comments...</p>
    </section>)
  }

  
    
  
};
