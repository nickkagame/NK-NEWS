

const VotesErrorMsg = ({errorMsg}) => {
    if(errorMsg === ''){
        console.log(errorMsg)
        return(null)
    } else {
        return (
            <h5> {errorMsg}</h5>
        )
    }
}

export default VotesErrorMsg