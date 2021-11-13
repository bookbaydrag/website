import { useState } from 'react';
import { Button } from '../../styles/form.styles';
import { SectionHeading } from '../../styles/global.styles';
import { PersonaList } from '../../styles/persona.styles';
import { newPersona } from '../../util/api/persona';
import { logOut, useSession, validateSession } from '../../util/api/session';
import PersonaCard from '../PersonaCard';

function AccountDetails() {
  const [showAdd, setShowAdd] = useState(false);
  const session = useSession();

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
      <Button
        onClick={logOut}
      >
        Log Out
      </Button>
      <Button
        onClick={validateSession}
      >
        Reload
      </Button>
      <SectionHeading>My Personas</SectionHeading>
      <PersonaList>
        {personas}
      </PersonaList>
      <Button
        onClick={()=>setShowAdd(!showAdd)}
      >
        Add Persona
      </Button>
      {showAdd ?
      <PersonaList>
        <PersonaCard
          personaData={newPersona}
          admin={true}
          cancel={()=>setShowAdd(false)}
        />
      </PersonaList> :
      null
      }
    </div>
  );
}

export default AccountDetails;
