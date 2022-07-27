import { useState } from 'react';
import { Col } from 'react-bootstrap';
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
      <button
        onClick={logOut}
      >
        Log Out
      </button>
      <button
        onClick={validateSession}
      >
        Reload
      </button>
      <h1>My Personas</h1>
      <Col>
        {personas}
      </Col>
      <button
        onClick={()=>setShowAdd(!showAdd)}
      >
        Add Persona
      </button>
      {showAdd ?
      <Col>
        <PersonaCard
          personaData={newPersona}
          admin={true}
          cancel={()=>setShowAdd(false)}
        />
      </Col> :
      null
      }
    </div>
  );
}

export default AccountDetails;
