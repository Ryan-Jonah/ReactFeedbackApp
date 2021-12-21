function App() {
    //Component variables
    const title = 'Blog Post'
    const body = 'This is my blog post'
    const comments = [
        {id: 1, text: 'Comment 1'},
        {id: 2, text: 'Comment 2'},
        {id: 3, text: 'Comment 3'}
    ]
    const showComments = true
    const commentBlock = (
        <div className='comments'>
            <h3>Comments ({comments.length})</h3>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment.text}</li>
                ))}
            </ul>
        </div> 
    )

    const loading = false
    if(loading) return <h1>Loading...</h1>

    return (
        //Cannot use class in JSX
        <div className='container'>
            <h1>{title}</h1>
            <p>{body}</p>

            {/* Similar to terinary without the else clause */}
            {showComments && commentBlock}

        </div> // Can also use fragment to enclose multipe tags (<> Content </>)
    )
} export default App