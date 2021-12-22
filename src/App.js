import PropTypes from 'prop-types'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/feedbackData"
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import FeedbackContext, { FeedbackProvider } from './context/FeedbackContext'
import { useState } from 'react'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        {/* Home Page Route */}
                        <Route exact path='/' element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        }>
                        </Route>
                        {/* About Page Route */}
                        <Route path='/about' element={<AboutPage />} />
                    </Routes>
                </div>
                <AboutIconLink />
            </Router>
        </FeedbackProvider>
     )
}


//Used when no tag set in <Header />
Header.defaultProps = {
    bgColour: 'rgba(0,0,0,0.4)',
    textColour: '#FF6A95'
}

//Sets the data type of the Header properties
Header.propTypes = {
    text: PropTypes.string,
}

export default App