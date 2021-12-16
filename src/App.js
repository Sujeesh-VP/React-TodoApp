import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TodoApp from "./components/Todo App/TodoApp";
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
    
  return (
        <>
          <Router>
            <Header/>
            <Route path = "/" exact component = {TodoApp}/>
            <Route path = "/Footer" component = {Footer}/>
          </Router>
        </>
    );
   }
   
   export default App;