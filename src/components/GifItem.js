import React from 'react'
import PropTypes from 'prop-types'

const GifItem = ({id, title, url}) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <div className="card-header">
                <p>{title}</p>
            </div>
            <div className="card-container"><img src={url} alt={title}></img></div>
        </div>
        
        
    )
}

GifItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string
}

export default GifItem
