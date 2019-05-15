import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions.js";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: null
    };
  }

  render() {
    return (
      <div class="card">
        <button onClick={() => this.props.test()}>test</button>
        <div>{this.props.data.hello}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
});

const mapDispatchToProps = (dispatch, getState) => ({
  test: payload => dispatch(actions.testFunction(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
