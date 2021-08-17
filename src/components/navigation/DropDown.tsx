import styled from 'styled-components';

const Menu = styled.ul`
  position: absolute;
  top: 50px;
  right: 0;
  // bottom: 100%;
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;

const DropdownMenu = ({ active }: {active: boolean}) => {
  if (active) {
    return (
      <Menu>
        <li><a href="/signUp">Sign Up</a></li>
        <li><a href="/logIn">Log In</a></li>
        <li><a href="/btw">BTW you suck!</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contactUs">Contact Us</a></li>
      </Menu>
    );
  }

  return null;
};

export default DropdownMenu;


// useEffect(() => {
//   const pageClickEvent = (e) => {
//     if (dropdownRef.current !== null &&
//       !dropdownRef.current.contains(e.target)) {
//       setIsActive(!isActive);
//     };
//   };

//   if (isActive) {
//     window.addEventListener('click', pageClickEvent);
//   }

//   return () => {
//     window.removeEventListener('click', pageClickEvent);
//   };
// }, [isActive]);

// const DropdownMenu = () => {
//   const dropdownRef = useRef(null);
//   const [isActive, setIsActive] = useState(false);
//   const onClick = () => setIsActive(!isActive);


// }
