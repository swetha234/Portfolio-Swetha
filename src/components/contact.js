import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={6}>
            <h2>Hima Swetha Gutti</h2>
            <img src='images/swetha.png' alt='Avatar' className='swetha-img' />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
              Here are my details. Feel free to contact me...!
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className='contact-list'>
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '30px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-phone-square' aria-hidden='true' />
                    +1 (757) 289-5997
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '30px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-envelope' aria-hidden='true' />
                    himaswetha234@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '30px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-skype' aria-hidden='true' />
                    MySkypeID: himaswetha234
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
