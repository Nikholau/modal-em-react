import React from 'react';
import { Button } from 'antd';

const HomePage = () => {
    const {openModal} = useModalContext();
    const testModal = () => openModal({message: '123'});
    return (
        <>
            <h1>home</h1>
            <Button type="primary">
                Abrir Modal
            </Button>

        </>
    );
};

export default HomePage;