import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="app">
       
         {/* header*/}
          <Header/>
          {/*app body*/}
        <div className='app__body'>
        <Sidebar/>
            {/*sidebar*/}
            {/*feed*/}
            {/*Widgets*/}

        <Feed />
        </div>
           
    </div>
  );
}

export default App;