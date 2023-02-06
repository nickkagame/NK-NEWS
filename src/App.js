import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav'
import Articles from './Components/Articles';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <section>
  
        <header>
          <h1>NK NEWS</h1>
          <Nav/>
          <Articles/>
        </header>
    </section>
  );
}

export default App;
