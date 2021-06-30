import React,{ createContext, useContext, useState} from 'react';

//Context
const ModalContext = createContext({});

//Provider
const ModalProvider = ({ children }) => {
    const [modalState, setState]= useState({visible: false});

    const openModal = (payload) => setState({ ...payload, visible: true});
    const openModal = () => setState({ visible: false});

    return(
    <ModalContext.Provider value={ modalState, openModal, closeModal }
    >
        {children}
    </ModalContext.Provider>
    );
}

//hook