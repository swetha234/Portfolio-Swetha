import React, { Component } from 'react';

import { Grid, Cell } from 'react-mdl';

class About extends Component {
  render() {
    return (
      <div>
        <Grid className='demo-grid-ruler'>
          <Cell col={3}>
            <img
              src='images/lavender-blossom.jpg'
              alt='Avatar'
              style={{ width: '300px', height: '190px' }}
            />
          </Cell>

          <Cell col={3}>
            <img
              src='images/lavender-blossom.jpg'
              alt='Avatar'
              style={{ width: '300px', height: '400px' }}
            />
          </Cell>
        </Grid>
        {/* <Grid className='demo-grid-2'>
          <Cell row={1}>
            <img
              src='images/lavender-blossom.jpg'
              alt='Avatar'
              style={{ width: '300px', height: '400px' }}
            />
          </Cell>
        </Grid> */}
      </div>
    );
  }
}

export default About;

// {/* <Cell col={3}>
// <img
//   src='images/lavender-blossom.jpg'
//   alt='Avatar'
//   style={{ height: '100px' }}
// />
// </Cell> */}
