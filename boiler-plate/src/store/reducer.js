let initialState = {
    hello: "hello world"
  };
  
  export default (state = initialState, action) => {
    let { type, payload } = action;
  
    switch (type) {
      case "TEST":
      let newState = {...state, hello: "goodbye"};
      return newState;
  
      default:
        return state;
    }
  };
  