import React, { Component } from 'react';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from 'react-mdl';
// import { Link } from 'react-router-dom';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className='projects-grid'>
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background: 'url(images/connector.jpg) center / cover'
              }}
            ></CardTitle>
            <CardText>Connector</CardText>
            <CardActions border>
              <Button colored>
                <a href='https://github.com/swetha234/CONNECTOR'>GitHub</a>
              </Button>

              <Button colored>
                <a href='#'> Live Demo</a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background: 'url(images/hackernews.jpg) center / cover'
              }}
            ></CardTitle>
            <CardText>Hacker News</CardText>
            <CardActions border>
              <Button colored>
                <a href='https://github.com/swetha234/Hacker-News'>GitHub</a>
              </Button>

              <Button colored>
                <a href='#'> Live Demo</a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className='projects-grid'>
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background: 'url(images/perfumematch.jpg) center / cover'
              }}
            ></CardTitle>
            <CardText>Perfume Match</CardText>
            <CardActions border>
              <Button colored>
                <a href='https://github.com/swetha234/PerfumeMatch'>GitHub</a>
              </Button>

              <Button colored>
                <a href='#'> Live Demo</a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background: 'url(images/bigmart.jpg) center / cover'
              }}
            ></CardTitle>
            <CardText>Big Mart Sales Prediction</CardText>
            <CardActions border>
              <Button colored>
                <a href='https://github.com/swetha234/Big-Mart-Sales-Prediction'>
                  GitHub
                </a>
              </Button>

              <Button colored></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
          {/*Project 3*/}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background: 'url(images/ai.jpg) center / cover'
              }}
            ></CardTitle>
            <CardText>Big Mart Sales Prediction</CardText>
            <CardActions border>
              <Button colored>
                <a href='https://github.com/swetha234/AI-Travelling-Santa-Problem'>
                  GitHub
                </a>
              </Button>

              <Button colored></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className='projects-grid'>
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background: 'url(images/petfiner.jpg) center / cover'
              }}
            ></CardTitle>
            <CardText>Pet Finder</CardText>
            <CardActions border>
              <Button colored>
                <a href='https://github.com/swetha234/webproject'>GitHub</a>
              </Button>

              <Button colored>
                <a href='#'> Live Demo</a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px'
              }}
            ></CardTitle>
            <CardText>Pine Valley Furniture Company using MySQL</CardText>
            <CardActions border>
              <Button colored>
                <a href='https://github.com/swetha234/Pine-valley-furniture-DBMS'>
                  GitHub
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background: 'url(images/mathgame.jpg) center / cover'
              }}
            ></CardTitle>
            <CardText>Math Game</CardText>
            <CardActions border>
              <Button colored>
                <a href='https://github.com/swetha234/Mathsgame'>GitHub</a>
              </Button>

              <Button colored>
                <a href='#'> Live Demo</a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Python</Tab>
          <Tab>PHP and Others</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className='content'>{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
