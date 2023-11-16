'use client'
import React, { useReducer } from "react";
import ContentContext from "./contentContext";
import ContentReducer from "./contentReducer";
import { SET_SHOW_MODAL, SET_MODAL_DATA_ID, SET_WORK_SAMPLES, SET_LOADING, SET_SKILLS, SET_WORK_EXPERIENCE } from './ContentTypes';

const ContentState = (props) => {
    const initialState = {
        showModal: false,
        modalDataId: "",
        workSamples: [],
        loading: false,
        skills: [],
        workExperience: [],
    };

    const [state, dispatch] = useReducer(ContentReducer, initialState);

    const setShowModal = (showModal) => {
        dispatch({ type: SET_SHOW_MODAL, payload: showModal });
    };

    const setModalDataId = (modalDataId) => {
        dispatch({ type: SET_MODAL_DATA_ID, payload: modalDataId });
    };

    const setWorkSamples = (workSamples) => {
        dispatch({ type: SET_WORK_SAMPLES, payload: workSamples });
    }
    const setSkills = (skills) => {
        dispatch({ type: SET_SKILLS, payload: skills });
    }

    const setWorkExperience = (workExperience) => {
        dispatch({ type: SET_WORK_EXPERIENCE, payload: workExperience });
    }

    const setLoading = (loading) => {
        dispatch({ type: SET_LOADING, payload: loading });
    }

    return (
        <ContentContext.Provider
            value={{
                showModal: state.showModal,
                modalDataId: state.modalDataId,
                workSamples: state.workSamples,
                skills: state.skills,
                workExperience: state.workExperience,
                loading: state.loading,
                setShowModal,
                setModalDataId,
                setWorkSamples,
                setSkills,
                setWorkExperience,
                setLoading
            }}>
            {props.children}
        </ContentContext.Provider>
    );
}
export default ContentState;