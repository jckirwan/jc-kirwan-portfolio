import { SET_SHOW_MODAL, SET_MODAL_DATA_ID, SET_WORK_SAMPLES } from './ContentTypes';

export const contentReducer = (state, action) => {
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
    case SET_WORK_SAMPLES: {
      return {
        ...state,
        workSamples: action.payload,
      };
    };
    default:
      return state;
  }
}

export default contentReducer;