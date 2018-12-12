import * as actions from "./actions";

const reducer = (state = {}, action) => {
  const { type, data } = action;

  switch (type) {
    case actions.INITIALIZATIONS:
      return {
        ...state,
        data
      };
    default:
      return state;
  }
};

export default reducer;