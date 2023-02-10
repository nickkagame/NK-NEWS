import { getArticles } from "../Utils/Api";
import { useNavigate } from 'react-router-dom';



export const Sort = ({articles, setArticles, setError}) => { 
    const navigate = useNavigate();
    

const sortBy = (event) => {
    event.preventDefault() 
    getArticles(event.target.value).then((articles)=>{
        navigate(`${event.target.value}`)
        setArticles(articles)
    }).catch((err)=> {
        console.log(err)
        setError(true)
    })
}


    return (<section className="sort-by">
        <select  onChange={(sortBy)}
        autosize={true}>
            <option autosize={true} value="?sort=">Sort by...</option>
            <option  autosize={true} value="?sort=">date (default)</option>
            <option autosize={true} value="?sort=votes">most liked</option>
            <option autosize={true} value="?sort=votes&order=asc">least liked</option>
            <option autosize={true} value="?sort=comment_count">most commented</option>
            <option autosize={true} value="?sort=comment_count&order=asc">least commented</option>
            <option autosize={true} value="?order=asc">date {'(oldest first)'}</option>
        </select>
    </section>)
}