import React from 'react';
import { Modal as ModalComponent } from 'antd'
import { useModalContext } from './modal.context';

const Modal = () => {
    const { modalState: { message, visible } } = useModalContext();

    return (
        <ModalComponent visible={visible}>
            <p>{message}</p>
        </ModalComponent>
    );
};

export default Modal;