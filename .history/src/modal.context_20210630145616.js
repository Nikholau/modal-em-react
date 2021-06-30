import React,{ createContext, useContext, useState} from 'react';

//Context
const ModalContext = createContext({});

//Provider
const ModalProvider = ({ children }) => {

    return<ModalContext.Provider value={}>
        {children}
    </ModalContext.Provider>
}

//hook