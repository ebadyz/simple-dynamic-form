import data from "../data.json";

const initialState = {
  data: data,
  formReponse: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_FORM_DATA": {
      return { ...state, formResponse: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
