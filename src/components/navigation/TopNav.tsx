// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import DropdownMenu from './DropDown';

// const NavWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

// const NavLink = styled.a`
//   height: 2em;
//   width: auto;
//   padding: 5px;
//   /* justify-content: center; */
//   text-decoration: none;
//   cursor: pointer;
//   /* color: white; */
// `;

function TopNav() {
  const [isActive, setIsActive] = useState(false);
  const menuDrop =
  useSpring({ transform: isActive ? 'translate3D(0,0,0)' :
  'translate3D(0,-90px,0)' });

  function showMenu() {
    setIsActive(!isActive);
  }

  return (
    <header>
      <Container>
        <Div>
          <Title>
            <Text>Book Bay Drag</Text>
          </Title>
          <Menu onClick={showMenu}>
            Menu
          </Menu>
        </Div>
        <animated.div style ={menuDrop}>
          <DropdownMenu active={isActive}/>
        </animated.div>
      </Container>
    </header>
  );
}

export default TopNav;


/*
header
  container flex box row: justify content space between;
    title
      text
    menu
      icon
  dropDown position absolute
    link
    link
    link

*/


export const Container = styled.div`
  display: flex;
  height: 50px;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  background-color: lightpink;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-itmes: baseline;
  padding: 0 20px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.5em;
`;

export const Text = styled.span`
  font-family: noto-sans;
  text-decoration: none;
`;

export const Menu = styled.div`
  left: 0;
  font-size: 1.25em;
`;

export const Icon = styled.img`
  
`;

export const DropDown = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  // right: 0;
`;

export const Links = styled.a`
  display: block;
  text-align: center;
  height: 2rem;
  width: 100%;
  text-decoration: none;
  padding: 5px;
`;


{/* <Header>
  <Container>
    <Title>
      <Text>

      </Text>
    </Title>
    <Menu>
      <Icon></Icon>
    </Menu>
    <DropDown>
      <ul>
        <li>
          <a></a>
        </li>
        <li>
          <a></a>
        </li>
        <li>
          <a></a>
        </li>
        <li>
          <a>Contact Us</a>
        </li>
      </ul>
    </DropDown>
  </Container>
</Header>; */}
