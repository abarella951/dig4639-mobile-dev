import React from "react";
import Card from "../Card/";
// import data from "./data.json"

class CardList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            cards: []
        }
    }

    componentDidMount() {
        console.log("Mounted!")
        fetch('https://api.weather.gov/gridpoints/MLB/25,69/forecast')
            .then(response => response.json())
            .then(body => {
                let newCards = body.properties.periods.map((card, i) => {
                    card.id = i
                    return card
                }
                )
                this.setState({ cards: newCards })
                console.log(body.properties.periods)
                })
    }

    clickMe(id) {
        console.log("Clicked" + id)
        console.log(this.state.cards)
        let cards = this.state.cards.filter((v) => v.id !== id)
        console.log(cards)
        this.setState({ cards: cards })
    }

    render() {
        return (
            this.state.cards.map((v, i) =>
                <Card key={v.id} clickMe={() => this.clickMe(v.id)} id={v.id} content={v.content}

                    title={v.name}>


                </Card>
            )
        )
    }
}

export default CardList