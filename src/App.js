import React from 'react';
import './App.css';
import Feed from './components/feed/Feed';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Widgets from './components/widgets/Widgets';

function App() {
  const user = null
  // BEM naming convention
  return (
    <div className="app">
      {!user
        ?
        (<h1>Login</h1>)
        :
        <React.Fragment>
          <Header />
          {/*App body */}
          <div className="app__body">
            <Sidebar />
            {/*Feed */}
            <Feed />
            {/*Widgets */}
            <Widgets />
          </div>
        </React.Fragment>
      }
    </div>
  );
}

export default App;
