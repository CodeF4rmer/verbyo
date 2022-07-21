import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Logo from 'components/Logo';
import SocialIcons from 'components/SocialIcons';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState("/");
  const clickMenu = (pageName: string) => {
    navigate(pageName);
    setTab(pageName);
  };
  return (
    <Container>
      <Content>
        <MenuBar>
          <LogoBar>
            <Logo
              width="94px"
              height="47px"
            />
            <Rec />
          </LogoBar>
          <Menus>
            <Menu
              onClick={() => clickMenu("/")}
              isActive={tab === "/"}
            >
              Blog
            </Menu>
            <Menu
              onClick={() => clickMenu("/News")}
              isActive={tab === "/News"}
            >
              News
            </Menu>
            <Menu
              onClick={() => clickMenu("/Help")}
              isActive={tab === "/Help"}
            >
              Help
            </Menu>
            <Menu
              onClick={() => clickMenu("/Features")}
              isActive={tab === "/Features"}
            >
              Features
            </Menu>
          </Menus>
        </MenuBar>
        <SocialIcons />
      </Content>

    </Container>
  );

}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 19px 0 0 0;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 1080px;
  height: 50.5px;
  padding: 0 10px;
`

const LogoBar = styled.div`
  display: flex;
  align-items: center;
`

const Rec = styled.div`
  width: 1px;
  height: 25px;
  background-color: var(--header-color);
`

const MenuBar = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const Menus = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`

const Menu = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  color: ${props => props.isActive ? "var(--shade-0)" : "var(--header-color)"};
  font-size: var(--header-font);
`

export default Header;