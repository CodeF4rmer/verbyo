import styled from 'styled-components';
import { useState } from 'react';

import Button from 'components/Button';
import Modal from './Modal'
import { mobile } from 'utils';

const Subscribe: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Container>
      <Logo src="/img/logo.png" />
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
  ${mobile} {
    height: 300px;
  }
  padding: 62px 0 0 0;
  border-bottom: 0.5px solid var(--line);
`
const Logo = styled.img`
  width: 264px;
  height: 132px;
  ${mobile} {
    width: 166px;
    height: 83px;
  }
`

const HeaderText = styled.h1`
  color: var(--shade-1);
  height: 20px;
  font-size: 18px;
  margin-bottom: 51px;
  text-align: center;
  ${mobile} {
    font-size: 12px;
    margin-bottom: 20px;
  }
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