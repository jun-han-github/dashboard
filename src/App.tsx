import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import SurveyPage from './pages/SurveyPage'
import ErrorPage from './pages/ErrorPage'

function App() {

	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<HomePage />} />
				<Route path="survey" element={<SurveyPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Route>
		</Routes>
	)
}

export default App
