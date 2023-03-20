import './App.css';
import React,{Component} from 'react';
import Nav from './components/Nav';
import About from './components/About'
import Main from './components/Main'
import Lessons from './components/Lessons'
import {Route,Routes} from 'react-router-dom'

class App extends Component {
  render()
  {
    return (
      <div className="App">
          <Nav />
          {/*<Route path='/' component={Main} />*/}
          <Routes>
              <Route exact path ='/' element={<Main/>}></Route>
              <Route path ='/about/*' element={<About/>}></Route>
              <Route path ='/lessons/*' element={<Lessons/>}></Route>
              <Route path="/*" element={<h2>Not Found</h2>} />
          </Routes>
      </div>
    );
  }
}

export default App;
