import './Box.scss';
import reactLogo from '../../assets/react.svg'
import { FaFileDownload, FaFilePdf } from 'react-icons/fa';


const Box = () => {

	const resumePathUrl = "./assets/data/LiuJunHan_CV_LS.pdf";

	return (
		<div className="box">
			<img key={0} src={reactLogo} className="logo" alt="React logo" />
			<h2>Dashboard by Junhan.</h2>
			<div className="box-column-layout">
				<a href={resumePathUrl} download="LiuJunHan_CV_LS.PDF">
					<button className="download-card resume">
						<FaFilePdf style={{ color: '#40e0d0' }} size={36} />
						<span className="text">Download</span>
					</button>
				</a>

				<a href={resumePathUrl} target="_blank">
					<button className="download-card resume">
						<FaFileDownload style={{ color: '#40e0d0' }} size={36} />
						<span className="text">Open File</span>
					</button>
				</a>
			</div>
		</div>
	)
}

export default Box
