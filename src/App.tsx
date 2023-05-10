import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
	
	const logo = <img key={0} src={reactLogo} className="logo react" alt="React logo" />

	const [array, setArray] = useState<React.ReactNode[]>([])

	const handleClick = (): void => {
		if (array.length === 4) {
			setArray([]);
			return;
		}
		const addLogo = <img key={array.length + 1} src={reactLogo} className="logo react" alt="React logo" />
		setArray([...array, addLogo]);
	};


	return (
		<>
			<div>
				{logo} {array}
			</div>
			<h1>Dashboard by Junhan.</h1>
			<div className="card">
				<button onClick={handleClick}>
				Click to increase: {array.length + 1}
				</button>
			</div>
		</>
	)
}

export default App
