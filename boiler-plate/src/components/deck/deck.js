import React from "react";
import Card from "../card/card.js";

// export default function deck(props) {
//   return (

//   )
// }

export default class deck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   cards: [{content: "filler"}, {content: "filler"}]
      cards: this.props.cards
    };
  }

  addACard = () => {
    let message = window.prompt("Please enter card content:");
    this.setState({ cards: [...this.state.cards, { content: message }] });
  };

  render() {
    return (
      <div className="deck">
        <div style={{ backgroundColor: this.props.color }}>
          {this.props.name}
        </div>

        {this.state.cards.map((card, i) => {
          return (
            <Card
              moveCardLeft={this.props.moveCardLeft}
              moveCardRight={this.props.moveCardRight}
              place={this.props.place}
              content={this.state.cards[i].content}
            />
          );
        })}
        {/* <Card content="filler content" />
        <Card content="filler content" /> */}
        <div onClick={() => this.addACard()}>+ Add a Card</div>
      </div>
    );
  }
}
