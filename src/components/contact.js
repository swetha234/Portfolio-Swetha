import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className='landing-grid'>
        <Grid className='contact-grid'>
          <Cell col={7}>
            <h2 style={{ marginTop: '20k%' }}>Contact Me</h2>
            <hr />

            <div className='contact-list'>
              <List>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: '25px',
                      fontFamily: 'LTC Bodoni 175',
                      color: 'white'
                    }}
                  >
                    <i className='fa fa-phone-square' aria-hidden='true' />
                    +1 (757) 289-5997
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: '25px',
                      fontFamily: 'LTC Bodoni 175',
                      color: 'white'
                    }}
                  >
                    <i className='fa fa-envelope' aria-hidden='true' />
                    himaswetha234@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: '25px',
                      fontFamily: 'LTC Bodoni 175',
                      color: 'white'
                    }}
                  >
                    <i className='fa fa-skype' aria-hidden='true' />
                    MySkypeID: himaswetha234
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
            {/* <img src='images/connect.jpg' alt='Avatar' /> */}
          </Cell>
          <Cell col={6}></Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
