import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { useNoIdRedirect } from '../util/hooks';

type PersonsParams = {
  slug: string;
  id: string;
}

function Personas() {
  const { slug, id } = useParams<PersonsParams>();

  useNoIdRedirect(id);

  return (
    <div>
      <Helmet>
        {/* TODO: add title */}
      </Helmet>
      Persona {slug} {id}
    </div>
  );
};

export default Personas;
