import { SET_SHOW_MODAL, SET_MODAL_DATA_ID } from './ModalTypes';

export const modalReducer = (state, action) => {
  switch (action.type) {
    case SET_SHOW_MODAL:
      return {
        ...state,
        showModal: action.payload,
      };
    case SET_MODAL_DATA_ID:
      return {
        ...state,
        modalDataId: action.payload,
      };
    default:
      return state;
  }
}

export default modalReducer;