import './App.css';
import Nav from './Components/Nav'
import Articles from './Components/Articles';
import { Route, Routes } from 'react-router-dom';
import SingleArticle from './Components/SingleArticle.jsx';
import { Comments } from './Components/Comments';
import ErrorPage from './Components/Error-page-not-found'

function App() {
  return (
    <section className='App'>
      <section>

      </section>
        <header className='NK-header'>
          <h1 className ="header-text">NK NEWS</h1>
        </header>
        <Nav/>  
        <Routes>
          <Route path = "/" element={<Articles/>}></Route>
          <Route path = "/articles" element={<Articles/>}></Route>
          <Route path = "/articles/:id" element={<SingleArticle/>}></Route>
          <Route path = "/articles/:id/comments" element={<Comments/>}></Route>
          <Route path = "/articles/topics/:topic" element={<Articles/>}> </Route>
          <Route path = "?sort=" element={<Articles/>}> </Route>
          <Route path = "?sort=votes" element={<Articles/>}> </Route>
          <Route path = "?sort=votes&?order=asc" element={<Articles/>}> </Route>
          <Route path = "?sort=comment_count" element={<Articles/>}> </Route>
          <Route path = "?sort=comment_count&order=asc" element={<Articles/>}> </Route>
          <Route path = "?order=asc" element={<Articles/>}> </Route>
          <Route path = "/*" element={<ErrorPage/>}></Route>
        </Routes>
    </section>
  );
}

export default App;
