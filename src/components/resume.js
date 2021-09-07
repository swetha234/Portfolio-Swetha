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
							monthStart='April'
							startYear={2020}
							monthEnd='Present'
							companyName='Hatfield Media'
							jobName='Frontend Developer  '
							jobDescription='
							•   Managed website development projects from initial design through completion, optimizing all cross browser and multi-platform compatibility from the scope. 
							•	Development expertise with custom post types, custom fields, plugins and themes for high-traffic WordPress sites.
							•	Designed and Developed User Interactive (UI) of Web pages with the help of HTML5, HTML, CSS3, CSS, JavaScript, jQuery, Bootstrap, PHP and AJAX.
							•	Created React for reusable components (multi-field form elements, background file uploads.
							•	Ensured proper documentation and reports in all stages of product life cycle. 
							•	Conducted training for clients on handling website content management systems.
							•	Used CSS (SASS) to develop UI Components such as Accordions and Modal Windows using pure HTML 5 and CSS3.
							•	Used terraform services to deploy the site into development. 
							'
						/>

						
						<Experience
							monthStart='January'
							startYear={2018}
							monthEnd='Apr'
							endYear={2020}
							companyName='Old Dominion Univeristy'
							jobName='Web Developer '
							jobDescription='
							•	Re-engineered API’s by using PHP Geolocation web service API and implemented a dashboard to visually represent them using Google Visualization API. 
							•	Formulated and implement improvements on cleanup processes, performance and minimizing downtime by 10%. 
							•	Implemented enhancements with JavaScript, PHP, Ajax and jQuery that significantly improved web functionality and speed. 
							•	Involved in development of front-end web applications using HTML5, CSS3, Java, React JS, JSON and Bootstrap.
							•	Used Bootstrap library to quickly build project UIs and used ReactJS framework to associate HTML elements to models.
							•	Developed application as Enterprise JavaScript using – Node.js, WebSocket, Jasmine, Karma, NPM, Gulp, Protractor etc.
							•	Implemented a Node.JS server to manage authentication.
							'
						/>

						<Experience
							monthStart='Nov'
							startYear={2016}
							monthEnd='Oct'
							endYear={2017}
							companyName='Iamastudent.com	'
							jobName='Web Developer '
							jobDescription='
							•	Re-engineered API’s by using PHP Geolocation web service API and implemented a dashboard to visually represent them using Google Visualization API. 
							•	Formulated and implement improvements on cleanup processes, performance and minimizing downtime by 10%. 
							•	Implemented enhancements with JavaScript, PHP, Ajax and jQuery that significantly improved web functionality and speed. 
							•	Involved in development of front-end web applications using HTML5, CSS3, Java, React JS, JSON and Bootstrap.
							•	Used Bootstrap library to quickly build project UIs and used ReactJS framework to associate HTML elements to models.
							•	Developed application as Enterprise JavaScript using – Node.js, WebSocket, Jasmine, Karma, NPM, Gulp, Protractor etc.
							•	Implemented a Node.JS server to manage authentication.
							•	Designed and implementing a Node.JS based web text and voice messaging app and its cloud backend.
							•	Utilized Modernizer extensively to build HTML5/CSS3 based page layouts that are cross-browser compatible and standards-compliant.
							•	Performed Unit testing on ReactJS applications using tools like Karma, Jasmine and worked with Gulp tool for build automation.
							'
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
