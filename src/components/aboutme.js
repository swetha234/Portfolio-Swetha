import React, { Component } from 'react';

import { Grid, Cell } from 'react-mdl';
// import SplitPane from 'react-split-pane';

class About extends Component {
  render() {
    return (
      <div style={{ width: '100%' }}>
        <div className='left-half' style={{ float: 'left', width: '40%' }}>
          <Grid
            className='demo-grid-1'
            style={{ paddingLeft: '10%', paddingTop: '10%' }}
          >
            <Cell col={6}>
              <img src='images/dogmom.jpg' alt='Avatar' />
            </Cell>
            <Cell col={6}>
              <img src='images/virgo.jpg' alt='Avatar' />
            </Cell>
          </Grid>
          <Grid
            className='demo-grid-2'
            style={{ paddingLeft: '10%', paddingTop: '2%' }}
          >
            <Cell col={6}>
              <img src='images/dance.jpeg' alt='Avatar' />
            </Cell>
            <Cell col={6}>
              <img src='images/cooking.jpg' alt='Avatar' />
            </Cell>
          </Grid>
          <Grid
            className='demo-grid-3'
            style={{ paddingLeft: '10%', paddingTop: '2%' }}
          >
            <Cell col={6}>
              <img src='images/ocd.jpg' alt='Avatar' />
            </Cell>
            <Cell col={6}>
              <img src='images/cooking.jpg' alt='Avatar' />
            </Cell>
          </Grid>
        </div>
        <div className='right-half' style={{}}>
          <h3 style={{ fontFamily: 'Chalkduster' }}> Hello, I'm Swetha....!</h3>
          <p style={{ fontFamily: 'Chalkduster' }}>
            I am a passionate User Experience and User Interface Designer You
            have an idea, you need someone to bring it to life. Or you already
            have a product that needs to be refined to meet the demand of 2020
            users!. This is where i come in! With my knowledge and creativity, I
            can take your idea and your product to the next level. Let's have a
            chat and discuss your idea!
          </p>
        </div>
      </div>
    );
  }
}

export default About;
