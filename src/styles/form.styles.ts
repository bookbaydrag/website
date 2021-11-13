import styled from 'styled-components';
import { COLORS } from './global.styles';

const formItemMargin = '0 1em .5em 0';

export const Form = styled.form`
  width: fit-content;
  height: auto;
  display: flex;
  flex-direction: column;
`;

type FieldsetProps = {
  flexDirection: 'row' | 'column';
}

const justifyContent = {
  column: 'flex-start',
  row: 'space-between',
};

export const Fieldset = styled.fieldset<FieldsetProps>`
  width: fit-content;
  height: auto;
  display: flex;
  flex-direction: ${(props)=>props.flexDirection};
  justify-content: ${(props)=>justifyContent[props.flexDirection]};
  border: none;
`;

export const Field = styled.div`
  width: 100%;
  max-width: 300px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin: ${formItemMargin};
`;

type InputProps = {
  error?: boolean;
}

export const TextInput = styled.input<InputProps>`
  border: none;
  border-style: solid;
  border-width: 0 0 1.5px 1.5px;
  border-color: ${(props)=>{
    return props.error ? COLORS.red : COLORS.black;
  }};
  height: 1.5rem;
  margin: ${formItemMargin};
  background-color: ${COLORS.brown};
  
  :disabled {
    border-color: ${COLORS.brown};
  }
`;

export const Button = styled.div`
  width: fit-content;
  padding: 5px;
  margin: 0 5px 5px 0;
  background-color: gray;
  color: black;
  cursor: pointer;

  :hover{
    background-color: lightgray;
  }
`;

export const Submit = styled.input`
  width: fit-content;
  padding: 5px;
  margin: 0 5px 5px 0;
  background-color: ${COLORS.lightBlue};
  font-size: 1em;
  color: black;
  cursor: pointer;
  border: none;

  :hover{
    background-color: lightgray;
  }

`;
