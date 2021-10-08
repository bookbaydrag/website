import styled from 'styled-components';
import { COLORS } from './global.styles';

export const Form = styled.form`
  width: fit-content;
  height: auto;
  display: flex;
  flex-direction: column;
`;

type FieldsetProps = {
  flexDirection: 'row' | 'column';
}

export const Fieldset = styled.fieldset<FieldsetProps>`
  width: fit-content;
  height: auto;
  display: flex;
  flex-direction: ${(props)=>props.flexDirection};
  border: none;
  margin: 5px;
  justify-content: ${(props)=>{
    switch (props.flexDirection ) {
      case 'column':
        return 'flex-start';
      case 'row':
        return 'space-between';
    }
  }}
`;


export const Field = styled.div`
  width: 100%;
  max-width: 300px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

type InputProps = {
  error?: boolean;
}

export const TextInput = styled.input<InputProps>`
  border: solid 1px lightgray;
  height: 1.5rem;
  background-color: ${COLORS.paper};
  ${(props)=>{
    if (props.error) {
      return 'border-bottom: solid 1.5px red;';
    }
  }}

  :disabled {
    background-color: ${COLORS.paper};
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
  background-color: ${COLORS.paper};
  color: black;
  cursor: pointer;
  border: none;

  :hover{
    background-color: lightgray;
  }


`;
