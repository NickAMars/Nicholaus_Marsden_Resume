import { Button, Typography } from '@mui/material';
import { useModal } from '@src/context/ModalContext';
import { useCallback } from 'react';
import styled from 'styled-components';



const ModalOverLay = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);

  display:flex;
  justify-content: center;
`;
const ModalContent = styled.div`
    margin-top: 10%;
    background-color: #fefefe;
    border: 1px solid #888;
    width: 500px;
    height: max-content;
    overflow: hidden;
    border-radius: 10px;
    & > * {
        padding: 20px;
    }
  
`;
const ModalHeader = styled.div`
    background-color: lightblue;
    display:flex;
    justify-content: center;
    h2 {
        font-weight: bold;
    }
`;

const ModalBody = styled.div`
`;
const ModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const ModalButton = styled(Button)`
    width: 12rem;
    height: 40px;
    margin-right: 2rem;
    font-weight: bold;
`;
export const Modal = () => {
  const { show, hideModal, data } = useModal();
  const closeModal  = useCallback(()=>{
    if(hideModal)
        hideModal();
  },[])
// when show is equal to false
  if (!show) return null;

  return (
            <ModalOverLay>
                <ModalContent>
                    <ModalHeader>
                        <Typography variant='h2'>Please Review </Typography>
                    </ModalHeader> 
                    <ModalBody>
                        <Typography variant='h4'>Full Name:</Typography>
                        <Typography variant='h5'>{data?.fullName}</Typography>
                        <Typography variant='h4'>Email:</Typography>
                        <Typography variant='h5'>{data?.email}</Typography>
                        <Typography variant='h4'>Message:</Typography>
                        <Typography variant='h5'>{data?.message}</Typography>
                    </ModalBody>
                    <ModalFooter>
                        <ModalButton onClick={closeModal} variant="contained" color="error">
                            Close
                        </ModalButton>
                        <ModalButton onClick={()=>{
                                data?.onSubmit()
                                if(hideModal)
                                    hideModal();
                              }
                            } variant="contained" color="tertiary">
                            Confirm
                        </ModalButton>
                    </ModalFooter>
                </ModalContent>
            </ModalOverLay>
  );
};
