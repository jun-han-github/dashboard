import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import SurveyPage from './pages/SurveyPage'

function App() {

	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<HomePage />} />
				<Route path="/survey" element={<SurveyPage />} />
			</Route>
		</Routes>
	)
}

export default App
