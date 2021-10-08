import { useEffect } from 'react';
import styled from 'styled-components';
import { COLORS } from '../styles/global.styles';
import { checkSession } from '../util/api/session';

type BodyWrapperProps = {
  children: React.ReactNode
}

const Body = styled.div`
  width: 1000px;
  height: 100%;
  margin: auto;
  /* border-left: solid 1px lightgray; */
  /* border-right: solid 1px lightgray; */
  /* box-shadow: 0 0 3px 5px lightgray; */
  background-color: ${COLORS.brown};
  padding: 0 20px 0 20px;
`;

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
