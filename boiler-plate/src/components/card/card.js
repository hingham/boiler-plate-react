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
    if(this.props.place === "left"){
        return (
          <div class="card">
            <button onClick={() => this.props.test()}>test</button>
            <div>{this.props.content}</div>
            <div onClick={(e)=>this.props.moveCardRight(e)}> &#x2192;</div>
          </div>
        );
    }
    else if(this.props.place === "middle"){
        return (
            <div class="card">
            <div onClick={(e)=>this.props.moveCardLeft(e)}> &#x2190; </div>
              <button onClick={() => this.props.test()}>test</button>
              <div>{this.props.content}</div>
              <div onClick={(e)=>this.props.moveCardRight(e)}> &#x2192;</div>
      
            </div>
          ); 
    }
    else{
        return (
            <div class="card">
            <div onClick={(e)=>this.props.moveCardLeft(e)}> &#x2190; </div>
              <button onClick={() => this.props.test()}>test</button>
              <div>{this.props.content}</div>
      
            </div>
          ); 
    }
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
