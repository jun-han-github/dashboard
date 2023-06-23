import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import SurveyPage from './pages/SurveyPage'
import ErrorPage from './pages/ErrorPage'

function App() {

	return (
		<Router>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/*" element={<ErrorPage />} />
				</Route>
				<Route path="/survey" element={<SurveyPage />} />
			</Routes>
		</Router>
	)
}

export default App
