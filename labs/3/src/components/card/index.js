import "./index.css"
import React from 'react'

class Card extends React.Component {
    render() {
        return (
            <div className = "card">
                {this.props.content}
            </div>
        )
    }
}
export default Card;