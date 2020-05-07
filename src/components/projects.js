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
					<Card className='cardStyle' shadow={5}>
						<CardTitle
							style={{
								color: '#fff',
								height: '176px',
								background: 'url(images/connector.jpg) center / cover'
							}}
						></CardTitle>
						<CardText>
							<b> Connector</b> - MERN Stack
						</CardText>
						<CardActions border>
							<Button colored>
								<a href='https://github.com/swetha234/CONNECTOR'>GitHub</a>
							</Button>

							<Button colored>
								<a href='https://fierce-taiga-15967.herokuapp.com/'>
									{' '}
									Live Demo
								</a>
							</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name='share' />
						</CardMenu>
					</Card>
					{/* Project 2 */}
					<Card shadow={5} className='cardStyle'>
						<CardTitle
							style={{
								color: '#fff',
								height: '176px',
								background: 'url(images/hackernews.jpg) center / cover'
							}}
						></CardTitle>
						<CardText>
							<b>Hacker News</b> - React, Redux, HTML and CSS
						</CardText>
						<CardActions border>
							<Button colored>
								<a href='https://github.com/swetha234/Hacker-News'>GitHub</a>
							</Button>

							<Button colored>
								<a href='https://master.d2x898dxw2vl7y.amplifyapp.com/'>
									{' '}
									Live Demo
								</a>
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
					<Card shadow={5} className='cardStyle'>
						<CardTitle
							style={{
								color: '#fff',
								height: '176px',
								background: 'url(images/perfumematch.jpg) center / cover'
							}}
						></CardTitle>
						<CardText>
							<b>Perfume Match</b> - Python, BeautifulSoup, Cosine Similarity,
							Laravel
						</CardText>
						<CardActions border>
							<Button colored>
								<a href='https://github.com/swetha234/PerfumeMatch'>GitHub</a>
							</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name='share' />
						</CardMenu>
					</Card>
					{/* Project 2 */}
					<Card shadow={5} className='cardStyle'>
						<CardTitle
							style={{
								color: '#fff',
								height: '176px',
								background: 'url(images/bigmart.jpg) center / cover'
							}}
						></CardTitle>
						<CardText>
							{' '}
							<b>Big Mart Sales Prediction</b> - Python, Xgboost, Decision Tree,
							Linear Regression
						</CardText>
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
					<Card shadow={5} className='cardStyle'>
						<CardTitle
							style={{
								color: '#fff',
								height: '176px',
								background: 'url(images/ai.jpg) center / cover'
							}}
						></CardTitle>
						<CardText>
							<b> Travelling Santa Sleigh</b> - Python, Genetic Algorithm
						</CardText>
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
					<Card shadow={5} className='cardStyle'>
						<CardTitle
							style={{
								color: '#fff',
								height: '176px',
								background: 'url(images/petfiner.jpg) center / cover'
							}}
						></CardTitle>
						<CardText>
							<b>Pet Finder</b> - PHP, MySQL, HTML, CSS, JavaScript, Ajax,
							jQuery, Apache Server.
						</CardText>
						<CardActions border>
							<Button colored>
								<a href='https://github.com/swetha234/webproject'>GitHub</a>
							</Button>

							<Button colored>
								<a href='http://ec2-18-189-89-138.us-east-2.compute.amazonaws.com/webproject/'>
									{' '}
									Live Demo
								</a>
							</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name='share' />
						</CardMenu>
					</Card>
					{/* Project 2 */}
					<Card shadow={5} className='cardStyle'>
						<CardTitle
							style={{
								color: '#fff',
								height: '176px'
							}}
						></CardTitle>
						<CardText>
							<b>Pine Valley Furniture Company</b> - MySQL (Normalizations,
							creating tables, queries)
						</CardText>
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
					<Card shadow={5} className='cardStyle'>
						<CardTitle
							style={{
								color: '#fff',
								height: '176px',
								background: 'url(images/mathgame.jpg) center / cover'
							}}
						></CardTitle>
						<CardText>
							<b>Math Game</b> - JavaScript, HTML, CSS
						</CardText>
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
