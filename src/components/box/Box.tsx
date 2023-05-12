import './Box.scss';
import reactLogo from '../../assets/react.svg'


const Box = () => {

  return (
    <div className="box">
      <img key={0} src={reactLogo} className="logo" alt="React logo" />
      <h2>Dashboard by Junhan.</h2>
      <p>Coming soon...</p>
    </div>
  )
}

export default Box