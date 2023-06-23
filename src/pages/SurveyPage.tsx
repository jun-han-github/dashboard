import { ChangeEvent, useEffect, useState } from 'react';
import BasicTextInput from '../components/input/BasicTextInput';
import './SurveyPage.scss';
import { FaCheck } from 'react-icons/fa';

const SurveyPage = () => {

	const [selectedButton, setSelectedButton] = useState('');
	const [inputs, setInputs] = useState<Record<string, string>>({});
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
	};

	useEffect(() => {
		setSelectedButton(inputs.input5);
	}, [inputs.input5]);

	const sendMessage = (inputs: Record<string, string>) => {
		const url = 'https://wa.me/+6591166202?text=' + encodeURIComponent(Object.values(inputs).join('\n\n'));
		window.open(url, '_blank')
	}
	return (
		<div className="survey-page">
			<fieldset>
				<legend>Survey</legend>
				<p className="title">
					Hi visitor, thank you for taking time to fill up this survey. <br />
					I encourage you to not overthink and just give the very first answer that comes to your mind.
				</p>

				<BasicTextInput name="input1" input={inputs.input1 || ''} header="Preferred Name" handleInput={handleChange} />
				<BasicTextInput name="input2" input={inputs.input2 || ''} header="What is one topic you find difficult to learn for work?" handleInput={handleChange} />
				<BasicTextInput name="input3" input={inputs.input3 || ''} header="What is one thing you gave up learning before?" handleInput={handleChange} />
				<BasicTextInput name="input4" input={inputs.input4 || ''} header="What is one skill you found difficult to learn but useful for daily life?" handleInput={handleChange} />
				<p>Which is your most preferred way of learning things? SELECT One.</p>
				<div className="single-select">
					<button onClick={() => handleChange({ target: { name: "input5", value: "Reading" }} as ChangeEvent<HTMLInputElement>)}>
						<div className="icon-bg" style={{ visibility: selectedButton === 'Reading' ? 'visible' : 'hidden' }}>
							<FaCheck size={12} color={'white'} />
						</div>
						<p className="text-bold">Reading</p>
					</button>
					<button onClick={() => handleChange({ target: { name: "input5", value: "Watching" }} as ChangeEvent<HTMLInputElement>)}>
						<div className="icon-bg" style={{ visibility: selectedButton === 'Watching' ? 'visible' : 'hidden' }}>
							<FaCheck size={12} color={'white'} />
						</div>
						<p className="text-bold">Watching</p>
					</button>
					<button onClick={() => handleChange({ target: { name: "input5", value: "Teaching" }} as ChangeEvent<HTMLInputElement>)}>
						<div className="icon-bg" style={{ visibility: selectedButton === 'Teaching' ? 'visible' : 'hidden' }}>
							<FaCheck size={12} color={'white'} />
						</div>
						<p className="text-bold">Teaching</p>
					</button>
					<button onClick={() => handleChange({ target: { name: "input5", value: "Others" }} as ChangeEvent<HTMLInputElement>)}>
						<div className="icon-bg" style={{ visibility: selectedButton === 'Others' ? 'visible' : 'hidden' }}>
							<FaCheck size={12} color={'white'} />
						</div>
						<p className="text-bold">Others</p>
					</button>
				</div>
				<BasicTextInput name="input6" input={inputs.input6 || ''} header="Profession" handleInput={handleChange} />
				<BasicTextInput name="input7" input={inputs.input7 || ''} header="Other than your education certificate, what is the second best certificate you have obtained?" handleInput={handleChange} />
				
				<div className="submit-button">
					<button onClick={() => sendMessage(inputs)}>
						<p className="text-bold">Submit via WhatsApp</p>
					</button>
				</div>
			</fieldset>

			<div className="survey-footer">
				<p>Thank you for your contribution.</p>
			</div>
		</div>
	)
}
export default SurveyPage
