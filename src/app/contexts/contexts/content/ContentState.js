'use client'
import React, { useReducer } from "react";
import ContentContext from "./contentContext";
import ContentReducer from "./contentReducer";
import { SET_SHOW_MODAL, SET_MODAL_DATA_ID, SET_WORK_SAMPLES } from './ContentTypes';

const ContentState = (props) => {
    const initialState = {
        showModal: false,
        modalDataId: "",
        workSamples: [],
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

    return (
        <ContentContext.Provider
            value={{
                showModal: state.showModal,
                modalDataId: state.modalDataId,
                workSamples: state.workSamples,
                setShowModal,
                setModalDataId,
                setWorkSamples
            }}>
            {props.children}
        </ContentContext.Provider>
    );
}
export default ContentState;