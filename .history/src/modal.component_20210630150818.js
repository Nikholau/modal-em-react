import React from 'react';
import { Modal as ModalComponent } from 'antd'
import { useModalContext } from './modal.context';

const Modal = () => {
    return (
        <ModalComponent visible>
            <p>teste</p>
        </ModalComponent>
    );
};

export default Modal;