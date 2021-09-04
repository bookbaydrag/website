import { useEffect } from 'react';
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
    <div>
      {children}
    </div>
  );
}

export default BodyWrapper;
