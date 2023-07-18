import './ResumeButton.scss';

type ResumeButtonProp = {
    onClick: () => void;
}

const ResumeButton = ({ onClick }: ResumeButtonProp) => {
	return (
		<div onClick={onClick} className="resume-button">
			<div className="purple-border">

			</div>
			<button className="download-card resume">
				<span className="text">Résumé</span>
			</button>
		</div>
	)
}

export default ResumeButton
