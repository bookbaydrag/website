import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { useNoIdRedirect } from '../util/hooks';

type EventsParams = {
  slug: string;
  id: string;
}

function Events() {
  const { slug, id } = useParams<EventsParams>();

  useNoIdRedirect(id);

  return (
    <div>
      <Helmet>
        {/* TODO: add title */}
      </Helmet>
      Event {slug} {id}
    </div>
  );
};

export default Events;
