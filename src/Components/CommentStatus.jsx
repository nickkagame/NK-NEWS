
export const CommentStatus = ({validComment, submitted, commentSubmitting, commentErr, validUsername}) => {
   console.log(validUsername)
    if(validUsername === false ){
        return<p>
            Please select username
        </p>
    }

    if(validComment === false){
        return(<p>
            Invalid Comment - must be more than 10 characters....
        </p>)
    }
   
    if(commentSubmitting === true && validComment === true && !commentErr) {
    return(<p>
        Comment submission pending....
    </p>)
    }
    if(submitted) {
        return(<p className="comment-submitted">
            Comment Submitted! 👍
        </p>)
        }
    if(commentErr) {
     return(<p className="comment-error">
                Comment error 
            </p>)
            }
}

