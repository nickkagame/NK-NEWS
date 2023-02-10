import { getArticles } from "../Utils/Api";
import { useNavigate } from 'react-router-dom';



export const Sort = ({articles, setArticles, setError}) => { 
    const navigate = useNavigate();
    

const sortBy = (event) => {
    event.preventDefault() 
    getArticles(event.target.value).then((articles)=>{
        navigate(`${event.target.value}`)
        console.log(articles)
        setArticles(articles)
    }).catch((err)=> {
        console.log(err)
        setError(true)
    })
}


    return (<section className="sort-by">
        <select  onChange={(sortBy)}>
            <option value="?sort=">Sort by...</option>
            <option value="?sort=">date (default)</option>
            <option value="?sort=votes">most liked</option>
            <option value="?sort=votes&order=asc">least liked</option>
            <option value="?sort=comment_count">most commented</option>
            <option value="?sort=comment_count&order=asc">least commented</option>
            <option value="?order=asc">date {'(oldest first)'}</option>
        </select>
    </section>)
}