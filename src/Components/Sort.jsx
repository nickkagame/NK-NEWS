import { getArticles } from "../Utils/Api"


export const Sort = ({articles, setArticles}) => { 


const sortBy = (event) => {
    event.preventDefault() 
    getArticles(event.target.value).then(({data})=>{
        console.log(data.articles)
        setArticles(data.articles)
    })
}


    return (<section>
        <select className="sort-by" onChange={(sortBy)}>
            <option>Sort by...</option>
            <option value="?sort=votes">most liked</option>
            <option value="?sort=comment_count">most commented</option>
            <option value="?order=asc">date {'(oldest first)'}</option>
        </select>
    </section>)
}