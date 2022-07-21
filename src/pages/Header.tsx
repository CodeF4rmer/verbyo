import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Logo from 'components/Logo';
import SocialIcons from 'components/SocialIcons';
import { desktop, mobile } from 'utils';
import MobileMenu from './Modal/MobileMenu';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState("/");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
          </Menus>
        </MenuBar>
        <SocialIcons isHeader={true} />
        <Drop
          src="/img/drop.png"
          onClick={() => setShowMobileMenu(true)}
          show={showMobileMenu}
        />
        <Close
          src="/img/close.png"
          onClick={() => setShowMobileMenu(false)}
          show={showMobileMenu}
        />
      </Content>
      {showMobileMenu &&
        <MobileMenu
          setShowMobileMenu={setShowMobileMenu}
        />
      }
    </Container>
  );

}
const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  ${desktop}, ${mobile} {
    width: 100%;
  }
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

const Menu = styled.div<{ isActive: boolean; isHelp: boolean }>`
  cursor: pointer;
  color: ${props => props.isActive ? "var(--shade-0)" : "var(--header-color)"};
  font-size: var(--header-font);
  ${mobile} {
    display: ${props => props.isHelp ? "block" : "none"};
  }
`

const Drop = styled.img<{ show: boolean }>`
  cursor: pointer;
  display: none;
  ${mobile} {
    display: ${props => props.show ? "none" : "block"};
    width: 30px;
    height: 21px;
  }
`
const Close = styled.img<{ show: boolean }>`
  cursor: pointer;
  display: none;
  ${mobile} {
    display: ${props => props.show ? "block" : "show"};
    width: 21px;
    height: 21px;
  }
`
export default Header;