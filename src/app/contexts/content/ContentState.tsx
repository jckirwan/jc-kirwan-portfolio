'use client';
import React, { useReducer, ReactNode, FC } from 'react';
import ContentContext from './contentContext';
import ContentReducer from './contentReducer';
import {
  SET_SHOW_MODAL,
  SET_MODAL_DATA_ID,
  SET_WORK_SAMPLES,
  SET_LOADING,
  SET_SKILLS,
  SET_WORK_EXPERIENCE,
  SET_REFERENCES,
} from './ContentTypes';

interface ContentStateProps {
  children: ReactNode;
}

interface State {
  showModal: boolean;
  modalDataId: string;
  workSamples: any[];
  loading: boolean;
  skills: any[];
  workExperience: any[];
  references: any[];
}

const ContentState: FC<ContentStateProps> = (props) => {
  const initialState = {
    showModal: false,
    modalDataId: '',
    workSamples: [],
    loading: false,
    skills: [],
    workExperience: [],
    references: [],
  };

  const [state, dispatch] = useReducer(ContentReducer, initialState);

  const setShowModal = (showModal: boolean) => {
    dispatch({ type: SET_SHOW_MODAL, payload: showModal });
  };

  const setModalDataId = (modalDataId: string) => {
    dispatch({ type: SET_MODAL_DATA_ID, payload: modalDataId });
  };

  const setWorkSamples = (workSamples: any[]) => {
    dispatch({ type: SET_WORK_SAMPLES, payload: workSamples });
  };
  const setSkills = (skills: any[]) => {
    dispatch({ type: SET_SKILLS, payload: skills });
  };

  const setWorkExperience = (workExperience: any[]) => {
    dispatch({ type: SET_WORK_EXPERIENCE, payload: workExperience });
  };
  const setReferences = (references: any[]) => {
    dispatch({ type: SET_REFERENCES, payload: references });
  };

  const setLoading = (loading: boolean) => {
    dispatch({ type: SET_LOADING, payload: loading });
  };

  return (
    <ContentContext.Provider
      value={{
        showModal: state.showModal,
        modalDataId: state.modalDataId,
        workSamples: state.workSamples,
        skills: state.skills,
        workExperience: state.workExperience,
        references: state.references,
        loading: state.loading,
        setShowModal,
        setModalDataId,
        setWorkSamples,
        setSkills,
        setWorkExperience,
        setReferences,
        setLoading,
      }}
    >
      {props.children}
    </ContentContext.Provider>
  );
};
export default ContentState;
