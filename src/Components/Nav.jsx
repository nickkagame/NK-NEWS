import { useEffect, useState} from "react";
import { Link} from "react-router-dom";
import '../App.css';
import { getArticles } from "../Utils/Api";

const Nav = () => {

  const [topics, setTopics] = useState([])
  


    return ( <section className="nav-bar">
        <header>
        <Link to='/'>
        <button className="nav-button">HOME</button>
      </Link>
        </header>
      </section>
    )
}

export default Nav