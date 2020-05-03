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
              <a style={{ textDecoration: 'none', color: 'white' }} href='/'>
                MyPortfolio
              </a>
            }
            scroll
          >
            <Navigation>
              <a href='/resume'>Resume</a>
              <a href='/aboutme'>About Me</a>
              <a href='/projects'>Projects</a>
              <a href='/contact'>Contact</a>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: 'none', color: 'black' }} href='/'>
                MyPortfolio
              </Link>
            }
          >
            <Navigation>
              <a href='resume'>Resume</a>
              <a href='/aboutme'>About Me</a>
              <a href='/projects'>Projects</a>
              <a href='/contact'>Contact</a>
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
