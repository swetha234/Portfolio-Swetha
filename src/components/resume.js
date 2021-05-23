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
						Passionate Web Developer with 2+ years of experience in using JavaScript, PHP, Ajax, React.js and more. I enjoy web designing and working with HTML, CSS/SASS and UI Frameworks such as Bootstrap. Willingness and ability to grasp concepts quickly and expand the present knowledge base with ease.
						</p>
						<hr style={{ borderTop: '3px solid #6c5b7b', width: '50%' }} />
						<h5>Address</h5>
						<p>1917 Blackrailway, Apt 402, Chesapeake, VA, 23322</p>
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
							jobDescription='Managed website development projects from initial design through completion, 
							optimizing all cross browser and multi-platform compatibility from
							the scope. Designed dynamic and browser compatible pages using jQuery, JavaScript,
							HMTL5, CSS, Bootstrap. Ensured proper documentation and reports in all stages of product life cycle. 
							Conducted training for clients on handling website content management
							systems. Conducted A/B testing to identify bugs and to make UI improvements. 
							Used terraform services to deploy the site into development.'
						/>

						
						<Experience
							monthStart='January'
							startYear={2018}
							monthEnd='Dec'
							endYear={2019}
							companyName='Old Dominion Univeristy'
							jobName='Graduate Web Developer '
							jobDescription='Contributed to design and development of client and 
							server-side applications using PHP, JavaScript, YAML. Formulated and implemented 
							improvements on cleanup processes, performance and minimizing downtime by 10%. 
							Designed and updated HTML/CSS templates on a regular basis and as required.'
						/>
						
		      				
						<hr style={{ borderTop: '3px solid #6c5b7b' }} />
						<h2>Skills</h2>
						<Skills skill='JavaScript' progress={100} />
						<Skills skill='HTML/CSS' progress={90} />
						<Skills skill='C++ ' progress={75} />
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
