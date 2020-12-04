import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Shop from './component/Shop';
import BlogDetail from './component/BlogDetail';

import Blog from './component/Blog';
import About from './component/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Contact from './component/Contact';

function App() {
  return (
    <Router>
    <div className="container-fluid">
      <Header/>
      <Route path="/Shop" component={Shop}/>
      
      
      <Route path="/About" component={About}/>
      <Route path="/contact" component={Contact}/> 
      <Route path="/Blog" component={Blog}/>
      <Route path="/BlogDetail" component={BlogDetail}/>
         
      
      <Footer/>
   
     
  </div>
  </Router>
  );
}

export default App;
