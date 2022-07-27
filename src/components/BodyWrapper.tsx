import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { checkSession } from '../util/api/session';

type BodyWrapperProps = {
  children: JSX.Element | JSX.Element[];
}

function BodyWrapper({ children }: BodyWrapperProps) {
  // Any time a window is focused, check if the user is logged in
  useEffect(()=>{
    checkSession();
    window.addEventListener('focus', checkSession);
  }, []);

  return (
    <Container fluid="sm">
      {children}
    </Container>
  );
}

export default BodyWrapper;
