import { FormEventHandler, useEffect, useRef, useState } from 'react';
import {
  addPersona,
  deletePersona,
  updatePersona,
} from '../util/api/persona';
import { BBDPersona } from '../util/types';

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
    <div>
      <form onSubmit={handleAddOrUpdate} >
        <fieldset name="basics" disabled={!edit}>
          <label htmlFor="stageName">Stage Name</label>
          <input
            ref={focusRef}
            type="text"
            id="stageName"
            name="stageName"
            value={data.stageName}
            onChange={handleFieldChange}
          />
          <label htmlFor="pronouns">Pronouns</label>
          <input
            type="text"
            id="pronouns"
            name="pronouns"
            value={data.pronouns}
            onChange={handleFieldChange}
          />
        </fieldset>
        {/* <fieldset name="demographics" disabled={!edit}>
          <legend>Demographics</legend>
        </fieldset> */}
        <fieldset>
          {admin ?
            <input
              type="button"
              value={edit ? 'Cancel' : 'Edit'}
              onClick={handleEditCancel} />:
              null
          }
          {admin && edit ?
            <input
              type="submit"
              value="Submit"
            /> :
            null
          }
          {admin && !cancel ?
            <input
              type="button"
              value="Delete"
              onClick={handleDelete}
            /> :
            null
          }
        </fieldset>
      </form>
    </div>
  );
};

export default PersonaCard;
