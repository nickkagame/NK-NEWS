import { useEffect, useState} from "react";
import { Link} from "react-router-dom";
import '../App.css';
import { getTopics } from "../Utils/Api";

const Nav = () => {

  const [topics, setTopics] = useState([])
  
useEffect(() => {
  getTopics()
  .then((topicsFromApi) => {
    setTopics(topicsFromApi)
  })
}, [])

    return ( <section className="nav-bar">
        <section className="nav-button-container">
        <Link to='/'>
        <button className="nav-button">HOME</button>
      </Link>
      {topics.map((topic)=> {
        return (<section key={topic.slug}>
           <Link to={`/articles/topics/${topic.slug}`}>
          <button className="nav-button" >{topic.slug}</button>
          </Link>
          </section>
          )
      })}
        </section>
      </section>
    )
}

export default Nav