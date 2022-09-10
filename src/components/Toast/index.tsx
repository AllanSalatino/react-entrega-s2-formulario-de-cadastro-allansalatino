import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { FiInfo, FiXCircle } from 'react-icons/fi';
import { AuthContext, IAuthContext } from '../../context/AuthContext';
import { Container } from './style';

const Toast = ({ message, setIsToastVisible }: IAuthContext) => {
    const {isSuccess} = useContext(AuthContext)
  const [isLeave, setIsLeave] = useState<boolean>(false);

  useEffect(() => {
    let timer: number;

    if (isLeave) {
      timer = setTimeout(() => {
        setIsToastVisible(false);
      }, 700);
    } else {
      timer = setTimeout(() => {
        setIsLeave(true);
      }, 4000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isLeave]);

  return (
    <Container isLeave={isLeave} isSuccess={isSuccess}>
      <FiInfo size={24} />

      <div>
        <strong>{isSuccess ? message?.success.title : message?.error.title}</strong>
        <p>{isSuccess ? message?.success.description : message?.error.description}</p>
      </div>

      <button type='button' onClick={() => setIsLeave(true)}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;