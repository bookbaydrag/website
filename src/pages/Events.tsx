import { useParams } from 'react-router-dom';
import { useNoIdRedirect } from '../util/hooks';

type EventsParams = {
  id: string
}

function Events() {
  const { id } = useParams<EventsParams>();

  useNoIdRedirect(id);

  return (
    <div>
      Event {id}
    </div>
  );
};

export default Events;
