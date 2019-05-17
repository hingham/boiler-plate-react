import React from "react";
import { Provider } from "react-redux";
import "./style/design.scss";
import logo from "./logo.svg";
import Layout from "./components/layout/layout.js";
import Deck from "./components/deck/deck.js";

import createStore from "./store/index.js";
const store = createStore();

// function App() {
//   return (
//     <Provider store={store}>
//       <Layout>
//         <Deck color="#8E5E95" name="Winnie" place="left" />
//         <Deck color="#39859C" name="Bob" place="middle" />
//         <Deck color="#344759" name="Thomas" place="middle" />
//         <Deck color="#E8741E" name="George" place="right" />
//       </Layout>
//     </Provider>
//   );
// }

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      cards1: [{ content: "filler" }, { content: "filler" }],
      cards2: [{ content: "filler" }, { content: "filler" }],
      cards3: [{ content: "filler" }, { content: "filler" }],
      cards4: [{ content: "filler" }, { content: "filler" }]
    };
  }

  moveCardRight = () => {
    
    alert('hello');
  };

  moveCardLeft = () => {
    alert('hello');
  };

  render() {
    return (
      <Provider store={store}>
        <Layout>
          <Deck
            color="#8E5E95"
            name="Winnie"
            cards={this.state.cards1}
            place="left"
            moveCardRight={this.moveCardRight}
            moveCardLeft={this.moveCardLeft}

          />
          <Deck
            color="#39859C"
            name="Bob"
            cards={this.state.cards2}
            place="middle"
            moveCardRight={this.moveCardRight}
            moveCardLeft={this.moveCardLeft}
          />
          <Deck
            color="#344759"
            name="Thomas"
            cards={this.state.cards3}
            place="middle"
            moveCardRight={this.moveCardRight}
            moveCardLeft={this.moveCardLeft}
          />
          <Deck
            color="#E8741E"
            name="George"
            cards={this.state.cards4}
            place="right"
            moveCardRight={this.moveCardRight}
            moveCardLeft={this.moveCardLeft}
          />
        </Layout>
      </Provider>
    );
  }
}
