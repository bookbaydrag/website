import { useParams } from 'react-router-dom';
import { useNoIdRedirect } from '../util/hooks';

type PersonsParams = {
  slug: string;
  id: string;
}

function Persons() {
  const { slug, id } = useParams<PersonsParams>();

  useNoIdRedirect(id);

  return (
    <div>
      Person {slug} {id}
    </div>
  );
};

export default Persons;
