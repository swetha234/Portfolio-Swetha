// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import 'font-awesome/css/font-awesome.min.css';
import Main from './components/main';
// import { Link } from 'react-router-dom';
import { BrowserRouter as Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='demo-big-content'>
        <Layout>
          <Header
            className='header-color'
            title={
              <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
                MyPortfolio
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to='/resume'>Resume</Link>
              <Link to='/aboutme'>About Me</Link>
              <Link to='/projects'>Projects</Link>
              <Link to='/contact'>Contact</Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
                MyPortfolio
              </Link>
            }
          >
            <Navigation>
              <Link to='resume'>Resume</Link>
              <Link to='/aboutme'>About Me</Link>
              <Link to='/projects'>Projects</Link>
              <Link to='/contact'>Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className='page-content' />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
