import React from "react";
import { Provider } from "react-redux";
import "./style/design.scss";
import logo from "./logo.svg";
import Layout from "./components/layout/layout.js";
import Card from "./components/card/card.js"

import createStore from "./store/index.js";
const store = createStore();


function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Card text="hello world" />
      </Layout>
    </Provider>
  );
}

export default App;
