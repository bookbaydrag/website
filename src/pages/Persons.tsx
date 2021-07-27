import { useParams } from 'react-router-dom';
import { useNoIdRedirect } from '../util/hooks';

type PersonsParams = {
  id: string
}

function Persons() {
  const { id } = useParams<PersonsParams>();

  useNoIdRedirect(id);

  return (
    <div>
      Person {id}
    </div>
  );
};

export default Persons;
