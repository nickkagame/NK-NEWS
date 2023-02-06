import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav'
import Articles from './Components/Articles';
import { Route, Routes } from 'react-router-dom';
import SingleArticle from './Components/SingleArticle.jsx';


function App() {
  return (
    <section>
        <header>
          <h1>NK NEWS</h1>
          <Nav/>  
        </header>
        <Routes>
          <Route path = "/" element={<Articles/>}></Route>
          <Route path = "/articles/:id" element={<SingleArticle/>}></Route>
        </Routes>
    </section>
  );
}

export default App;
