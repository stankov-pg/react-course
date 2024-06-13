/**
* External dependencies
*/
import 'bulma/css/bulma.css';

/**
* Internal dependencies
*/
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';


function App() {
	return (
		<div>
			<section className="hero is-primary">
				<div className="hero-body">
					<p className="title">Personal Digital Assistants</p>
				</div>
			</section>
			
			<div className="container">
				<div className="section">
					<div className="columns">
						<div className="column is-4">
							<ProfileCard 
								title="Alexa" 
								handle="@alexa99" 
								image={AlexaImage}
								description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet?"
							/>
						</div>
						
						<div className="column is-4">
							<ProfileCard
								title="Cortana"
								handle="@cortana32"
								image={CortanaImage} 
								description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aspernatur, enim nulla ea earum nam?"
							/>
						</div>
						
						<div className="column is-4">
							<ProfileCard 
								title="Siri" 
								handle="@siri01" 
								image={SiriImage}
								description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet?"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
