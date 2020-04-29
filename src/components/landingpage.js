import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img src='images/swetha.png' alt='Avatar' className='swetha-img' />

            <div className='banner-text'>
              <h1>Web Developer</h1>

              <p>
                HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express |
                MongoDB | Redux | React-Hooks
              </p>

              <div className='social-links'>
                {/* LinkedIn */}
                <a
                  href='https://www.linkedin.com/in/himaswethagutti/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-linkedin-square' aria-hidden='true'></i>
                </a>

                {/* Github */}
                <a
                  href='https://github.com/swetha234'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-github-square' aria-hidden='true' />
                </a>

                {/* Youtube */}
                <a
                  href='http://google.com'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-youtube-square' aria-hidden='true' />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
