import PropTypes from 'prop-types'

function Card({children, reverse}) {
    return (
        <div className='card' style={{
            backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#FFF',
            color: reverse ? '#FFF' : '#000'
            }}>
            {children}
        </div>

        // <div className={`card ${reverse && 'reverse'}`}>
        //     {children}
        // </div>
    )
}

Card.defaultProps = {
    reverse: true
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}

export default Card
