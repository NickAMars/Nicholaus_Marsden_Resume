import {createContext, ReactNode, useContext, useState} from 'react';

interface IModalContent {
    fullName: string;
    email: string;
    message: string;
    onSubmit: Function;
}

interface IModalProvider {
    show: boolean;
    data?: IModalContent;
    showModal?: (content: IModalContent) => void; 
    hideModal?: ()=> void;
}

const ModalContext = createContext<IModalProvider>({ show: false });

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [show, setShow] = useState<boolean>(false);
    const [data, setData] = useState<IModalContent>();

    const showModal = (content?: IModalContent) => {
        setShow(true);
        setData(content);
    };

    const hideModal = () => {
        setShow(false);
        setData(undefined);
    };

    return (
        <ModalContext.Provider value={{ show, data, showModal, hideModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);