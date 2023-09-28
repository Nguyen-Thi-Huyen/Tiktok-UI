import {Route, Routes, Link} from 'react-router-dom'
import HomePage from './pages/Home.js'
import ContactPage from './pages/Contact.js'
import NewsPage from './pages/News.js'
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Homaaaaaaaaaae</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/news' element={<NewsPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
