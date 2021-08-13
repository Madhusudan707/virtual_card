export const initialState = {
  data: [],
  response: [],
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "ON_SUCCESS":
      
      return {
        data: action.payload,
        response: action.payload,
      };
    case "ON_FAILURE":
      return {
        response: [],
      };
    case "ON_SEARCH":
      return { ...state, response: action.payload.response };

    case "FILTER_CARD_BY_OWNER_ID":
      return { ...state, response: action.payload.response };
    
      case "FILTER_CARD_BY_TYPE":
        return { ...state, response: action.payload.response };

    case "ALL_CARD":
    return { ...state, response: action.payload.response };

    case "BLOCKED_CARD":
    return { ...state, response: action.payload.response };
    default:
      return state;
  }
};
