
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePge from './pages/homepage';
import AboutPage from './pages/aboutpage';
import ContactPage from './pages/contactpage';
import Article from './pages/articlepage';
import ArticlesListPage from './pages/ArticlesListPage';
import NavBar from './navbar';
import NotFoundPage from './pages/notFoundPage';

function App() {
  return (
    <Router>

      <div className="App">
        <NavBar></NavBar>
        <div id="page-body">
          <Switch>
          <Route path="/" component={HomePge} exact></Route>
          <Route path="/about" component={AboutPage} ></Route>
          <Route path="/contact" component={ContactPage} ></Route>
          <Route path="/article-list" component={ArticlesListPage} ></Route>
          <Route path="/article/:name" component={Article} ></Route>
          <Route component={NotFoundPage}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
