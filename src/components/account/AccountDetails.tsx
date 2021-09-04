import { FormEventHandler, useState } from 'react';
import { newPersona } from '../../util/api/persona';
import { logOut, useSession, validateSession } from '../../util/api/session';
import PersonaCard from '../PersonaCard';

function AccountDetails() {
  const [showAdd, setShowAdd] = useState(false);
  const session = useSession();

  const handleLogOut: FormEventHandler = (e) => {
    e.preventDefault();
    logOut();
  };

  if (!session) {
    logOut();
    return null;
  }

  const personas = session.account.personas.map((persona)=>{
    return (
      <PersonaCard
        key={persona._id}
        personaData={persona}
        admin={true}
      />
    );
  });

  return (
    <div>
      <div>{session.account.email}</div>
      <form onSubmit={handleLogOut}>
        <input type="submit" value="Log Out" />
        <input
          type="button"
          value="reload session"
          onClick={validateSession}
        />
      </form>
      <div>
        {personas}
      </div>
      <input
        type="button"
        value="Add Persona"
        onClick={()=>setShowAdd(!showAdd)}
      />
      {showAdd ?
      <PersonaCard
        personaData={newPersona}
        admin={true}
        cancel={()=>setShowAdd(false)}
      /> :
      null
      }
    </div>
  );
}

export default AccountDetails;
