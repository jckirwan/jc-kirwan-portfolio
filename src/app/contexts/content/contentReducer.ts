'use client';
import {
  SET_SHOW_MODAL,
  SET_MODAL_DATA_ID,
  SET_WORK_SAMPLES,
  SET_LOADING,
  SET_SKILLS,
  SET_WORK_EXPERIENCE,
  SET_REFERENCES,
  SET_CASE_STUDIES,
} from './ContentTypes';

interface Action {
  type: string;
  payload?: any;
}

export const contentReducer = (state: any, action: Action) => {
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
    }
    case SET_SKILLS: {
      return {
        ...state,
        skills: action.payload,
      };
    }
    case SET_WORK_EXPERIENCE: {
      return {
        ...state,
        workExperience: action.payload,
      };
    }

    case SET_CASE_STUDIES: {
      return {
        ...state,
        caseStudies: action.payload,
      };
    }
    case SET_REFERENCES: {
      return {
        ...state,
        references: action.payload,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default:
      return state;
  }
};

export default contentReducer;
