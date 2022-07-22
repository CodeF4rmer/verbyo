import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import SocialIcons from 'components/SocialIcons';

const MobileMenu: React.FC<any> = (props: any) => {
  const navigate = useNavigate();
  const [tab, setTab] = useState("/");

  const clickMenu = (pageName: string) => {
    navigate(pageName);
    setTab(pageName);
    props.setShowMobileMenu(false);
  };

  return (
    <Container>
      <Content>
        <MenuBar>
          <Menu
            onClick={() => clickMenu("/")}
            isActive={tab === "/"}
            isHelp={false}
          >
            Blog
          </Menu>
          <Menu
            onClick={() => clickMenu("/News")}
            isActive={tab === "/News"}
            isHelp={false}
          >
            News
          </Menu>
          <Menu
            onClick={() => clickMenu("/Help")}
            isActive={tab === "/Help"}
            isHelp={true}
          >
            Help
          </Menu>
          <Menu
            onClick={() => clickMenu("/Features")}
            isActive={tab === "/Features"}
            isHelp={false}
          >
            Features
          </Menu>
        </MenuBar>
        <Rec />
        <SocialIcons />
      </Content>
    </Container>
  );

}
const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 69.5px;
  bottom: 0;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 60px;
  background-color: var(--shade-4);
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  gap: 100px;
`

const Rec = styled.div`
  width: 300px;
  height: 1px;
  background-color: var(--header-color);
`

const MenuBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`

const Menu = styled.div<{ isActive: boolean; isHelp: boolean }>`
  cursor: pointer;
  color: ${props => props.isActive ? "var(--shade-0)" : "var(--header-color)"};
  font-size: var(--header-mobile-font);
`

export default MobileMenu;