import './Box.scss';

const Box = () => {

	const resumePathUrl = "./assets/data/LiuJunHan_CV_LS.pdf";

	return (
		<a href={resumePathUrl} download="LiuJunHan_CV_LS.PDF">
			<div className="purple-border">

			</div>
			<button className="download-card resume">
				<span className="text">Resume</span>
			</button>
		</a>
	)
}

export default Box
