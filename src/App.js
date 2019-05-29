import React, { Component } from 'react';
import { GlobalStyle } from './style';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Login from './pages/login';
import Detail from './pages/detail/loadable.js';
import Write from './pages/write';
import store from './store';


class App extends Component {
   render() {
    return (  
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <GlobalStyle />
            <Route path='/' exact component={ Home }></Route>
            <Route path='/login' exact component={ Login }></Route>
            <Route path='/write' exact component={ Write }></Route>
            <Route path='/detail/:id' exact component= { Detail }></Route>
          </div>
        </BrowserRouter>   
      </Provider>
    );
   } 
}

export default App;
