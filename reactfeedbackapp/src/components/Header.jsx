function Header(props) { //Catching text property from <Header text="Hello World!"/> {props.text} can also be used
    const HeaderStyles = {
        backgroundColor: props.bgColour,
        color: props.textColour
    }
    return (
        <header style={HeaderStyles}>
            <div className='container'>
                <h2>Feedback UI</h2>
                <p>{props.text}</p>
            </div>
        </header>
    )
} export default Header
