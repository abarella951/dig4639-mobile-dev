import "./index.css"

class Card {
    constructor(props) {
        // Stores the argument in this.props
        this.props = props;
        // Creates a new HTML DIV element
        this.element = document.createElement("div");
        // Sets the property "innerHTML" of the element
        this.element.innerHTML = this.props.content;
        // sets the class to ""
        this.element.className = "Card";
    }


    render() {
        return this.element;
    }
}

export default Card;