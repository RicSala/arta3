export const uiReducer = (state, action) => {

  switch (action.type) {

    case '[UI] - onOpen register modal':
      return {
        ...state,
        RegisterModalisOpen: true,
      };

    case '[UI] - onClose register modal':
      return {
        ...state,
        RegisterModalisOpen: false,
      };
    case '[UI] - onOpen Login modal':
      return {
        ...state,
        LoginModalisOpen: true,
      };

    case '[UI] - onClose Login modal':
      console.log("CLOSING LOGIN MODAL")
      return {
        ...state,
        LoginModalisOpen: false,
      };
    case '[UI] - onOpen Rent modal':
      return {
        ...state,
        RentModalisOpen: true,
      };

    case '[UI] - onClose Rent modal':
      console.log("CLOSING Rent MODAL")
      return {
        ...state,
        RentModalisOpen: false,
      };


    default:
      return state;
  }
};