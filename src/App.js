import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav'
import Articles from './Components/Articles';
import { Route, Routes } from 'react-router-dom';
import SingleArticle from './Components/SingleArticle.jsx';
import { Comments } from './Components/Comments';


function App() {
  return (
    <section className='App'>
        <header>
          <h1>NK NEWS</h1>
          <Nav/>  
        </header>
        <Routes>
          <Route path = "/" element={<Articles/>}></Route>
          <Route path = "/articles/:id" element={<SingleArticle/>}></Route>
          <Route path = "/articles/:id/comments" element={<Comments/>}></Route>
          <Route path = "/articles/:topic" element={<Articles/>}> </Route>
        </Routes>
    </section>
  );
}

export default App;
