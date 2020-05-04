import React, { Component } from 'react';

import { Grid, Cell } from 'react-mdl';

class About extends Component {
  render() {
    return (
      <div>
        <Grid className='demo-grid-ruler'>
          <Cell col={3}>
            <img
              src='images/dogmom.jpg'
              alt='Avatar'
              style={{ width: '410px', height: '404px' }}
            />
          </Cell>
          <Cell col={3}>
            <img
              src='images/virgo.jpg'
              alt='Avatar'
              style={{ width: '340px', height: '380px' }}
            />
          </Cell>
          <Cell col={3}>
            <img
              src='images/cooking.jpg'
              alt='Avatar'
              style={{ width: '317px', height: '330px' }}
            />
          </Cell>

          <Cell col={2}>
            <img
              src='images/dance.jpeg'
              alt='Avatar'
              style={{ width: '289px', height: '305px' }}
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
