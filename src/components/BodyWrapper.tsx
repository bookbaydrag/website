import { useEffect } from 'react';
import { Body } from '../styles/body.styles';
import { checkSession } from '../util/api/session';

type BodyWrapperProps = {
  children: React.ReactNode
}

function BodyWrapper({ children }: BodyWrapperProps) {
  useEffect(()=>{
    checkSession();
    window.addEventListener('focus', checkSession);
  }, []);

  return (
    <Body>
      {children}
    </Body>
  );
}

export default BodyWrapper;
