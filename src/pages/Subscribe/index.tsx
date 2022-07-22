import styled from 'styled-components';
import { useState } from 'react';

import Logo from 'components/Logo';
import Button from 'components/Button';
import Modal from './Modal'

const Subscribe: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Container>
      <Logo
        width="264px"
        height="132px"
      />
      <HeaderText>
        Our place for news, updates and help.
      </HeaderText>
      <Button
        onClick={() => setShowModal(true)}
        text="Subscribe"
      />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
      />
      {showModal && <Close
        src="/img/close.png"
        onClick={() => setShowModal(false)}
      />}
    </Container>
  );

}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  height: 417px;
  padding: 62px 0 0 0;
  border-bottom: 2px solid var(--hr-color);
`

const HeaderText = styled.h1`
  color: var(--shade-1);
  height: 20px;
  font-size: 18px;
  margin-bottom: 51px;
`
const Close = styled.img`
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 99;
  cursor: pointer;
  width: 21px;
  height: 21px;
`
export default Subscribe;