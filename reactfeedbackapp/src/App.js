import PropTypes from 'prop-types'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/feedbackData"
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { useState } from 'react'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete this item?'))
        setFeedback(feedback.filter((item) => item.id !== id))
    }

    return (
    <>
        <Header/>
            {/* Cannot use class in JSX */}
        <div className='container'>
            <FeedbackForm />
            <FeedbackStats feedback={feedback}/>
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
        </div> 
    </> // Using fragment to enclose multipe tags (<> Content </>)


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