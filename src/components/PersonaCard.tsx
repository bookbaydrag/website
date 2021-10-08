import { FormEventHandler, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  Button,
  Field,
  Fieldset,
  Form,
  Label,
  Submit,
  TextInput,
} from '../styles/form.styles';
import { COLORS } from '../styles/global.styles';
// import { COLORS } from '../styles/global.styles';
import {
  addPersona,
  deletePersona,
  updatePersona,
} from '../util/api/persona';
import { BBDPersona } from '../util/types';

const Card = styled.div`
  width: fit-content;
  border: solid 1px lightgray;
  margin: 10px 0 10px 0;
  background-color: ${COLORS.brown};
`;

export type PersonCardProps = {
  personaData: BBDPersona;
  admin?: boolean;
  cancel?: ()=>void;
}

const PersonaCard = ({
  personaData,
  admin = false,
  cancel,
}: PersonCardProps) =>{
  const [edit, setEdit] = useState(!!cancel);
  const [data, setData] = useState<BBDPersona>(personaData);

  const focusRef = useRef<HTMLInputElement>(null);

  const handleAddOrUpdate: FormEventHandler = async (e) => {
    e.preventDefault();
    if (cancel) {
      await addPersona(data);
      cancel();
    } else {
      await updatePersona(data);
      setEdit(false);
    }
  };

  const handleDelete: FormEventHandler = async (e)=>{
    e.preventDefault();
    await deletePersona(data);
  };

  function handleFieldChange(e: any) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function handleEditCancel() {
    if (cancel) {
      cancel();
    } else {
      setEdit(!edit);
    }
  }

  useEffect(()=>{
    if (edit) {
      // When editing is enabled, set focus
      // to the stage name input
      focusRef.current?.focus();
    } else {
      // Reset data
      setData(personaData);
    }
  }, [edit]);

  return (
    <Card>
      <Form
        onSubmit={handleAddOrUpdate}
      >
        <Fieldset
          flexDirection="row"
          name="basics"
          disabled={!edit}
        >
          <Field>
            <Label
              htmlFor="stageName"
            >
              Stage Name
            </Label>
            <TextInput
              ref={focusRef}
              type="text"
              id="stageName"
              name="stageName"
              value={data.stageName}
              onChange={handleFieldChange}
              error={false}
            />
          </Field>
          <Field>
            <Label
              htmlFor="pronouns"
            >
              Pronouns
            </Label>
            <TextInput
              type="text"
              id="pronouns"
              name="pronouns"
              value={data.pronouns}
              onChange={handleFieldChange}
              error={false}
            />
          </Field>
        </Fieldset>
        {/* <fieldset name="demographics" disabled={!edit}>
          <legend>Demographics</legend>
        </fieldset> */}
        <Fieldset
          flexDirection='row'
        >
          {admin ?
            <Button
              onClick={handleEditCancel}
            >
              {edit ? 'Cancel' : 'Edit'}
            </Button> :
              null
          }
          {admin && edit ?
            <Submit
              type="submit"
              value="Submit"
            /> :
            null
          }
          {admin && !cancel ?
            <Button
              onClick={handleDelete}
            >
              Delete
            </Button> :
            null
          }
        </Fieldset>
      </Form>

    </Card>
  );
};

export default PersonaCard;
