import React from 'react';
import './App.css';
import Feed from './components/feed/Feed';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Sidebar from './components/sidebar/Sidebar';
import Widgets from './components/widgets/Widgets';
import { useStateValue } from './StateProvider';

function App() {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();
  // BEM naming convention
  return (
    <div className="app">
      {!user
        ?
        (<Login />)
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
