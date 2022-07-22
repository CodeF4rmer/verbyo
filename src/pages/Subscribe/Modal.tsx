import ReactModal from 'react-modal';
import styled, { createGlobalStyle } from 'styled-components';
import { useEffect, useState } from 'react';

import Button from 'components/Button';
import { mobile } from 'utils';

const Modal: React.FC<any> = (props) => {
  const { showModal, setShowModal } = props;
  const [email, setEmail] = useState("")
  const [warning, setWarning] = useState(true);

  useEffect(() => {
    setWarning(!/\S+@\S+\.\S+/.test(email));
  }, [email]);

  return (
    <>
      <ModalStyles />
      <ReactModal
        isOpen={showModal}
        className="no-class"
        overlayClassName="myoverlay"
        ariaHideApp={false}
      >
        <Container>
          <Section>
            <Title>Subscribe to our newsletter !</Title>
            <Text>Stay up to date! Get all the news and updates directly from us. </Text>
          </Section>
          <Section>
            {warning &&
              <Warning>Please enter the correct Email format</Warning>
            }
            <Email>
              <Input
                placeholder="Enter your email here"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                onClick={() => {
                  alert("Success !");
                  setShowModal(false);
                }
                }
                text="Subscribe"
              />
            </Email>
          </Section>
        </Container>
      </ReactModal>
    </>
  );

}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const Title = styled.span`
  color: var(--shade-0);
  font-size: 30px;
  font-family: GraphikBold;
`
const Text = styled.span`
  color: var(--shade-2);
  font-size: 16px;
  font-family: GraphikRegular;
`

const Warning = styled(Text)`
  color: var(--warning-color);
`
const Email = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  ${mobile} {
    flex-direction: column;
  }
  gap: 50px;
`

const Input = styled.input`
  width: 300px;
  border: none;
  border-bottom: 1px solid var(--shade-2);
  color: var(--shade-2);
  font-size: 16px;
  font-family: GraphikRegular;
  box-sizing: border-box;
  padding: 15px 5px;
  outline: none;
  ${mobile} {
    text-align: center;
  }
`
const ModalStyles = createGlobalStyle`
.myoverlay {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--shade-4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.ReactModal__Overlay {
  opacity: 0;
  transition: opacity 400ms ease-in-out;
}

.ReactModal__Overlay--after-open {
  opacity: 1;
}
`

export default Modal;