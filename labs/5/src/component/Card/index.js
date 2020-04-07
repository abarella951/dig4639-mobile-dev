import "./index.css"
import React from 'react'

class Card extends React.Component {
    render() {
        return (
        <div className= "card">
            <span className="close"
            onClick={() => this.props.clickMe()}
        >&times;</span>
        
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <p>{this.props.name}</p>
        <p>{this.props.number}</p>
        </div>
        )
    }
}
export default Card;