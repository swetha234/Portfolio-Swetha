import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
	render() {
		return (
			<div>
				<Grid>
					<Cell col={4}>
						<h2 style={{ paddingTop: '2em' }}>Hima Swetha Gutti</h2>
						<h4 style={{ color: 'grey' }}>Full Stack Developer</h4>
						<hr style={{ borderTop: '3px solid #6c5b7b', width: '50%' }} />
						<p>
							Results-oriented Web Developer with 2+ years of experience and
							expertise in Web Development, Object-Oriented Concepts, Algorithms
							and Data Structures. Dedicated to build, enhance, user-friendly,
							and feature-rich websites. Willingness and ability to grasp
							concepts quickly and expand the present knowledge base with ease.
						</p>
						<hr style={{ borderTop: '3px solid #6c5b7b', width: '50%' }} />
						<h5>Address</h5>
						<p>1049, W 49th street, Norfolk, VA, 23508</p>
						<h5>Phone</h5>
						<p>+1 (757) 289-5997</p>
						<h5>Email</h5>
						<p>himaswetha234@gmail.com</p>

						<hr style={{ borderTop: '3px solid #6c5b7b', width: '50%' }} />
					</Cell>
					<Cell className='resume-right-col' col={8}>
						<h2>Education</h2>

						<Education
							startYear={2018}
							endYear={2019}
							schoolName='Old Dominion Univeristy'
						/>

						<Education
							startYear={2013}
							endYear={2017}
							schoolName='Jawaharlal Nehru Technological University'
							// schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
						/>
						<hr style={{ borderTop: '3px solid #6c5b7b' }} />

						<h2>Experience</h2>

						<Experience
							monthStart='July'
							startYear={2020}
							monthEnd='Present'
							companyName='Hatfield Media'
							jobName='Frontend Developer  '
							jobDescription='Responsible for building websites, making sure the features are built
									according to the scope, referring to the mockups for aesthetics, and
									following the standards for the selected framework and infrastructure.
              Develop features as per client’s requirement using JavaScript, SQL, HTML, CSS, Git from end to end.
              Providing technical support to other web design team members as directed.
              
              
              '
						/>

<Experience
							monthStart='Jan'
							startYear={2020}
							monthEnd='June'
							endYear={2020}
							companyName='Old Dominion Univeristy'
							jobName=' Graduate Web Developer  '
							jobDescription='Achieving to build, maintain a website and enhance existing software systems.
              								Develop features as per client’s requirement using JavaScript, SQL, HTML, CSS, Git from end to end.
              								Providing technical support to other web design team members as directed.'
						/>
						<Experience
							monthStart='January'
							startYear={2018}
							monthEnd='May'
							endYear={2019}
							companyName='Old Dominion Univeristy'
							jobName='Graduate Research assistant '
							jobDescription='Have written test cases using Postman. 
              Revamped websites security, minimizing hacker attacks.
              Fixed bugs from existing websites and implemented enhancements with JavaScript, Ajax and jQuery that significantly improved web functionality and speed.
              
              '
						/>
						
		      				
						<hr style={{ borderTop: '3px solid #6c5b7b' }} />
						<h2>Skills</h2>
						<Skills skill='JavaScript' progress={100} />
						<Skills skill='HTML/CSS' progress={90} />
						<Skills skill='   C++   ' progress={75} />
						<Skills skill='Bootstrap' progress={75} />

						<Skills skill='React' progress={75} />

						<Skills skill='PHP' progress={75} />
						<Skills skill='NodeJS' progress={50} />
						<Skills skill='Python' progress={50} />

						<Skills skill='Angular' progress={25} />
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Resume;
