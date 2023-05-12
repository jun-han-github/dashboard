import './App.scss'
import Box from './components/box/Box'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'

function App() {
	
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Box />} />
			</Route>
		</Routes>
	)
}

export default App
