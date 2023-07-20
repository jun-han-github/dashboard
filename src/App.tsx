import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import SurveyPage from './pages/SurveyPage'
import ErrorPage from './pages/ErrorPage'
import ThreeDimensionPage from './pages/ThreeDimensionPage'
import TechnicalBlog from './pages/TechnicalBlog'

function App() {

	return (
		<Router>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/*" element={<ErrorPage />} />
				</Route>
				<Route path="/survey" element={<SurveyPage />} />
				<Route path="/3d" element={<ThreeDimensionPage />} />
				<Route path="/technical-blog" element={<TechnicalBlog />} />
			</Routes>
		</Router>
	)
}

export default App
