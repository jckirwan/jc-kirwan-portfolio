'use client'
import React, { useReducer } from "react";
import ModalContext from "./modalContext";
import ModalReducer from "./modalReducer";
import { SET_SHOW_MODAL, SET_MODAL_DATA_ID } from './ModalTypes';

const ModalState = (props) => {
    const initialState = {
        showModal: false,
        modalDataId: "",
    };

    const [state, dispatch] = useReducer(ModalReducer, initialState);

    const setShowModal = (showModal) => {
        dispatch({ type: SET_SHOW_MODAL, payload: showModal });
    };

    const setModalDataId = (modalDataId) => {
        dispatch({ type: SET_MODAL_DATA_ID, payload: modalDataId });
    };

    return (
        <ModalContext.Provider
            value={{
                showModal: state.showModal,
                modalDataId: state.modalDataId,
                setShowModal,
                setModalDataId,
            }}>
            {props.children}
        </ModalContext.Provider>
    );
}
export default ModalState;