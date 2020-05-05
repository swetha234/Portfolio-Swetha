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
              <a
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  fontFamily: 'Chalkduster',
                  fontSize: '18px'
                }}
                className='btn btn-5'
                href='/'
              >
                MyPortfolio
              </a>
            }
            scroll
          >
            <Navigation>
              <a
                href='/resume'
                style={{ fontFamily: 'Chalkduster', fontSize: '17px' }}
                className='btn btn-5'
              >
                Resume
              </a>
              <a
                href='/aboutme'
                style={{ fontFamily: 'Chalkduster', fontSize: '17px' }}
                className='btn btn-5'
              >
                About Me
              </a>
              <a
                href='/projects'
                style={{ fontFamily: 'Chalkduster', fontSize: '17px' }}
                className='btn btn-5'
              >
                Projects
              </a>
              <a
                href='/contact'
                style={{ fontFamily: 'Chalkduster', fontSize: '17px' }}
                className='btn btn-5'
              >
                Contact
              </a>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  fontFamily: 'Chalkduster',
                  fontSize: '17px'
                }}
                href='/'
              >
                MyPortfolio
              </Link>
            }
          >
            <Navigation>
              <a
                href='resume'
                class='btn btn-5'
                style={{ fontFamily: 'Chalkduster', fontSize: '17px' }}
              >
                Resume
              </a>
              <a
                href='/aboutme'
                style={{ fontFamily: 'Chalkduster', fontSize: '17px' }}
              >
                About Me
              </a>
              <a
                href='/projects'
                style={{ fontFamily: 'Chalkduster', fontSize: '17px' }}
              >
                Projects
              </a>
              <a
                href='/contact'
                style={{ fontFamily: 'Chalkduster', fontSize: '17px' }}
              >
                Contact
              </a>
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
